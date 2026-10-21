'use client';

import React, { useState } from 'react';
import { useAppState } from '../../lib/state/AppStateProvider';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';

const emailSchema = z.string().email('Please enter a valid email address.');

export function NewsletterBand({ className = '' }: { className?: string }) {
  const { subscribeNewsletter, state } = useAppState();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email.trim());
    if (!result.success) {
      setError(result.error.issues[0]?.message || 'Invalid email');
      return;
    }
    setError('');
    subscribeNewsletter(result.data);
    setSubmitted(true);
  };

  const isAlreadySubscribed = state.newsletterSubscribed.includes(email.trim());

  return (
    <section className={`bg-pale-blue border-y border-slate-200 py-12 md:py-16 ${className}`}>
      <div className="max-w-screen-2xl w-full mx-auto px-4 sm:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
              The Daily Brief / In your inbox
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-navy font-normal mb-3 leading-tight">
              A considered start to your day.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              The stories, ideas and objects worth your attention. Our editors&apos; essential design news, delivered every weekday morning.
            </p>
          </div>

          <div className="lg:col-span-5">
            {submitted || isAlreadySubscribed ? (
              <div className="bg-white border border-slate-200 p-6 flex items-start gap-3 rounded-xs shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-navy text-base font-medium">You&apos;re subscribed</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Look for tomorrow&apos;s morning dispatch in your inbox. No spam, ever.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-grow">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="you@studio.com"
                      className="w-full px-4 py-3 bg-white border border-slate-300 text-sm text-navy placeholder-slate-400 focus:outline-hidden focus:border-navy rounded-xs transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-wider font-medium whitespace-nowrap rounded-xs transition-colors shadow-xs"
                  >
                    <span>Subscribe free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {error && <p className="text-xs text-rose-600 pl-1">{error}</p>}

                <p className="text-[11px] text-slate-500 pt-1 leading-normal">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
