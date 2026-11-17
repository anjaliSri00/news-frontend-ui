import React from 'react';
import type { Metadata } from 'next';
import fetchApiResponse from '@/helper/api_data_store';
import { TrendItem } from '@/types/editorial';
import { TrendsHero } from '@/components/trends/TrendsHero';
import { TrendsLeadStory } from '@/components/trends/TrendsLeadStory';
import { TrendsFilterBar } from '@/components/trends/TrendsFilterBar';
import { TrendsPaletteSection } from '@/components/trends/TrendsPaletteSection';
import { TrendsGrid } from '@/components/trends/TrendsGrid';
import { TrendsNewsletter } from '@/components/trends/TrendsNewsletter';

export const metadata: Metadata = {
  title: 'Trends: Beyond the Moodboard · Form & Field',
  description: 'Investigating cyclical aesthetics, emerging pigment science, bio-circular materiality.',
};

export default async function TrendsCategoryPage() {
  let trends: TrendItem[] = [];

  try {
    const res = await fetchApiResponse<{ trends: TrendItem[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/trends?limit=10`,
      { cache: 'no-store' }
    );
    if (res.meta?.status === 200 && res.data?.trends) {
      trends = res.data.trends;
    }
  } catch (error) {
    console.error('Failed to load trends:', error);
  }

  // Featured/Lead Trend (Pehla item)
  const leadTrend = trends[0];
  // Grid ke liye baaki items
  const gridTrends = trends.slice(1);

  return (
    <div className="flex flex-col w-full bg-[#fcf9f8]">
      {/* 1. Header */}
      <TrendsHero totalTrends={trends.length} />

      {/* 2. Lead Story (Hero Block) */}
      {leadTrend && <TrendsLeadStory trend={leadTrend} />}

      {/* 3. Filter Bar */}
      <TrendsFilterBar />

      {/* 4. Material Palette Section (Static/Dynamic) */}
      <TrendsPaletteSection />

      {/* 5. Main Grid */}
      <TrendsGrid trends={gridTrends} />

      {/* 6. Newsletter/Archival */}
      <TrendsNewsletter />
    </div>
  );
}