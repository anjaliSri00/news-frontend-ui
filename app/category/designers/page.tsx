import React from 'react';
import { Metadata } from 'next';
import fetchApiResponse from '@/helper/api_data_store';
import { Designer } from '@/types/editorial';
import { DesignerFilter } from '@/components/designers/DesignerFilter';
import { DesignerSpotlight } from '@/components/designers/DesignerSpotlight';
import { DesignerQuotes } from '@/components/designers/DesignerQuotes';
import { DesignerGrid } from '@/components/designers/DesignerGrid';
import { DesignerHero } from '@/components/designers/DesignerHero';

export const metadata: Metadata = {
  title: 'Designers · Form & Field',
  description: 'Explore the portfolios, philosophies, and methodologies of world-renowned architects and interior pioneers.',
};

export default async function DesignersPage() {
  let designers: Designer[] = [];

  try {
    // Fetch all designers from API
    const res = await fetchApiResponse<{ designers: Designer[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/designers?limit=20`,
      { cache: 'no-store' }
    );
    
    if (res.meta?.status === 200 && res.data?.designers) {
      designers = res.data.designers;
    }
  } catch (err) {
    console.error('Failed to load designers:', err);
  }

  // First designer as spotlight, rest for grid
  const spotlightDesigner = designers[0];
  const gridDesigners = designers.slice(1);

  return (
    <div className="flex flex-col w-full bg-background min-h-screen text-on-surface">
      
      {/* 1. Hero Section */}
      <DesignerHero totalDesigners={designers.length} />

      {/* 2. Filter Bar */}
      <DesignerFilter />

      {/* 3. Spotlight Profile (Agar data hai to) */}
      {spotlightDesigner && (
        <DesignerSpotlight designer={spotlightDesigner} />
      )}

      {/* 4. Interview Highlights (Static Text) */}
      <DesignerQuotes />

      {/* 5. Designer Grid */}
      <DesignerGrid designers={gridDesigners} />
      
    </div>
  );
}