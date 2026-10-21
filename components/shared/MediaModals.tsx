'use client';

import React, { useEffect, useState } from 'react';
import { useAppState } from '../../lib/state/AppStateProvider';
import { X, Play, Volume2, Pause } from 'lucide-react';

export function VideoPlayerModal() {
  const { state, closeVideoModal } = useAppState();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state.activeVideoModal) {
        closeVideoModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.activeVideoModal, closeVideoModal]);

  if (!state.activeVideoModal) return null;

  const item = state.activeVideoModal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={closeVideoModal}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-4xl bg-navy-dark border border-navy-light text-white shadow-2xl rounded-xs overflow-hidden">
        {/* Top header */}
        <div className="flex items-center justify-between p-4 border-b border-navy-light">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-blue-300">
              {item.kicker}
            </span>
            <h3 className="font-serif text-lg text-white">
              {item.title}
            </h3>
          </div>
          <button
            onClick={closeVideoModal}
            className="p-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video simulation / player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
            <div className="flex justify-end">
              <span className="px-2.5 py-1 bg-black/70 text-xs font-mono tracking-wider text-white rounded-xs">
                {item.duration}
              </span>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white transition-transform hover:scale-105"
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 font-sans">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                <span>Stereo High Fidelity · {item.hostOrDirector}</span>
              </div>
              <span>Form & Field Broadcast</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-5 bg-navy border-t border-navy-light">
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function RegisterEventModal() {
  const { state, closeRegisterModal, registerForEvent } = useAppState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studio, setStudio] = useState('');

  if (!state.activeRegisterModal) return null;
  const event = state.activeRegisterModal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      registerForEvent(event.id, email, name);
      closeRegisterModal();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={closeRegisterModal} />
      <div className="relative z-10 w-full max-w-lg bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl rounded-xs">
        <div className="flex items-start justify-between pb-4 border-b border-slate-100 mb-5">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
              Event Registration
            </span>
            <h3 className="font-serif text-2xl text-navy mt-1">
              {event.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {event.dates} · {event.location}, {event.city}
            </p>
          </div>
          <button
            onClick={closeRegisterModal}
            className="p-1 text-slate-400 hover:text-navy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-700 font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Clara Voss"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-700 font-medium mb-1">
              Professional Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@architecture.com"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-700 font-medium mb-1">
              Studio / Organization (Optional)
            </label>
            <input
              type="text"
              value={studio}
              onChange={(e) => setStudio(e.target.value)}
              placeholder="e.g. Voss Arkitekter"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xs focus:outline-hidden focus:border-navy"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-navy hover:bg-slate-900 text-white text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
            >
              Confirm Delegate Registration
            </button>
            <p className="text-[11px] text-slate-500 text-center mt-2">
              Registration pass and venue entry credentials will be emailed immediately.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
