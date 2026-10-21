// app/category/[slug]/page.tsx
import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getAllCategories } from '@/lib/services';
import { CategoryPage } from '@/components/pages/CategoryPage';
import type { CategorySlug } from '@/lib/models';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug as CategorySlug);

  if (!category) {
    return { title: 'Category Not Found · Form & Field' };
  }

  return {
    title: `${category.title} · Form & Field | Lumen Journal`,
    description: category.description,
  };
}

// ✅ Child resolves params inside Suspense
async function CategoryContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug as CategorySlug);

  if (!category) notFound();

  return <CategoryPage key={category.slug} slug={category.slug as CategorySlug} />;
}

// ✅ Route passes the promise, does NOT await it
export default function CategoryRoute({ params }: PageProps) {
  return (
    <Suspense fallback={<CategoryShell />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

// ✅ Deterministic fallback — no Math.random / Date.now
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