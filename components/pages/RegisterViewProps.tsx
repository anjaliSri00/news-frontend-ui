'use client';

import React, { useId, useMemo, useState } from 'react';
import Image from 'next/image';
import type { ViewType, UserAccount } from '../../lib/models';
// import { signup, SignupError } from '../../lib/api/auth';
import { signIn } from 'next-auth/react';

import {
  ArrowLeft,
  ArrowRight,
  AtSign,
  Phone,
  User,
  Lock,
  ShieldCheck,
} from 'lucide-react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { hashPasswordForTransport } from '@/lib/api/hash';

interface RegisterViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectMonograph: (monographId: string) => void;
  onRegisterSuccess: (account: UserAccount) => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

interface PasswordStrength {
  score: 0 | 1 | 2 | 3;
  label: string;
  color: string;
}

function getPasswordStrength(val: string): PasswordStrength {
  if (!val) {
    return {
      score: 0,
      label: 'Password complexity required',
      color: 'text-[#5e5e5c]',
    };
  }
  if (val.length < 6) {
    return {
      score: 1,
      label: 'Fragile — Add more characters',
      color: 'text-[#ba1a1a]',
    };
  }
  if (val.length < 10 || !/\d/.test(val) || !/[A-Za-z]/.test(val)) {
    return { score: 2, label: 'Moderate strength', color: 'text-[#8C3F2E]' };
  }
  return {
    score: 3,
    label: 'High architectural resistance',
    color: 'text-[#0b1f3a] font-medium',
  };
}

const MOBILE_REGEX = /^\+?\d{8,15}$/;
const PASSWORD_LETTER = /[A-Za-z]/;
const PASSWORD_DIGIT = /\d/;

const MONOGRAPH_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuABnWV8E421W1CPfuCOTb_OMke6DguolMoBuZ5ajdvNtfFLbq2KqwX3xlNFh6zn0gOot8RK8dqT0GlA8yuXmlIOu731gJE2J1gnlQODDf4MbhEsOTmfUMNWWWRtD1LiAiHBnfxkCjHKAI3OhmR6jebLj_F945-2mxuELEf5dJQdp3pO5fQD60UtVzqRoTxcUb3DtmQ6zh6HRDtKsS5MN-mHNW4yROr2VBVcQPPNxjLrRGYjMhAxkHOg2DHg95Q-4mn7RA';

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/);
  return {
    firstName: parts[0] ?? '',
    lastName: parts.slice(1).join(' ') ?? '',
  };
}

function mapUserToAccount(
  user: { id: string; code: string; name: string; email: string; mobile: string | null },
): UserAccount {
  const { firstName, lastName } = splitName(user.name);
  return {
    id: user.id,
    code: user.code,
    fullName: user.name,
    firstName,
    lastName,
    email: user.email,
    mobile: user.mobile,
  };
}

