export type CategorySlug =
  | 'home-decor'
  | 'events'
  | 'trends'
  | 'designers'
  | 'design-tech'
  | 'furniture'
  | 'special-reports'
  | 'showroom-showcase'
  | 'projects'
  | 'products';

export interface CategoryInfo {
  slug: CategorySlug;
  title: string;
  description: string;
  kicker: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}

export interface Article {
  id: string;
  title: string;
  deck: string;
  category: CategorySlug;
  categoryName: string;
  subCategory?: string;
  kicker?: string;
  author: Author;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  content: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  tags: string[];
  featured?: boolean;
  trendingRank?: number;
  readCount?: string;
  location?: string;
}

export interface Designer {
  id: string;
  name: string;
  studio: string;
  city: string;
  country: string;
  discipline: string;
  tagline: string;
  bio: string;
  quote: string;
  imageUrl: string;
  featuredProjects: string[];
  foundedYear: number;
}

export interface EventItem {
  id: string | number ;
  title: string;
  category: string;
  day: string;
  month: string;
  dates: string;
  year: number;
  location: string;
  city: string;
  country: string;
  description: string;
  status: 'Registration open' | 'Programme announced' | 'Preview exhibitors' | 'Sold out';
  imageUrl: string;
  isEditorSelection?: boolean;
  link?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'Lighting' | 'Surfaces' | 'Bath' | 'Hardware' | 'Seating' | 'Textiles';
  designer: string;
  materials: string;
  featureBadge: string;
  description: string;
  price?: string;
  imageUrl: string;
  dateAdded: string;
  rating?: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Hospitality' | 'Workplace' | 'Public space' | 'Adaptive reuse';
  location: string;
  architect: string;
  year: number;
  summary: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  photographer?: string;
  area?: string;
}

export interface ShowroomItem {
  id: string;
  name: string;
  city: string;
  country: string;
  kicker: string;
  headline: string;
  description: string;
  address: string;
  hours: string;
  imageUrl: string;
  featuredBrands: string[];
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'podcast' | 'video';
  duration: string;
  kicker: string;
  hostOrDirector: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  audioUrl?: string;
}

export interface SpecialReportItem {
  id: string;
  title: string;
  kicker: string;
  typeBadge: string;
  year: string;
  description: string;
  readTime: string;
  publishedDate: string;
  imageUrl: string;
  keyFindings: string[];
}

export interface CommentItem {
  id: string;
  articleId: string;
  authorName: string;
  authorEmail: string;
  content: string;
  createdAt: string;
}
