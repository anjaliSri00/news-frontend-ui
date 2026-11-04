// Types for Website Event API
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