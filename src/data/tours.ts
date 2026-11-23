import type { Localized } from '../i18n';
import data from '../content/tours.json';

// Edited in the back office (Pages CMS) or directly in src/content/tours.json.
export const categories = ['historical', 'ski', 'religious', 'combined', 'leisure', 'day'] as const;
export type Category = (typeof categories)[number];

export interface Tour {
  slug: string;
  category: Category;
  days: number;
  cities: string[]; // destination slugs
  featured?: boolean;
  image?: string;
  title: Localized;
  summary: Localized;
  highlights: Localized<string[]>;
}

export const tours = data as Tour[];
export const tourBySlug = (slug: string) => tours.find((t) => t.slug === slug);
