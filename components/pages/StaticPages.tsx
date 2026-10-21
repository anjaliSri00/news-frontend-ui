'use client';

import React, { useState } from 'react';
import { Link } from '../../lib/router';
import { useAppState } from '../../lib/state/AppStateProvider';
import { NewsletterBand } from '../shared/NewsletterBand';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Please select or enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            The Publication
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-navy tracking-tight mb-4">
            About Form &amp; Field
          </h1>
          <p className="text-slate-600 font-serif italic text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            &ldquo;Good design isn’t just what we see. It’s how we choose to live.&rdquo;
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10 text-slate-700 leading-relaxed text-base sm:text-lg">
        <div>
          <h2 className="text-2xl font-serif text-navy mb-4">Our Editorial Charter</h2>
          <p className="mb-4">
            Founded in Copenhagen in 2024, Form &amp; Field / Lumen Journal is an independent international publication dedicated to architecture, interiors, and the ideas shaping our collective built environments.
          </p>
          <p>
            In an architectural landscape too often swayed by glossy computer renders and two-second social media scrolls, we stand for critical depth, material permanence, and spatial honesty. We believe the true measure of a building or room is not how dramatically it photographs at twilight, but the human life it shelters and sustains over decades.
          </p>
        </div>

        <div className="p-8 bg-slate-50 border-l-2 border-navy">
          <h3 className="font-serif text-navy text-xl mb-2">Independent &amp; Unsponsored</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Form &amp; Field accepts zero paid editorial placements. Every project reviewed, product spotlighted, and studio visited is selected solely by our independent editorial team based on design merit, environmental stewardship, and social purpose.
          </p>
        </div>

        <div id="team" className="pt-6 border-t border-slate-200">
          <h2 className="text-2xl font-serif text-navy mb-6">Editorial Leadership</h2>
          <div className="space-y-6 text-sm">
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-serif text-navy text-base font-medium">Isabel Hart</h4>
              <p className="text-xs text-slate-500 mb-1">Editor-in-Chief · Zurich &amp; Copenhagen</p>
              <p className="text-slate-600 text-xs leading-relaxed">
                Former architectural correspondent for European journals; specialist in Swiss timber masonry and public spatial democracy.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-serif text-navy text-base font-medium">Clara Voss</h4>
              <p className="text-xs text-slate-500 mb-1">Contributing Architecture Editor · Copenhagen</p>
              <p className="text-slate-600 text-xs leading-relaxed">
                Practicing architect with Voss Arkitekter; writes extensively on collective urban housing and courtyard revitalizations.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-serif text-navy text-base font-medium">Henrik Lind</h4>
              <p className="text-xs text-slate-500 mb-1">Materials Correspondent · Rotterdam</p>
              <p className="text-slate-600 text-xs leading-relaxed">
                Biomaterial chemist and technical writer documenting unstabilized earth composites, geopolymer binders, and bio-resins.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-navy text-base font-medium">Eva Laurent</h4>
              <p className="text-xs text-slate-500 mb-1">Living &amp; Furniture Editor · Paris &amp; Milan</p>
              <p className="text-slate-600 text-xs leading-relaxed">
                Curator and author covering textile anthropology, handcrafted ceramics, and heirloom furniture joinery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <NewsletterBand />
    </div>
  );
}

export function ContactPage() {
  const { showToast } = useAppState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Submission',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errMap: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) errMap[issue.path[0] as string] = issue.message;
      });
      setErrors(errMap);
      return;
    }

    setErrors({});
    setSubmitted(true);
    showToast(`Thank you, ${formData.name}. Your submission has been received by our editorial desk.`, 'success');
  };

  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            Get in touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-navy tracking-tight mb-4">
            Submissions &amp; Editorial Inquiries
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We welcome architectural monograph submissions, press releases, investigative tips, and institutional partnership proposals.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16">
        {submitted ? (
          <div className="p-8 border border-emerald-200 bg-emerald-50 rounded-xs text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-navy mb-2">Submission Received</h3>
            <p className="text-slate-700 text-sm leading-relaxed max-w-md mx-auto mb-6">
              Our editorial committee reviews new project submissions every Tuesday. If your submission fits our upcoming print and digital issues, an editor will respond directly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: 'Project Submission', message: '' });
              }}
              className="px-4 py-2 bg-navy text-white text-xs uppercase tracking-wider font-medium"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Henrik Lind"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
                />
                {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@studio.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div id="partner">
              <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">
                Inquiry Category *
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy bg-white"
              >
                <option value="Project Submission">Architectural Project Submission (Photos &amp; Drawings)</option>
                <option value="Product Launch">Product &amp; Material Launch Announcement</option>
                <option value="Interview Proposal">Designer Studio Interview Request</option>
                <option value="Institutional Partnership">Institutional / Cultural Partnership</option>
                <option value="Corrections">Editorial Query / Fact Correction</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">
                Project Synopsis or Message *
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Include project location, completion year, architectural materials, and Dropbox/WeTransfer link if sending high-resolution photography..."
                className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
              />
              {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
            >
              Transmit to Editorial Desk
            </button>
          </form>
        )}
      </div>

      <NewsletterBand />
    </div>
  );
}

