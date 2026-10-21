import { DESIGNERS } from '../../data/designers';
import { EVENTS } from '../../data/events';
import { PRODUCTS } from '../../data/products';
import { PROJECTS } from '../../data/projects';
import { SHOWROOMS } from '../../data/showrooms';
import { MEDIA_ITEMS } from '../../data/videos';
import { SPECIAL_REPORTS } from '../../data/reports';
import { CATEGORIES } from '../../data/categories';
import {
  Designer,
  EventItem,
  ProductItem,
  ProjectItem,
  ShowroomItem,
  MediaItem,
  SpecialReportItem,
  CategoryInfo,
  CategorySlug,
} from '../models';

export * from './articlesService';

// Categories
export function getAllCategories(): CategoryInfo[] {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

// Designers
export function getAllDesigners(): Designer[] {
  return DESIGNERS;
}

export function getDesignerById(id: string): Designer | undefined {
  return DESIGNERS.find((d) => d.id === id);
}

// Events
export function getAllEvents(): EventItem[] {
  return EVENTS;
}

export function getEventById(id: string): EventItem | undefined {
  return EVENTS.find((e) => e.id === id);
}

// Products
export function getAllProducts(): ProductItem[] {
  return PRODUCTS;
}

export function getProductById(id: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

// Projects
export function getAllProjects(): ProjectItem[] {
  return PROJECTS;
}

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.id === id);
}

// Showrooms
export function getAllShowrooms(): ShowroomItem[] {
  return SHOWROOMS;
}

export function getShowroomById(id: string): ShowroomItem | undefined {
  return SHOWROOMS.find((s) => s.id === id);
}

// Media
export function getAllMedia(): MediaItem[] {
  return MEDIA_ITEMS;
}

export function getMediaById(id: string): MediaItem | undefined {
  return MEDIA_ITEMS.find((m) => m.id === id);
}

// Reports
export function getAllReports(): SpecialReportItem[] {
  return SPECIAL_REPORTS;
}

export function getReportById(id: string): SpecialReportItem | undefined {
  return SPECIAL_REPORTS.find((r) => r.id === id);
}