export function RegisterView({onNavigate, onSelectMonograph, onRegisterSuccess, onOpenTerms, onOpenPrivacy }: RegisterViewProps): React.ReactElement {
 const router = useRouter();
  const nameId = useId();
  const emailId = useId();
  const mobileId = useId();
  const passwordId = useId();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [termsConsent, setTermsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setFormError(null);

    if (!name.trim()) return setFormError('Please enter your name.');
    if (!email.trim()) return setFormError('Please enter your email.');
    if (password.length < 8)
      return setFormError('Password must be at least 8 characters.');
    if (!/[A-Za-z]/.test(password))
      return setFormError('Password must contain at least one letter.');
    if (!/\d/.test(password))
      return setFormError('Password must contain at least one number.');
    if (!termsConsent)
      return setFormError('Please accept the Terms and Privacy Protocol.');

    setIsSubmitting(true);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        mode: 'signup',
        name: name.trim(),
        email: email.trim().toLowerCase(),
        mobile: mobile.trim() || '',
        password: hashPasswordForTransport(password), // ---hashed password 
      });

      if (result?.error) {
        setFormError(result.error);
      } else if (result?.ok) {
        toast.success('Membership established. Welcome to Form & Field.');
        router.replace('/');
        router.refresh();
      }
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : 'Registration failed.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="flex-1 w-full bg-[#ffffff] flex items-center justify-center p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col w-full max-w-7xl mx-auto py-4 md:py-8 px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
              <button
                type="button"
                onClick={() => onNavigate('archive')}
                className="inline-flex items-center gap-2 font-label-md text-[12px] text-[#5e5e5c] hover:text-[#000615] transition-colors tracking-widest uppercase group cursor-pointer text-left"
              >
                <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">
                  <ArrowLeft size={16} />
                </span>
                Return to Publication
              </button>
              <span className="inline-block px-3 py-1 bg-[#f6f3f2] text-[#000615] text-[11px] font-label-md tracking-[0.14em] uppercase self-start sm:self-auto">
                Membership &amp; Patronage · Autumn Issue
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-[56px] text-[#0b1f3a] tracking-tight font-serif">
                Begin Your Spatial Inquiry
              </h1>
              <p className="font-body-lg text-lg sm:text-[18px] text-[#5e5e5c] max-w-xl font-light leading-relaxed">
                Join our international community of architects, interior
                theorists, and spatial practitioners.
              </p>
            </div>

            {formError && (
              <div
                role="alert"
                className="mb-5 p-3.5 bg-[#ffdad6] border border-[#ba1a1a]/30 text-[#ba1a1a] font-body-sm text-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  error
                </span>
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full name — matches backend `name` */}
              <div className="space-y-1.5">
                <label
                  htmlFor={nameId}
                  className="font-label-md text-[12px] text-[#5e5e5c] uppercase tracking-wider block"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id={nameId}
                    type="text"
                    required
                    autoComplete="name"
                    maxLength={120}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#F9F8F6] border border-[#E2DFD8]/60 px-4 py-3 pl-11 font-body-md text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] transition-colors disabled:opacity-60"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#75777e] text-[20px]">
                    <User size={20} />
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor={emailId}
                  className="font-label-md text-[12px] text-[#5e5e5c] uppercase tracking-wider"
                >
                  Professional / Institutional Email
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
                    className="w-full bg-[#F9F8F6] border border-[#E2DFD8]/60 px-4 py-3 pl-11 font-body-md text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] transition-colors disabled:opacity-60"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#75777e] text-[20px]">
                    <AtSign size={20} />
                  </span>
                </div>
              </div>

              {/* Mobile — optional */}
              <div className="space-y-1.5">
                <label
                  htmlFor={mobileId}
                  className="font-label-md text-[12px] text-[#5e5e5c] uppercase tracking-wider"
                >
                  Mobile Number{' '}
                </label>
                <div className="relative">
                  <input
                    id={mobileId}
                    type="tel"
                    autoComplete="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="+41 79 123 45 67"
                    required
                    className="w-full bg-[#F9F8F6] border border-[#E2DFD8]/60 px-4 py-3 pl-11 font-body-md text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] transition-colors disabled:opacity-60"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#75777e] text-[20px]">
                    <Phone size={20} />
                  </span>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor={passwordId}
                  className="font-label-md text-[12px] text-[#5e5e5c] uppercase tracking-wider"
                >
                  Create Password
                </label>
                <div className="relative">
                  <input
                    id={passwordId}
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="Min 8 chars, 1 letter, 1 number"
                    aria-describedby={`${passwordId}-strength`}
                    className="w-full bg-[#F9F8F6] border border-[#E2DFD8]/60 px-4 py-3 pl-11 font-body-md text-[15px] text-[#000615] placeholder:text-[#75777e] focus:outline-none focus:bg-[#ffffff] focus:border-[#0b1f3a] transition-colors disabled:opacity-60"
                  />
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#75777e] text-[20px]">
                    <Lock size={20} />
                  </span>
                </div>

                <div id={`${passwordId}-strength`} className="pt-2">
                  <div className="h-1 w-full bg-[#eae7e7] overflow-hidden flex gap-1">
                    <div
                      className={`h-full w-1/3 transition-colors duration-300 ${
                        strength.score >= 1
                          ? strength.score === 1
                            ? 'bg-[#ba1a1a]'
                            : strength.score === 2
                              ? 'bg-[#8C3F2E]'
                              : 'bg-[#0b1f3a]'
                          : 'bg-transparent'
                      }`}
                    />
                    <div
                      className={`h-full w-1/3 transition-colors duration-300 ${
                        strength.score >= 2
                          ? strength.score === 2
                            ? 'bg-[#8C3F2E]'
                            : 'bg-[#0b1f3a]'
                          : 'bg-transparent'
                      }`}
                    />
                    <div
                      className={`h-full w-1/3 transition-colors duration-300 ${
                        strength.score >= 3
                          ? 'bg-[#0b1f3a]'
                          : 'bg-transparent'
                      }`}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span
                      aria-live="polite"
                      className={`font-body-sm text-[13px] ${strength.color}`}
                    >
                      {strength.label}
                    </span>
                    <span className="font-label-md text-[11px] text-[#75777e] uppercase tracking-wider">
                      8+ chars · letter · digit
                    </span>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none group">
                  <input
                    type="checkbox"
                    required
                    checked={termsConsent}
                    onChange={(e) => setTermsConsent(e.target.checked)}
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 rounded-none accent-[#0b1f3a] text-[#0b1f3a] focus:ring-0 cursor-pointer"
                  />
                  <span className="font-body-sm text-[13px] text-[#5e5e5c] leading-snug">
                    I agree to the Form &amp; Field{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenTerms();
                      }}
                      className="text-[#000615] underline underline-offset-4 hover:text-[#8C3F2E] transition-colors cursor-pointer"
                    >
                      Terms of Publication
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenPrivacy();
                      }}
                      className="text-[#000615] underline underline-offset-4 hover:text-[#8C3F2E] transition-colors cursor-pointer"
                    >
                      Privacy Protocol
                    </button>
                    .
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0b1f3a] hover:bg-[#000615] text-[#ffffff] font-label-md text-[12px] tracking-[0.16em] uppercase py-4 px-6 flex items-center justify-center gap-3 transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting
                      ? 'Establishing Inquiry Record...'
                      : 'Create Form & Field Account'}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>

              <div className="pt-4 text-center sm:text-left">
                <p className="font-body-md text-[15px] text-[#5e5e5c]">
                  Already a subscriber or institutional partner?{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('signin')}
                    className="text-[#000615] font-medium hover:text-[#8C3F2E] underline underline-offset-4 ml-1 inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Sign in here{' '}
                    <span className="material-symbols-outlined text-[14px]">
                      east
                    </span>
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Right column — unchanged showcase */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-24 mt-6 lg:mt-0">
            <div className="bg-[#F9F8F6] border border-[#E2DFD8] p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8C3F2E]" />
                  <span className="font-label-md text-[11px] text-[#000615] tracking-widest uppercase">
                    Current Monograph Delivery
                  </span>
                </div>
                <span className="font-label-md text-[11px] text-[#5e5e5c] tracking-widest uppercase">
                  October 2025
                </span>
              </div>

              <div
                onClick={() => onSelectMonograph('issue-48')}
                className="relative bg-[#f6f3f2] overflow-hidden aspect-[4/3] mb-6 flex items-center justify-center group cursor-pointer border border-[#E2DFD8]"
                title="Click to preview Issue № 48"
              >
                <Image
                  src={MONOGRAPH_IMAGE_URL}
                  alt="Featured monograph cover — Issue № 48: Materiality in Extreme Latitudes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000615]/85 via-[#000615]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#ffffff]/95 backdrop-blur-sm border border-[#E2DFD8]/80 group-hover:bg-[#ffffff] transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-md text-[10px] text-[#8C3F2E] uppercase tracking-[0.2em] block">
                      Print &amp; Digital Monograph
                    </span>
                    <span className="font-label-md text-[10px] text-[#5e5e5c] uppercase flex items-center gap-1 group-hover:text-[#0b1f3a]">
                      Read inquiry{' '}
                      <span className="material-symbols-outlined text-[12px]">
                        east
                      </span>
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-lg sm:text-[20px] text-[#000615] tracking-tight font-serif">
                    Issue № 48: Materiality in Extreme Latitudes
                  </h3>
                  <p className="font-body-sm text-[13px] text-[#5e5e5c] line-clamp-1 mt-1">
                    Field surveys from Svalbard, Atacama Desert, and the Kyoto
                    Highlands.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <span className="font-headline-xl text-[48px] leading-none text-[#c4c6ce] font-serif select-none block h-6">
                  “
                </span>
                <blockquote className="font-headline-sm text-lg sm:text-[20px] text-[#0b1f3a] italic font-light leading-relaxed font-serif">
                  Form &amp; Field has redefined how our studio documents
                  tactile culture and quiet domesticity. Essential reading for
                  contemporary architecture.
                </blockquote>
                <div className="pt-2 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e5e2e1] border border-[#E2DFD8] flex items-center justify-center font-headline-sm text-[#000615] text-sm font-semibold tracking-wider font-serif">
                    AO
                  </div>
                  <div>
                    <div className="font-label-md text-[12px] text-[#000615] tracking-wider uppercase font-semibold">
                      Amara Okafor
                    </div>
                    <div className="font-body-sm text-[13px] text-[#5e5e5c]">
                      Principal Architect, Studio Okafor (London &amp; Lagos)
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-8 mt-6 border-t border-[#E2DFD8]">
                <div className="space-y-0.5">
                  <div className="font-headline-sm text-xl sm:text-[20px] text-[#000615] tracking-tight font-serif">
                    1.42M+
                  </div>
                  <div className="font-label-md text-[10px] text-[#5e5e5c] tracking-widest uppercase">
                    Global Readers
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-headline-sm text-xl sm:text-[20px] text-[#000615] tracking-tight font-serif">
                    124
                  </div>
                  <div className="font-label-md text-[10px] text-[#5e5e5c] tracking-widest uppercase">
                    Studios
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-headline-sm text-xl sm:text-[20px] text-[#000615] tracking-tight font-serif">
                    48
                  </div>
                  <div className="font-label-md text-[10px] text-[#5e5e5c] tracking-widest uppercase">
                    Curated Issues
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f6f3f2] border border-[#E2DFD8] p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#ffffff] border border-[#E2DFD8] flex items-center justify-center text-[#0b1f3a] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    <ShieldCheck size={22} />
                  </span>
                </div>
                <div>
                  <div className="font-label-md text-[12px] text-[#000615] tracking-wider uppercase font-semibold">
                    Editorial Integrity Guarantee
                  </div>
                  <p className="font-body-sm text-[13px] text-[#5e5e5c]">
                    Zero algorithmic feeds. Uninterrupted spatial inquiry.
                  </p>
                </div>
              </div>
              <div className="hidden sm:block text-right shrink-0">
                <span className="font-label-md text-[10px] text-[#636360] tracking-widest uppercase">
                  Est. 2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegisterView;