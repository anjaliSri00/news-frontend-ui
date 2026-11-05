"use client";

import React, { useState, useEffect } from 'react';
import { Link } from '../../lib/router';
import { SectionHeader } from '../shared/SectionHeader';
import { Loader2 } from 'lucide-react';
import fetchApiResponse from '../../helper/api_data_store';
import { ProductItem } from '../../types/editorial';

export function ProductsSection() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch top 4 products from Backend API
        const res = await fetchApiResponse<{ products: ProductItem[] }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?limit=4`
        );
        if (res.meta?.status === 200 && res.data?.products) {
          setProducts(res.data.products);
        }
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 border-b border-slate-200 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-navy" />
      </section>
    );
  }

  if (products.length === 0) return null;

  return (
    <section className="py-12 border-b border-slate-200">
      <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-18">
        <SectionHeader
          kicker="New & noteworthy / Independently selected"
          title="Products"
          viewAllHref="/category/products"
          viewAllText="View all Products"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => (
            <div key={prod.id} className="flex flex-col group">
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                {prod.featured_image_url ? (
                  <img
                    src={prod.featured_image_url}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    No Image
                  </div>
                )}
              </div>

              {/* Category */}
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-1 font-medium">
                {prod.category?.[0] || 'Product'}
              </div>

              {/* Title */}
              <h3 className="text-base font-serif text-navy group-hover:text-accent-blue transition-colors leading-snug mb-1.5 line-clamp-2">
                <Link href={`/product/${prod.slug}`}>{prod.title}</Link>
              </h3>

              {/* Material / Detail */}
              <p className="text-xs text-slate-500 mb-2 font-mono truncate">
                {prod.material || prod.excerpt || 'Details unavailable'}
              </p>

              {/* Price & Date (No Demo Data) */}
              <div className="mt-auto text-[11px] text-slate-400">
                {prod.price_range ? `${prod.price_range} · ` : ''} 
                {prod.published_at 
                  ? new Date(prod.published_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
                  : 'Recently added'
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}