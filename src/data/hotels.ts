import type { Localized } from '../i18n';
import data from '../content/hotels.json';

// Edited in the back office (Pages CMS) or directly in src/content/hotels.json.
export const amenities = ['wifi', 'pool', 'spa', 'parking', 'restaurant', 'shuttle'] as const;
export type Amenity = (typeof amenities)[number];

export interface Hotel {
  slug: string;
  city: string; // destination slug
  stars: number;
  amenities: Amenity[];
  image?: string;
  name: Localized;
}

export const hotels = data as Hotel[];
