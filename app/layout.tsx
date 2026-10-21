// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Lora, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cacheLife } from 'next/cache';
import { AppStateProvider } from '@/lib/state/AppStateProvider';
import { TopUtilityBar } from '@/components/layout/TopUtilityBar';
import { Header } from '@/components/layout/Header';
import { Nav } from '@/components/layout/Nav';
import { Ticker } from '@/components/layout/Ticker';
import { Footer } from '@/components/layout/Footer';
import { SearchOverlay } from '@/components/shared/SearchOverlay';
import { ToastContainer } from '@/components/shared/Modal';
import { LightboxModal } from '@/components/shared/LightboxModal';
import { VideoPlayerModal, RegisterEventModal } from '@/components/shared/MediaModals';
import { BackToTop } from '@/components/shared/SkeletonsAndUtils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  // Optional: pick weights/styles you actually use
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Form & Field · Lumen Journal | Architecture & Interior Design',
  description:
    'An independent international publication exploring architecture, interiors, and the ideas shaping the way we live.',
  openGraph: {
    title: 'Form & Field · Lumen Journal',
    description:
      'An independent international publication exploring architecture, interiors, and the ideas shaping the way we live.',
    type: 'website',
  },
};

/** Cached once per day; used by both the utility bar and the footer. */
async function getMastheadDate() {
  'use cache';
  cacheLife('days'); // Next.js built-in profile — revalidates daily

  const now = new Date();
  const year = now.getUTCFullYear();
  const dateLabel = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
    .format(now)
    .toUpperCase();

  return { year, dateLabel };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { year, dateLabel } = await getMastheadDate();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${lora.variable}`}>
      <body className="min-h-screen overflow-x-hidden w-full max-w-full flex flex-col bg-white text-slate-700 antialiased selection:bg-blue-100 selection:text-blue-900" suppressHydrationWarning>
        <AppStateProvider>
          <TopUtilityBar dateLabel={dateLabel} />
          <Header />
          <Nav />
          <Ticker />
          <main className="grow w-full min-w-0">{children}</main>
          <Footer year={year} />

          <SearchOverlay />
          <LightboxModal />
          <VideoPlayerModal />
          <RegisterEventModal />
          <ToastContainer />
          <BackToTop />
        </AppStateProvider>
      </body>
    </html>
  );
}