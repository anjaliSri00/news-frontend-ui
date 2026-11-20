"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import fetchApiResponse from '@/helper/api_data_store';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // 🔥 Calling our actual API route
      const res = await fetchApiResponse<any>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/submit`, // 👈 Change this if you want to hit your external backend
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (res.meta?.status === 200 || res.meta?.status === 201) {
        setSuccess(true);
        setFormData({ full_name: '', email: '', mobile: '', message: '' }); // Reset form
      } else {
        setError(res.meta?.message || 'Failed to send message.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fcf9f8] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C3F2E] block mb-3">
            Connect with the Publication
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#000615] leading-[1.1] mb-6">
            Submit an Inquiry
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you are pitching a monograph, proposing a collaboration, or seeking editorial clarification — our desk is open for thoughtful discourse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-[#000615] mb-4">Editorial Desk</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Our primary bureau operates from Delhi NCR, with contributing editors across Mumbai, Bengaluru, and Ahmedabad. 
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-[#E2DFD8] rounded-sm">
                  <Mail className="w-5 h-5 text-[#0b1f3a]" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Email</span>
                  <a href="mailto:desk@formandfield.com" className="text-[15px] text-[#000615] font-medium hover:text-[#8C3F2E] transition-colors">
                    desk@formandfield.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-[#E2DFD8] rounded-sm">
                  <Phone className="w-5 h-5 text-[#0b1f3a]" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Phone</span>
                  <span className="text-[15px] text-[#000615] font-medium">
                    +91 7854847434
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white border border-[#E2DFD8] rounded-sm">
                  <MapPin className="w-5 h-5 text-[#0b1f3a]" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Bureau</span>
                  <span className="text-[15px] text-[#000615] font-medium">
                    14 Clerkenwell Green<br />London EC1R 0DP
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Note */}
            <div className="pt-8 border-t border-[#E2DFD8]">
              <p className="font-serif italic text-gray-500 text-sm leading-relaxed">
                &quot;Good design isn&apos;t just what we see. It&apos;s how we choose to live. We welcome inquiries that challenge our perspective.&quot;
              </p>
              <span className="block mt-3 text-[11px] font-bold uppercase tracking-widest text-[#000615]">
                — Isabel Hart, Editor-in-Chief
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E2DFD8] p-8 md:p-12 shadow-sm">
              
              {/* Success Message */}
              {success && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="text-green-800 font-semibold text-sm">Inquiry Received</h4>
                    <p className="text-green-700 text-sm mt-1">Thank you. Our editorial desk will review your message and respond within 2-3 business days.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Name Field */}
    <div className="space-y-1.5">
      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="full_name"
        required
        value={formData.full_name}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full bg-[#f9f8f6] border border-[#E2DFD8] px-4 py-3 text-[15px] text-[#000615] focus:outline-none focus:border-[#0b1f3a] focus:bg-white transition-colors"
        placeholder="e.g. Jane Doe"
      />
    </div>

    {/* Email Field */}
    <div className="space-y-1.5">
      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        disabled={isSubmitting}
        className="w-full bg-[#f9f8f6] border border-[#E2DFD8] px-4 py-3 text-[15px] text-[#000615] focus:outline-none focus:border-[#0b1f3a] focus:bg-white transition-colors"
        placeholder="name@firm.com"
      />
    </div>
  </div>

  {/* 👇 New Mobile Field (Replaced Subject) 👇 */}
  <div className="space-y-1.5">
    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600">
      Mobile Number
    </label>
    <input
      type="tel"
      name="mobile"
      maxLength={10}
      value={formData.mobile || ''}
      onChange={handleChange}
      disabled={isSubmitting}
      className="w-full bg-[#f9f8f6] border border-[#E2DFD8] px-4 py-3 text-[15px] text-[#000615] focus:outline-none focus:border-[#0b1f3a] focus:bg-white transition-colors"
      placeholder="e.g. 7854847434"
    />
  </div>

  {/* Message Field */}
  <div className="space-y-1.5">
    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-600">
      Message <span className="text-red-500">*</span>
    </label>
    <textarea
      name="message"
      required
      rows={6}
      value={formData.message}
      onChange={handleChange}
      disabled={isSubmitting}
      className="w-full bg-[#f9f8f6] border border-[#E2DFD8] px-4 py-3 text-[15px] text-[#000615] focus:outline-none focus:border-[#0b1f3a] focus:bg-white transition-colors resize-y"
      placeholder="Tell us about your inquiry..."
    />
  </div>

  <div className="pt-2">
    <button
      type="submit"
      disabled={isSubmitting}
      className="inline-flex items-center justify-center gap-2 bg-[#0b1f3a] text-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.16em] hover:bg-[#000615] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Sending Inquiry...
        </>
      ) : (
        <>
          Transmit Message
          <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  </div>

</form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}