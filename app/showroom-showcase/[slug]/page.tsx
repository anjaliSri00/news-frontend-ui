"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Link } from "@/lib/router";
import fetchApiResponse from "@/helper/api_data_store";
import { Loader2, ArrowLeft, Eye, MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

// Exact Type based on your API response
interface ShowroomDetail {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | null;
  brand: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  contact_phone: string | null;
  contact_email: string | null;
  website_url: string | null;
  opening_hours: Record<string, string> | null;
  featured_image_url: string | null;
  gallery: { url: string; alt?: string; caption?: string }[];
  read_time: number;
  published_at: string | null;
  views: number;
}

export default function ShowroomDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [showroom, setShowroom] = useState<ShowroomDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchShowroom() {
      try {
        const res = await fetchApiResponse<{ showroom: ShowroomDetail }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/showrooms/slug/${slug}`
        );

        if (res.meta?.status === 200 && res.data?.showroom) {
          setShowroom(res.data.showroom);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch showroom:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchShowroom();
  }, [slug]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="w-8 h-8 animate-spin text-navy" /></div>;
  }

  if (error || !showroom) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-serif text-navy mb-4">Showroom not found</h1>
        <Link href="/showroom-showcase" className="text-accent-blue hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Showrooms
        </Link>
      </div>
    );
  }

  const formattedDate = showroom.published_at
    ? new Date(showroom.published_at).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })
    : "Recent";

  // Check if any info fields exist
  const hasInfo = 
    showroom.address || 
    showroom.contact_phone || 
    showroom.contact_email || 
    showroom.website_url || 
    (showroom.opening_hours && Object.keys(showroom.opening_hours).length > 0);

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <Link href="/showroom-showcase" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-navy mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B6BB0]">
            {showroom.brand || 'Showroom'}
          </span>
          {/* Agar city/address hai to hi icon dikhao */}
          {(showroom.city || showroom.address) && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> 
                {showroom.city ? `${showroom.city}, ${showroom.country}` : showroom.address}
              </span>
            </>
          )}
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.1] mb-6">
          {showroom.title}
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
          {showroom.excerpt}
        </p>

        <div className="flex items-center justify-between border-y border-slate-200 py-4">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>By Editorial Desk</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{formattedDate}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>{showroom.read_time || 5} min read</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Eye className="w-4 h-4" />
            <span>{showroom.views || 0} views</span>
          </div>
        </div>
      </section>

      {/* 2. Main Image */}
      {showroom.featured_image_url && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
          <div className="aspect-[21/9] w-full overflow-hidden bg-slate-100">
            <img
              src={showroom.featured_image_url}
              alt={showroom.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* 3. Content & Info Grid */}
      <section className={`max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 ${hasInfo ? 'lg:grid-cols-12' : 'lg:grid-cols-1'} gap-12`}>
        
        {/* Left: Content */}
        <div className={hasInfo ? "lg:col-span-8" : "max-w-3xl mx-auto w-full"}>
          <div 
            className="prose prose-lg prose-slate max-w-none 
                       prose-headings:font-serif prose-headings:text-navy 
                       prose-p:leading-relaxed prose-p:text-slate-700
                       prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
                       prose-img:rounded-md"
            dangerouslySetInnerHTML={{ __html: showroom.content || "<p>Detailed description coming soon...</p>" }}
          />
        </div>

        {/* Right: Information Sidebar (Sirf tab dikhao jab data ho) */}
        {hasInfo && (
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#F9F8F6] border border-gray-200 p-6 rounded-sm">
              <h3 className="font-serif text-xl text-navy mb-4 border-b pb-2">Showroom Info</h3>
              
              {showroom.address && (
                <div className="mb-3 flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />
                  <span>{showroom.address}</span>
                </div>
              )}
              
              {showroom.contact_phone && (
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>{showroom.contact_phone}</span>
                </div>
              )}
              
              {showroom.contact_email && (
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                  <a href={`mailto:${showroom.contact_email}`} className="hover:text-accent-blue">{showroom.contact_email}</a>
                </div>
              )}

              {showroom.website_url && (
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="w-4 h-4 text-gray-400 shrink-0" />
                  <a href={showroom.website_url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue truncate">Visit Website</a>
                </div>
              )}

              {showroom.opening_hours && Object.keys(showroom.opening_hours).length > 0 && (
                <div className="mt-4 pt-4 border-t text-sm text-gray-600">
                  <div className="flex items-center gap-2 mb-2 font-semibold text-gray-800">
                    <Clock className="w-4 h-4" /> Opening Hours
                  </div>
                  <ul className="space-y-1 text-xs">
                    {Object.entries(showroom.opening_hours).map(([day, hours]) => (
                      <li key={day} className="flex justify-between">
                        <span className="capitalize">{day}</span>
                        <span>{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        )}

      </section>

      {/* 4. Gallery (Optional) */}
      {showroom.gallery && showroom.gallery.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-12">
          <h2 className="font-serif text-2xl text-navy mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {showroom.gallery.map((img, idx) => (
              <div key={idx} className="aspect-square bg-slate-100 overflow-hidden">
                <img src={img.url} alt={img.alt || showroom.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}