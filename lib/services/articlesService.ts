import { ARTICLES } from '../../data/articles';
import { MORE_ARTICLES } from '../../data/moreArticles';
import { Article, CategorySlug } from '../models';

const ALL_ARTICLES: Article[] = [...ARTICLES, ...MORE_ARTICLES];

export function getAllArticles(): Article[] {
  return ALL_ARTICLES;
}

export function getArticleById(id: string): Article | undefined {
  return ALL_ARTICLES.find((a) => a.id === id);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return ALL_ARTICLES.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return ALL_ARTICLES.filter((a) => a.featured);
}

export function getTrendingArticles(): Article[] {
  return ALL_ARTICLES.filter((a) => a.trendingRank !== undefined).sort(
    (a, b) => (a.trendingRank || 99) - (b.trendingRank || 99)
  );
}

export function getLatestArticles(limit = 6): Article[] {
  return ALL_ARTICLES.slice(0, limit);
}

export function getRelatedArticles(currentId: string, category: CategorySlug, limit = 3): Article[] {
  return ALL_ARTICLES.filter((a) => a.id !== currentId && a.category === category).slice(0, limit);
}

export function searchAllData(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ALL_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.deck.toLowerCase().includes(q) ||
      a.categoryName.toLowerCase().includes(q) ||
      a.author.name.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}
