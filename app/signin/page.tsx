'use client';

import React from 'react';
import SignInView  from "../../components/pages/SignInView";
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
// import { SignInView } from '../../components/pages/SignInView';
import type { ViewType, UserAccount } from '../../lib/models/index';

/**
 * If you're using a state-driven view switcher (like the original),
 * keep ViewType. If you're on the App Router with real routes,
 * map views to paths.
 */
const VIEW_TO_PATH: Record<ViewType, string> = {
  archive: '/',
  signin: '/signin',
  register: '/register',
  // monograph: '/monograph',
  // add the rest of your ViewType keys as paths
};


export default function SignInPage() {
  const router = useRouter();

 const setCurrentView = useCallback(
    (view: ViewType) => {
      router.push(VIEW_TO_PATH[view] ?? '/');
    },
    [router],
  );

  const handleSignInSuccess = useCallback(
    (_account: UserAccount) => {
      router.replace('/');
      router.refresh();
    },
    [router],
  );

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <SignInView
        onNavigate={setCurrentView}
        onSignInSuccess={handleSignInSuccess}
      />
    </main>
  );
}