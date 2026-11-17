import React from 'react';
import type { Metadata } from 'next';
import fetchApiResponse from '@/helper/api_data_store';
import { ProjectItem } from '@/types/editorial';
import { Link } from '@/lib/router';

export const metadata: Metadata = {
  title: 'Projects · Form & Field',
  description: 'Architectural projects from around the world.',
};

export default async function ProjectsPage() {
  let projects: ProjectItem[] = [];

  try {
    const res = await fetchApiResponse<{ projects: ProjectItem[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects?limit=20`,
      { cache: 'no-store' }
    );
    if (res.meta?.status === 200 && res.data?.projects) {
      projects = res.data.projects;
    }
  } catch (error) {
    console.error('Failed to load projects:', error);
  }

  const featured = projects.find((p) => p.layout_type === 'featured') || projects[0];
  const gridProjects = projects.filter((p) => p.id !== featured?.id);

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Header Section */}
      <section className="w-full px-6 pt-8 pb-10 bg-[#F9F8F6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.2em] text-[#8C3F2E] uppercase mb-4">
            <span>Category</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500 font-medium">Built Ideas, Around the World</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] tracking-tight text-[#000615] uppercase leading-none mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl font-light leading-relaxed">
            A curated selection of architectural typologies, sensitive adaptations, and spatial interventions defining the contemporary built environment.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      {featured && (
        <section className="w-full px-6 py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <Link href={`/projects/${featured.slug}`} className="group flex flex-col lg:flex-row gap-8 items-start bg-white">
              <div className="w-full lg:w-2/3 aspect-[16/9] overflow-hidden bg-gray-100">
                {featured.featured_image_url && (
                  <img
                    src={featured.featured_image_url}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
              <div className="w-full lg:w-1/3 flex flex-col pt-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C3F2E] mb-2">
                  {featured.category?.[0] || 'Project'}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#000615] leading-tight mb-4 group-hover:text-[#8C3F2E] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[15px] text-gray-600 leading-relaxed line-clamp-3 mb-6">
                  {featured.excerpt}
                </p>
                <div className="mt-auto text-[12px] text-gray-400">
                  {featured.city}, {featured.country} • {featured.year}
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="w-full px-6 py-12 bg-[#F9F8F6] border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridProjects.map((proj) => (
              <Link 
                key={proj.id} 
                href={`/projects/${proj.slug}`} 
                className="group flex flex-col bg-white border border-gray-200 hover:border-black transition-colors"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  {proj.featured_image_url ? (
                    <img
                      src={proj.featured_image_url}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C3F2E] mb-2">
                    {proj.category?.[0] || 'Project'}
                  </span>
                  <h3 className="font-serif text-xl text-[#000615] leading-snug mb-2 group-hover:text-[#8C3F2E] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 line-clamp-2 mb-4">
                    {proj.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 text-[11px] text-gray-400">
                    {proj.city}, {proj.country} • {proj.year}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}