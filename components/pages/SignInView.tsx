'use client';

import React, { useId, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import type { ViewType, UserAccount } from '../../lib/models/index';
import { ArrowLeft, ArrowRight, AtSign, Lock } from 'lucide-react';
import { hashPasswordForTransport } from '@/lib/api/hash';

interface SignInViewProps {
  onNavigate: (view: ViewType) => void;
  /** Fired after NextAuth establishes a session. Parent can refresh / redirect. */
  onSignInSuccess: (account: UserAccount) => void;
}

type Tab = 'individual' | 'institutional';

export default function SignInView({
  onNavigate,
  onSignInSuccess,
}: SignInViewProps): React.ReactElement {
  const router = useRouter();
  const emailId = useId();
  const passwordId = useId();
  const domainId = useId();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [institutionalCode, setInstitutionalCode] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('individual');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resetNotice, setResetNotice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage(null);
    setResetNotice(null);

    // ---- client-side validation ----
    if (activeTab === 'individual') {
      if (!email.trim() || !password.trim()) {
        setErrorMessage('Please enter both your email and password.');
        return;
      }
    } else {
      if (!institutionalCode.trim()) {
        setErrorMessage(
          'Please enter your institutional credential or library token.',
        );
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const payload =
        {
              mode: 'login',
              email: email,
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
        // NextAuth has set the session cookie; hand a UserAccount shape
        // to the parent so any legacy consumer keeps working.
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
    setResetNotice(
      'Password reset dispatch sent to your institutional address.',
    );
  };

  return (
    <main className="flex-1 w-full bg-[#ffffff] flex items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col w-full max-w-xl mx-auto py-8">
        {/* Back */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => onNavigate('archive')}
            className="inline-flex items-center gap-2 font-label-md text-[12px] text-[#5e5e5c] hover:text-[#000615] transition-colors tracking-widest uppercase cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              <ArrowLeft />
            </span>
            Return to Publication
          </button>
        </div>

        {/* Header */}
        <div className="space-y-3 mb-8">
          <span className="inline-block px-3 py-1 bg-[#f6f3f2] text-[#000615] text-[11px] font-label-md tracking-[0.14em] uppercase">
            Form &amp; Field Subscriber Portal
          </span>
          <h1 className="font-headline-xl text-3xl sm:text-4xl text-[#0b1f3a] tracking-tight font-serif">
            Access Your Spatial Archive
          </h1>
          <p className="font-body-md text-[15px] text-[#5e5e5c]">
            Enter your subscriber credentials or connect via institutional
            library credentials.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E2DFD8] mb-6">
          <button
            type="button"
            onClick={() => {
              setActiveTab('individual');
              setErrorMessage(null);
              setResetNotice(null);
            }}
            className={`font-label-md text-[12px] uppercase tracking-wider py-3 px-5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'individual'
                ? 'border-[#0b1f3a] text-[#000615] font-semibold'
                : 'border-transparent text-[#5e5e5c] hover:text-[#000615]'
            }`}
          >
            Individual Subscriber
          </button>
          {/* <button
            type="button"
            onClick={() => {
              setActiveTab('institutional');
              setErrorMessage(null);
              setResetNotice(null);
            }}
            className={`font-label-md text-[12px] uppercase tracking-wider py-3 px-5 transition-colors cursor-pointer border-b-2 ${
              activeTab === 'institutional'
                ? 'border-[#0b1f3a] text-[#000615] font-semibold'
                : 'border-transparent text-[#5e5e5c] hover:text-[#000615]'
            }`}
          >
            Institutional &amp; Studio SSO
          </button> */}
        </div>

        {/* Error */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-5 p-3.5 bg-[#ffdad6] border border-[#ba1a1a]/30 text-[#ba1a1a] font-body-sm text-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Reset notice */}
        {resetNotice && (
          <div
            role="status"
            className="mb-5 p-3.5 bg-[#e8f0e8] border border-[#0b1f3a]/20 text-[#0b1f3a] font-body-sm text-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              mark_email_read
            </span>
            <span>{resetNotice}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {activeTab === 'individual' ? (
            <>
              <div className="space-y-1.5">
                <label
                  htmlFor={emailId}
                  className="font-label-md text-[12px] text-[#5e5e5c] uppercase tracking-wider block"
                >
                  Subscriber Email
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
                    placeholder="name@firm.com"
                    className="w-full bg-[#F9F8F6] border border-[#E2DFD8] px-4 py-3 pl-11 font-body-md text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] disabled:opacity-60"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#75777e] text-[20px]">
                    <AtSign />
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={passwordId}
                    className="font-label-md text-[12px] text-[#5e5e5c] uppercase tracking-wider block"
                  >
                    Password
                  </label>
                  <a
                    href="#reset"
                    onClick={handleForgotPassword}
                    className="text-xs text-[#0b1f3a] hover:underline"
                  >
                    Forgot password?
                  </a>
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
                    className="w-full bg-[#F9F8F6] border border-[#E2DFD8] px-4 py-3 pl-11 font-body-md text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] disabled:opacity-60"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#75777e] text-[20px]">
                    <Lock />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor={domainId}
                  className="font-label-md text-[12px] text-[#5e5e5c] uppercase tracking-wider block"
                >
                  Institution or Firm Domain
                </label>
                <input
                  id={domainId}
                  type="text"
                  value={institutionalCode}
                  onChange={(e) => setInstitutionalCode(e.target.value)}
                  disabled={isSubmitting}
                  placeholder="e.g. ethz.ch, gsd.harvard.edu, riba.org"
                  autoComplete="organization"
                  className="w-full bg-[#F9F8F6] border border-[#E2DFD8] px-4 py-3 font-body-md text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] disabled:opacity-60"
                />
              </div>

              <div className="p-4 bg-[#F9F8F6] border border-[#E2DFD8] text-xs font-body-sm text-[#5e5e5c] space-y-1">
                <div className="font-label-md text-[11px] text-[#000615] uppercase tracking-wider font-semibold">
                  Recognized Institutional Networks
                </div>
                <p>
                  Includes ETH Zürich, Harvard GSD, Architectural Association
                  London, Politecnico di Milano, and participating RIBA
                  chartered studios.
                </p>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0b1f3a] font-lora hover:bg-[#000615] text-white font-label-md text-[12px] tracking-[0.16em] uppercase py-4 px-6 flex items-center justify-center gap-3 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {isSubmitting ? 'Authenticating...' : 'Sign In To FORM & FIELD'}
              </span>
              <span className="material-symbols-outlined text-[16px]">
                <ArrowRight />
              </span>
            </button>
          </div>
        </form>

        {/* Register link */}
        <div className="mt-8 text-center border-t border-[#E2DFD8] pt-6">
          <p className="font-body-md text-[15px] text-[#5e5e5c]">
            Don&apos;t have a Form &amp; Field membership yet?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="text-[#000615] font-semibold hover:text-[#8C3F2E] underline underline-offset-4 ml-1 inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              Begin your spatial inquiry{' '}
              <span className="material-symbols-outlined text-[14px]">
                east
              </span>
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

function friendlyAuthError(raw: string): string {
  // NextAuth prefixes messages with "CredentialsSignin" or wraps them.
  // Strip known prefixes so the user sees the backend's message.
  if (raw === 'CredentialsSignin') {
    return 'Incorrect email or password.';
  }
  if (raw.startsWith('CredentialsSignin')) {
    return raw.replace(/^CredentialsSignin[\s:]*/, '');
  }
  return raw;
}