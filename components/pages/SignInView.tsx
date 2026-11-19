'use client';

import React, { useId, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import type { ViewType, UserAccount } from '../../lib/models/index';
import { ArrowLeft, ArrowRight, AtSign, Lock } from 'lucide-react';
import { hashPasswordForTransport } from '@/lib/api/hash';

interface SignInViewProps {
  onNavigate: (view: ViewType) => void;
  onSignInSuccess: (account: UserAccount) => void;
}

export default function SignInView({
  onNavigate,
  onSignInSuccess,
}: SignInViewProps): React.ReactElement {
  const router = useRouter();
  const emailId = useId();
  const passwordId = useId();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resetNotice, setResetNotice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage(null);
    setResetNotice(null);

    // Client-side validation
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter both your email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        mode: 'login',
        email: email.trim().toLowerCase(),
        password: hashPasswordForTransport(password),
      };

      const result = await signIn('credentials', {
        redirect: false,
        ...payload,
      });

      if (result?.error) {
        setErrorMessage(friendlyAuthError(result.error));
        return;
      }

      if (result?.ok) {
        onSignInSuccess({
          id: '',
          code: '',
          firstName: email.split('@')[0] ?? '',
          lastName: '',
          fullName: email.split('@')[0] ?? '',
          email: email.trim(),
          mobile: null,
        });
        router.replace('/dashboard');
        router.refresh();
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Sign in failed. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setResetNotice('Password reset link sent to your email address.');
  };

  return (
    <main className="flex-1 w-full bg-[#ffffff] flex items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col w-full max-w-md mx-auto py-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => onNavigate('archive')}
            className="inline-flex items-center gap-2 font-sans text-[12px] text-[#5e5e5c] hover:text-[#000615] transition-colors tracking-widest uppercase cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Publication
          </button>
        </div>

        {/* Header */}
        <div className="space-y-3 mb-8">
          <span className="inline-block px-3 py-1 bg-[#f6f3f2] text-[#000615] text-[11px] font-bold tracking-[0.14em] uppercase rounded-sm">
            Form &amp; Field Login
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0b1f3a] tracking-tight">
            Welcome Back
          </h1>
          <p className="font-sans text-[15px] text-[#5e5e5c]">
            Sign in to access your dashboard, saved monographs, and editorial archives.
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-[13px] flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Reset Notice */}
        {resetNotice && (
          <div
            role="status"
            className="mb-5 p-3.5 bg-green-50 border border-green-200 text-green-800 text-[13px] flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
            <span>{resetNotice}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          
          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor={emailId}
              className="font-sans text-[12px] font-semibold text-[#5e5e5c] uppercase tracking-wider block"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id={emailId}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                placeholder="name@formandfield.com"
                className="w-full bg-[#F9F8F6] border border-[#E2DFD8] px-4 py-3 pl-11 font-sans text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] disabled:opacity-60 transition-colors"
              />
              <span className="absolute left-3 top-3.5 text-[#75777e]">
                <AtSign className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor={passwordId}
                className="font-sans text-[12px] font-semibold text-[#5e5e5c] uppercase tracking-wider block"
              >
                Password
              </label>
              {/* <a
                href="#reset"
                onClick={handleForgotPassword}
                className="text-[13px] text-[#0b1f3a] hover:underline"
              >
                Forgot password?
              </a> */}
            </div>
            <div className="relative">
              <input
                id={passwordId}
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
                placeholder="••••••••"
                className="w-full bg-[#F9F8F6] border border-[#E2DFD8] px-4 py-3 pl-11 font-sans text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] disabled:opacity-60 transition-colors"
              />
              <span className="absolute left-3 top-3.5 text-[#75777e]">
                <Lock className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0b1f3a] hover:bg-[#000615] text-white font-sans text-[13px] tracking-[0.16em] uppercase py-3.5 px-6 flex items-center justify-center gap-3 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
            >
              <span>{isSubmitting ? 'Authenticating...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="mt-8 text-center border-t border-[#E2DFD8] pt-6">
          <p className="font-sans text-[14px] text-[#5e5e5c]">
            Don&apos;t have an account yet?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="text-[#000615] uppercase font-bold hover:text-[#8C3F2E] underline underline-offset-4 ml-1 inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              Signup
            </button>
          </p>
        </div>

      </div>
    </main>
  );
}

function friendlyAuthError(raw: string): string {
  if (raw === 'CredentialsSignin') {
    return 'Incorrect email or password.';
  }
  if (raw.startsWith('CredentialsSignin')) {
    return raw.replace(/^CredentialsSignin[\s:]*/, '');
  }
  return raw;
}