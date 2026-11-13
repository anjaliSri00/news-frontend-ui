import React from 'react';
import type { Metadata } from 'next';
import fetchApiResponse from '@/helper/api_data_store';
import { ShowroomItem } from '@/types/editorial';
import { ShowroomHero } from '@/components/showrooms/ShowroomHero';
import { ShowroomFilters } from '@/components/showrooms/ShowroomFilters';
import { ShowroomGrid } from '@/components/showrooms/ShowroomGrid';
import { ShowroomMap } from '@/components/showrooms/ShowroomMap';

export const metadata: Metadata = {
  title: 'Showroom Showcase · Form & Field',
  description: 'An exclusive curatorial review of world-class architectural showrooms.',
};

export default async function ShowroomsPage() {
  let showrooms: ShowroomItem[] = [];

  try {
    const res = await fetchApiResponse<{ showrooms: ShowroomItem[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/showrooms?limit=12`,
      { cache: 'no-store' }
    );
    if (res.meta?.status === 200 && res.data?.showrooms) {
      showrooms = res.data.showrooms;
    }
  } catch (error) {
    console.error('Failed to load showrooms:', error);
  }

  return (
    <div className="flex flex-col w-full bg-[#fcf9f8]">
      <ShowroomHero />
      <ShowroomFilters count={showrooms.length} />
      <ShowroomGrid showrooms={showrooms} />
      <ShowroomMap />
    </div>
  );
}