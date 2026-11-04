"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Link } from "@/lib/router";
import fetchApiResponse from "@/helper/api_data_store";
import { Loader2, ArrowLeft, MapPin, Award, ExternalLink, Mail } from "lucide-react";

interface DesignerDetail {
  id: string;
  name: string;
  slug: string;
  email: string;
  excerpt: string;
  bio: string; // 👈 Naya field add kiya
  read_time: number;
  city: string;
  country: string;
  specialization: string;
  portfolio_url: string | null;
  featured_image_url: string | null;
  avatar_url: string | null;
  gallery: string[];
  awards: string[];
  layout_type: string;
  published_at: string;
}

export default function DesignerProfilePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [designer, setDesigner] = useState<DesignerDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchDesigner() {
      try {
        const res = await fetchApiResponse<{ designer: DesignerDetail }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/designers/slug/${slug}`
        );

        if (res.meta?.status === 200 && res.data?.designer) {
          setDesigner(res.data.designer);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch designer:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDesigner();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </div>
    );
  }

  if (error || !designer) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-serif text-navy mb-4">Designer not found</h1>
        <Link href="/" className="text-[#3B6BB0] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  // Image fallback
  const heroImage = designer.featured_image_url || designer.avatar_url || "";

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10">
        <Link
          href="/category/designers"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-navy mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Designers
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B6BB0]">
                {designer.specialization || "Designer"}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {designer.city}, {designer.country}
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl text-navy leading-[1.1] mb-6">
              {designer.name}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {designer.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-slate-200">
              
              {/* Author Avatar & Email */}
              <div className="flex items-center gap-3">
                {designer.avatar_url && (
                  <img
                    src={designer.avatar_url}
                    alt={designer.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                )}
                <div>
                  <p className="text-sm font-semibold text-navy">{designer.name}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {designer.email}
                  </p>
                </div>
              </div>

              {/* Portfolio Link */}
              {designer.portfolio_url && (
                <a
                  href={designer.portfolio_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B6BB0] hover:text-navy transition-colors"
                >
                  View Portfolio <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
            {heroImage ? (
              <img
                src={heroImage}
                alt={designer.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                No Image Available
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 👇 Bio Section (Designer ke baare me details) 👇 */}
      {designer.bio && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200">
          <h2 className="font-serif text-3xl text-navy mb-6">About {designer.name}</h2>
          <div 
            className="prose prose-lg prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-700"
            dangerouslySetInnerHTML={{ __html: designer.bio }}
          />
        </section>
      )}

      {/* Awards Section (Agar hai to) */}
      {designer.awards && designer.awards.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200">
          <h2 className="font-serif text-3xl text-navy mb-6">Awards & Recognition</h2>
          <ul className="space-y-4">
            {designer.awards.map((award, index) => (
              <li key={index} className="flex items-center gap-4 text-slate-600">
                <Award className="w-5 h-5 text-[#3B6BB0]" />
                <span className="text-lg">{award}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery Section (Agar hai to) */}
      {designer.gallery && designer.gallery.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200">
          <h2 className="font-serif text-3xl text-navy mb-6">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designer.gallery.map((imgUrl, index) => (
              <div key={index} className="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={imgUrl}
                  alt={`Work by ${designer.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}