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