export function SubscribePage() {
  const { subscribeNewsletter, state } = useAppState();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeNewsletter(email);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white">
      <section className="bg-navy text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-blue-300 font-medium block mb-2 font-sans">
            The Daily Brief · Morning Edition
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            A Considered Start to Your Day
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-sans">
            Every weekday morning, our editors send a curated five-minute digest of essential architecture news, material breakthroughs, and spatial essays.
          </p>
        </div>
      </section>

      <div className="max-w-xl mx-auto px-4 py-16">
        {submitted ? (
          <div className="p-8 border border-emerald-200 bg-emerald-50 text-center rounded-xs">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-navy mb-2">Welcome to The Daily Brief</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              A verification confirmation has been sent to <span className="font-semibold">{email}</span>. Your first dispatch will arrive at 07:00 GMT tomorrow morning.
            </p>
            <Link href="/" className="px-5 py-2.5 bg-navy text-white text-xs uppercase tracking-wider font-medium">
              Continue Reading
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 border border-slate-200 p-8 rounded-xs shadow-2xs">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Clara Voss"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
              >
                Subscribe Free to The Daily Brief
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-navy shrink-0" />
                <span>Zero advertisements, sponsor tracking, or third-party data sharing.</span>
              </p>
              <p>Unsubscribe anytime with one single click.</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function LoginPage() {
  const { showToast } = useAppState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoggedIn(true);
      showToast(`Welcome back, ${email}. Professional subscriber access verified.`, 'success');
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium block mb-2">
            Subscriber Portal
          </span>
          <h1 className="text-3xl font-serif text-navy">
            Sign In to Form &amp; Field
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Access your saved monographs, specification library, and research whitepapers.
          </p>
        </div>

        {loggedIn ? (
          <div className="p-8 border border-slate-200 bg-slate-50 text-center rounded-xs">
            <UserCheck className="w-10 h-10 text-navy mx-auto mb-3" />
            <h3 className="font-serif text-xl text-navy mb-1">Session Active</h3>
            <p className="text-xs text-slate-600 mb-6">Signed in as {email}</p>
            <div className="flex flex-col gap-2">
              <Link href="/saved" className="py-2.5 bg-navy text-white text-xs uppercase tracking-wider font-medium">
                Go to Saved Stories
              </Link>
              <button
                onClick={() => setLoggedIn(false)}
                className="py-2 text-xs text-slate-500 hover:text-navy"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4 border border-slate-200 p-8 bg-slate-50 rounded-xs shadow-2xs">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="subscriber@studio.com"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
              >
                Sign In
              </button>
            </div>

            <div className="text-center pt-2">
              <Link href="/subscribe" className="text-xs text-slate-500 hover:text-navy underline">
                Need an account? Subscribe to The Daily Brief
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold block mb-3">
        404 · PAGE NOT FOUND
      </span>
      <h1 className="text-4xl sm:text-5xl font-serif text-navy mb-4">
        This Room Does Not Exist
      </h1>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
        The architectural record or dispatch you requested could not be located in our archives. It may have been moved or renamed.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="px-5 py-2.5 bg-navy text-white text-xs uppercase tracking-wider font-medium">
          Return to Front Page
        </Link>
        <Link href="/category/projects" className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:border-navy text-xs uppercase tracking-wider font-medium">
          Browse Projects
        </Link>
      </div>
    </div>
  );
}
