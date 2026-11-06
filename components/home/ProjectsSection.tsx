"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { ArrowRight, Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';
import { ProjectItem } from '../../types/editorial';

export function ProjectsSection() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Fetch top 4 projects from API
        const res = await fetchApiResponse<{ projects: ProjectItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects?limit=4`
        );
        if (res.meta?.status === 200 && res.data?.projects) {
          setProjects(res.data.projects);
        }
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 border-b border-slate-200 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (projects.length === 0) return null;

  // 1. Left Featured Project
  const featuredProject = projects.find(p => p.layout_type === 'featured') || projects[0];
  
  // 2. Right Cards (Baaki 3 projects)
  const sideProjects = projects.filter(p => p.id !== featuredProject.id).slice(0, 3);

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="Built ideas, around the world"
          title="Projects"
          viewAllHref="/category/projects"
          viewAllText="View all Projects"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left lead project (Featured) */}
          {featuredProject && (
            <div className="lg:col-span-6 flex flex-col group">
              <div className="relative aspect-[20/10] overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                {featuredProject.featured_image_url ? (
                  <img
                    src={featuredProject.featured_image_url}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                )}
              </div>

              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {featuredProject.category?.[0] || 'Project'} / {featuredProject.city || 'Location'}
              </div>

              <h3 className="text-3xl font-serif text-navy transition-colors leading-snug mb-2">
                <Link href={`/article/${featuredProject.slug}`}>{featuredProject.title}</Link>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {featuredProject.excerpt}
              </p>

              <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  By {featuredProject.architect || 'Architect'} · {featuredProject.year || '2024'}
                </span>
                <Link
                  href={`/article/${featuredProject.slug}`}
                  className="font-medium text-navy hover:text-accent-blue inline-flex items-center gap-1"
                >
                  <span>Explore project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Right 3 projects (Cards) */}
          <div className="lg:col-span-6 divide-y divide-slate-200 flex flex-col justify-start">
            {sideProjects.map((proj) => (
              <div key={proj.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group">
                <div className="w-48 h-40 bg-slate-100 shrink-0 overflow-hidden border border-slate-100">
                  {proj.featured_image_url ? (
                    <img
                      src={proj.featured_image_url}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-0.5 font-medium">
                    {proj.category?.[0] || 'Project'} / {proj.city || 'Location'}
                  </div>
                  <h4 className="text-2xl font-serif text-navy transition-colors leading-snug line-clamp-2 mb-1">
                    <Link href={`/article/${proj.slug}`}>{proj.title}</Link>
                  </h4>
                  <div className="text-xs text-slate-400 mt-2">
                    {proj.year || '2024'} · {proj.architect || 'Architect'}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}