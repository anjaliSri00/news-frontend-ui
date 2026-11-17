"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Link } from '@/lib/router';
import fetchApiResponse from '@/helper/api_data_store';
import { Loader2, ArrowLeft, MapPin, Calendar, User, Maximize } from 'lucide-react';

interface ProjectDetail {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | null;
  category: string[];
  project_type: string;
  city: string;
  country: string;
  architect: string;
  year: number;
  area: number;
  featured_image_url: string | null;
  published_at: string | null;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchProject() {
      try {
        const res = await fetchApiResponse<{ project: ProjectDetail }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects/slug/${slug}`
        );

        if (res.meta?.status === 200 && res.data?.project) {
          setProject(res.data.project);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch project:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProject();
  }, [slug]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin w-8 h-8 text-navy" /></div>;

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif mb-4">Project not found</h1>
        <Link href="/projects" className="text-[#8C3F2E] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-navy mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4"/> Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C3F2E] mb-3 block">
              {project.category?.[0] || 'Architecture'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#000615] leading-[1.1] mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {project.excerpt}
            </p>
          </div>
          
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-8 pt-4 lg:pt-0 space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{project.city}, {project.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" />
              <span>{project.architect}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="w-4 h-4 text-gray-400" />
              <span>{project.area} sqm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {project.featured_image_url && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
          <div className="aspect-[21/9] w-full bg-gray-100 overflow-hidden">
            <img
              src={project.featured_image_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-p:leading-relaxed prose-img:rounded-md"
          dangerouslySetInnerHTML={{ __html: project.content || '<p>Content coming soon...</p>' }}
        />
      </section>
    </div>
  );
}