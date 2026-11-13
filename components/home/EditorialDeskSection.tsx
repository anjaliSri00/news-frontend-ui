"use client";

import React, { useState, useEffect } from "react";
import { Link } from "../../lib/router";
import { SectionHeader } from "../shared/SectionHeader";
import { ArrowUpRight, Loader2 } from "lucide-react";
import fetchApiResponse from "../../helper/api_data_store";
import { EditorialItem, InterviewDesigner } from "../../types/editorial";

export function EditorialDeskSection() {
  const [editorials, setEditorials] = useState<EditorialItem[]>([]);
  const [designers, setDesigners] = useState<InterviewDesigner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [editorialRes, designerRes] = await Promise.all([
          fetchApiResponse<{ editorials: EditorialItem[] }>(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/editorials?limit=3`,
          ),
          fetchApiResponse<{ designers: InterviewDesigner[] }>(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/designers?limit=2`,
          ),
        ]);

        if (
          editorialRes.meta?.status === 200 &&
          editorialRes.data?.editorials
        ) {
          setEditorials(editorialRes.data.editorials);
        }
        if (designerRes.meta?.status === 200 && designerRes.data?.designers) {
          setDesigners(designerRes.data.designers);
        }
      } catch (err) {
        console.error("Failed to fetch editorial data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 border-b border-slate-200 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (editorials.length === 0 && designers.length === 0) return null;

  // Data mapping
  const featuredEditorial =
    editorials.find((e) => e.layout_type === "featured") || editorials[0];
  const gridEditorials = editorials
    .filter((e) => e.id !== featuredEditorial?.id)
    .slice(0, 2);

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return "Recent";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="py-12 border-b bg-pale-blue border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        {/* <div className=" gap-10"> */}

        {/* LEFT: Editorial Desk (7 Cols) */}
        {/* <div className="lg:col-span-7"> */}
        <SectionHeader
          kicker="Ideas with a point of view"
          title="Editorial Desk"
          viewAllHref="/category/editorials"
          viewAllText="View all editorials"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            {/* Featured Editorial */}
            {featuredEditorial && (
              <div className="pb-8 mb-6 border-b border-slate-200 bg-white p-8 group">
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                  {featuredEditorial.column_name || "The Editor’s Column"}
                </div>
                <h3 className="text-2xl font-serif text-navy transition-colors leading-snug mb-3">
                  <Link href={`/article/${featuredEditorial.slug}`}>
                    {featuredEditorial.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {featuredEditorial.excerpt}
                </p>
                <div className="text-xs text-slate-500 font-sans">
                  <span className="font-medium text-navy">
                    {featuredEditorial.editor || "Editorial Desk"}
                  </span>
                  {" · "}
                  {formatDate(featuredEditorial.published_at)}
                  {" · "}
                  {featuredEditorial.read_time || 5} min read
                </div>
              </div>
            )}

            {/* Grid Editorials (Max 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gridEditorials.map((item) => (
                <div key={item.id} className="group">
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                    {item.column_name || item.category?.[0] || "OPINION"}
                  </div>
                  <h4 className="text-base font-serif text-navy transition-colors leading-snug mb-2 line-clamp-2">
                    <Link href={`/article/${item.slug}`}>{item.title}</Link>
                  </h4>
                  <div className="text-xs text-slate-400">
                    {item.editor || "Editorial Desk"} ·{" "}
                    {formatDate(item.published_at)} · {item.read_time || 5} min
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Designer Interviews (5 Cols) */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h2 className="text-2xl md:text-3xl font-serif text-navy font-normal">
                Designer Interviews
              </h2>
              <Link
                href="/category/designers"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-medium text-slate-600 hover:text-navy transition-colors"
              >
                <span>View all interviews</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-slate-200">
              {designers.map((designer) => {
                const imageUrl =
                  designer.avatar_url || designer.featured_image_url;

                return (
                  <div
                    key={designer.id}
                    className="pb-6 pt-6 first:pt-0 group flex gap-4 items-start"
                  >
                    <div className="w-20 h-24 bg-slate-100 shrink-0 overflow-hidden border border-slate-100">
                      {imageUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={imageUrl}
                          alt={designer.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-navy">
                        {designer.name}
                      </h4>
                      <p className="text-xs text-slate-500 mb-1.5">
                        {designer.specialization || "Designer"} /{" "}
                        {designer.city}
                      </p>
                      <p className="font-serif italic text-navy text-sm leading-snug mb-2 transition-colors">
                        <Link href={`/designers/${designer.slug}`}>
                          &ldquo;
                          {designer.excerpt ||
                            "A conversation on design and practice."}
                          &rdquo;
                        </Link>
                      </p>
                      <div className="text-xs text-slate-400">
                        Interview by Editorial Desk ·{" "}
                        {formatDate(designer.published_at)} · 5 min read
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
