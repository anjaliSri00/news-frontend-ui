// Types for Website Event API

export interface EventItem {
  id: string;
  code: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string[]; // e.g. ["Symposium"] or ["Exhibition"]
  venue: string;
  city: string;
  country: string;
  start_date: string; // ISO string
  end_date: string | null;
  ticket_price?: string;
  featured_image_url: string | null;
  layout_type: 'banner' | 'list' | 'past' | string;
  status: 'draft' | 'published' | 'archived';
  registration_url?: string;
}

export interface EventWebsitePayload {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  start_date: string;
  end_date: string;
  venue: string;
  city: string;
  country: string;
  registration_url: string;
  article_url: string;
  status: string;
  // Extra fields agar chahiye ho
  featured_image?: string;
}

export interface EventsListResponse {
  events: EventWebsitePayload[];
   pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// types/editorial.ts
export interface NewsArticle {
  id: string;
  code: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; 
  read_time: number;
  category: string[];
  news_type: string;
  featured_image_url: string;
  source: string | null;
  source_url: string | null;
  published_at: string | null;
  created_at: string;
  views: number;
  layout_type: 'card' | 'featured' | 'compact'; 
}

export interface DesignerDetail {
  id: string;
  name: string;
  slug: string;
  email: string;
  excerpt: string;
  read_time: number;
  city: string;
  country: string;
  specialization: string;
  portfolio_url: string | null;
  featured_image_url: string | null;
  avatar_url: string | null;
  gallery: string[]; // Array of image URLs
  awards: string[]; // Array of awards
  layout_type: string;
  published_at: string;
}


export interface FurnitureItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  read_time: number;
  category: string[];
  tags?: string[];
  designer?: string;
  brand?: string;
  featured_image_url: string | null;
  layout_type: string;
  published_at: string | null;
}


export interface Designer {
  id: string;
  name: string;
  slug: string;
  email: string;
  excerpt: string;
  specialization: string;
  city: string;
  country: string;
  featured_image_url: string | null;
  avatar_url: string | null;
  portfolio_url: string | null;
  layout_type: string;
  published_at: string | null;
}

export interface ProductItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string[];
  tags?: string[];
  material?: string;       // e.g. "Oak, Brass"
  brand?: string;
  designer?: string;
  price_range?: string;    // e.g. "£150 - £300"
  featured_image_url: string | null;
  published_at: string | null;
  layout_type: string;
}

export interface TrendItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string[]; // e.g. ["design"]
  trend_category: string; // e.g. "color", "material", etc.
  featured_image_url: string | null;
  read_time?: number;
  published_at: string | null;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string[];
  city?: string;
  country?: string;
  architect?: string;
  year?: number;
  featured_image_url: string | null;
  layout_type: string; // 'featured' | 'card'
  published_at?: string | null;
}