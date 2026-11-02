// import type { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import fetchApiResponse from '@/helper/api_data_store';

// interface BackendUser {
//   id: string;
//   code: string;
//   name: string;
//   email: string;
//   mobile: string | null;
// }

// interface SignupData {
//   user: BackendUser;
//   access_token?: string;
//   refresh_token?: string;
// }

// interface LoginData {
//   user: BackendUser;
//   access_token: string;
//   refresh_token: string;
// }

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         mode: { label: 'Mode', type: 'text' },
//         name: { label: 'Name', type: 'text' },
//         email: { label: 'Email', type: 'email' },
//         mobile: { label: 'Mobile', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         console.log("----------------ddddddddddddddddddd");

//         const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//         if (!baseUrl) throw new Error('NEXT_PUBLIC_API_URL is not configured');

//         try {
//           console.log("00000000000000000000000000000000")
//           if (credentials?.mode === 'signup') {
//             const response = await fetchApiResponse<SignupData>(
//               `${baseUrl}/api/v1/users/signup`,
//               {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                   name: credentials.name,
//                   email: credentials.email,
//                   password: credentials.password,
//                   mobile: credentials.mobile || undefined,
//                 }),
//               },
//             );
//             console.log(response,"-------signup")

//             if (response.meta.status !== 201) {
//               throw new Error(response.meta.message || 'Signup failed');
//             }

//             const { user } = response.data;
//             return {
//               id: user.id,
//               name: user.name,
//               email: user.email,
//               mobile: user.mobile,
//               accessToken: response.data.access_token ?? '',
//               refreshToken: response.data.refresh_token ?? '',
//             };
//           }

//           const response = await fetchApiResponse<LoginData>(
//             `${baseUrl}/api/v1/users/login`,
//             {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 email: credentials?.email,
//                 password: credentials?.password,
//               }),
//             },
//           );

//           if (response.meta.status === 200) {
//             const { user } = response.data;
//             return {
//               id: user.id,
//               name: user.name,
//               email: user.email,
//               mobile: user.mobile,
//               accessToken: response.data.access_token,
//               refreshToken: response.data.refresh_token,
//             };
//           }

//           throw new Error(response.meta.message || 'Authentication failed');
//         } catch (err) {
//           const message = err instanceof Error ? err.message : 'Authentication failed';
//           throw new Error(message.replace(/^Error:\s*/, ''));
//         }
//       },
//     }),
//   ],

//   session: {
//     strategy: 'jwt',
//     maxAge: 24 * 60 * 60, // align with access-token lifetime
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         return {
//           ...token,
//           accessToken: user.accessToken,
//           accessTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
//           refreshToken: user.refreshToken,
//           userId: user.id,
//           email: user.email,
//           mobile: user.mobile,
//         };
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       session.accessToken = token.accessToken as string;
//       session.refreshToken = token.refreshToken as string;
//       session.user = {
//         id: token.userId as string,
//         email: token.email as string,
//         mobile: token.mobile as string | null,
//       };
//       return session;
//     },
//   },

//   pages: { signIn: '/signin' },
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: process.env.NODE_ENV === 'development',
// };


import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {
  fetchApiResponseFull,
} from '@/helper/api_data_store';

interface BackendUser {
  id: string;
  code: string;
  name: string;
  email: string;
  mobile: string | null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        mode: { label: 'Mode', type: 'text' },
        name: { label: 'Name', type: 'text' },
        email: { label: 'Email', type: 'email' },
        mobile: { label: 'Mobile', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!baseUrl) throw new Error('NEXT_PUBLIC_API_URL is not configured');
        if (!credentials?.email || !credentials.password) {
          throw new Error('Email and password are required');
        }

        try {
          const endpoint =
            credentials.mode === 'signup'
              ? '/api/v1/users/signup'
              : '/api/v1/users/login';

          const payload =
            credentials.mode === 'signup'
              ? {
                  name: credentials.name,
                  email: credentials.email,
                  password: credentials.password,
                  mobile: credentials.mobile || undefined,
                }
              : {
                  email: credentials.email,
                  password: credentials.password,
                };

          const { body, headers } = await fetchApiResponseFull<{
            user: BackendUser;
          }>(`${baseUrl}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            credentials: 'include', // so the refresh-token cookie is stored
          });

          const expected = credentials.mode === 'signup' ? 201 : 200;
          if (body.meta.status !== expected) {
            throw new Error(body.meta.message || 'Authentication failed');
          }

          const accessToken = headers.get('access-token') ?? '';
          const setCookie = headers.get('set-cookie') ?? '';
          const refreshMatch = setCookie.match(/refresh-token=([^;]+)/);
          const refreshToken = refreshMatch?.[1] ?? '';

          if (!accessToken) {
            console.warn(
              '[authorize] No access-token header. Headers seen:',
              Array.from(headers.entries()),
            );
            throw new Error('Server did not return an access token');
          }

          const user = body.data.user;
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            // userType: user.userType,
            accessToken,
            refreshToken,
          };
        } catch (err) {
          const message =
            err instanceof Error ? err.message : 'Authentication failed';
          throw new Error(message.replace(/^Error:\s*/, ''));
        }
      },
    }),
  ],

  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          accessTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
          refreshToken: user.refreshToken,
          userId: user.id,
          email: user.email,
          mobile: user.mobile,
          // userType: user.userType,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.user = {
        id: token.userId as string,
        email: token.email as string,
        mobile: token.mobile as string | null,
      };
      return session;
    },
  },

  pages: { signIn: '/signin' },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};