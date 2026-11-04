// app/category/[slug]/page.tsx
import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getAllCategories } from '@/lib/services';
import { CategoryPage } from '@/components/pages/CategoryPage';
import EventsPage from '@/components/pages/EventsPage';
import type { CategorySlug } from '@/lib/models';
import { Link } from '@/lib/router';
import fetchApiResponse from '@/helper/api_data_store';

// 👇 Designer interface define karo
interface DesignerItem {
  id: string;
  name: string;
  slug: string;
  excerpt: string;
  city: string;
  country: string;
  specialization: string;
  featured_image_url: string | null;
  avatar_url: string | null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === 'events') {
    return {
      title: 'Events & Biennials · Form & Field | Lumen Journal',
      description: 'Key gatherings across design capitals.',
    };
  }

  if (slug === 'designers') {
    return {
      title: 'Designers · Form & Field | Lumen Journal',
      description: 'Profiles of leading architects and designers.',
    };
  }

  const category = getCategoryBySlug(slug as CategorySlug);
  if (!category) {
    return { title: 'Category Not Found · Form & Field' };
  }

  return {
    title: `${category.title} · Form & Field | Lumen Journal`,
    description: category.description,
  };
}

async function CategoryContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Events Page
  if (slug === 'events') {
    return <EventsPage />;
  }

  // 2. Designers Page
  if (slug === 'designers') {
    let designers: DesignerItem[] = []; // 👈 Type assign kiya
    
    try {
      const res = await fetchApiResponse<{ designers: DesignerItem[] }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/designers?limit=20`,
        { cache: 'no-store' }
      );
      if (res.meta?.status === 200 && res.data?.designers) {
        designers = res.data.designers;
      }
    } catch (error) {
      console.error('Failed to load designers:', error);
    }

    if (designers.length === 0) {
      return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-serif text-navy mb-4">No Designers Found</h1>
        </div>
      );
    }

    return (
      <div className="bg-white min-h-screen py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          
          <div className="mb-12 border-b border-gray-200 pb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B6BB0] block mb-2">
              Directory
            </span>
            <h1 className="font-serif text-4xl text-navy">
              Designers
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {designers.map((designer) => {
              const imageUrl = designer.featured_image_url || designer.avatar_url || '';
              
              return (
                <Link 
                  key={designer.id} 
                  href={`/designers/${designer.slug}`} 
                  className="group flex flex-col"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 mb-4 relative">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={designer.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                    )}
                  </div>
                  
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#3B6BB0] mb-1.5">
                    {designer.specialization || 'Designer'} • {designer.city}
                  </div>
                  
                  <h3 className="text-[20px] font-serif text-navy leading-snug mb-2 group-hover:text-[#3B6BB0] transition-colors">
                    {designer.name}
                  </h3>
                  
                  <p className="text-[13px] text-gray-500 line-clamp-2">
                    {designer.excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 3. Default Category Page
  const category = getCategoryBySlug(slug as CategorySlug);
  if (!category) notFound();

  return <CategoryPage key={category.slug} slug={category.slug as CategorySlug} />;
}

export default function CategoryRoute({ params }: PageProps) {
  return (
    <Suspense fallback={<CategoryShell />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

function CategoryShell() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="h-3 w-32 bg-slate-200 mb-3" />
            <div className="h-10 w-64 bg-slate-200 mb-4" />
            <div className="h-4 w-80 bg-slate-200" />
          </div>
        </div>
      </section>
    </div>
  );
}