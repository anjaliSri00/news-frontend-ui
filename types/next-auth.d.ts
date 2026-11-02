import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    mobile?: string | null;
    // userType?: string; 
    accessToken?: string;
    refreshToken?: string;
  }
  interface Session {
    accessToken: string;
    refreshToken: string;
    user: {
      id: string;
      email: string;
      mobile?: string | null;
    //   userType: string;  
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string;
    accessTokenExpires?: number;
    refreshToken?: string;
    userId?: string;
    email?: string;
    // userType?: string; 
    mobile?: string | null;
  }
}


export interface EventsListResponse {
  events: BackendEventPayload[];
  total?: number;
  page?: number;
  limit?: number;
}