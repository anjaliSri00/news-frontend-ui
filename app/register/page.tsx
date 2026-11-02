'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import RegisterView from '../../components/pages/RegisterViewProps';
import type { ViewType, UserAccount } from '@/lib/models';

const VIEW_TO_PATH = {
  archive: '/',
  signin: '/signin',
  register: '/register',
//   monograph: '/monograph',
//   dashboard: '/dashboard',
} satisfies Record<ViewType, string>;

export default function RegisterPage() {
  const router = useRouter();

  const setCurrentView = useCallback(
    (view: ViewType) => {
      router.push(VIEW_TO_PATH[view]);
    },
    [router],
  );

  const handleSelectMonograph = useCallback(
    (monographId: string) => {
      router.push(`/monograph/${monographId}`);
    },
    [router],
  );

  const handleRegisterSuccess = useCallback(
    (_account: UserAccount) => {
    //   router.replace(VIEW_TO_PATH.dashboard);
      router.refresh();
    },
    [router],
  );

  const handleOpenTerms = useCallback(() => {
    router.push('/terms');
  }, [router]);

  const handleOpenPrivacy = useCallback(() => {
    router.push('/privacy');
  }, [router]);

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <RegisterView
        onNavigate={setCurrentView}
        onSelectMonograph={handleSelectMonograph}
        onRegisterSuccess={handleRegisterSuccess}
        onOpenTerms={handleOpenTerms}
        onOpenPrivacy={handleOpenPrivacy}
      />
    </main>
  );
}