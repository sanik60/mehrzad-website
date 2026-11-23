import type { Localized } from '../i18n';
import data from '../content/destinations.json';

// Edited in the back office (Pages CMS) or directly in src/content/destinations.json.
export interface Destination {
  slug: string;
  name: Localized;
  summary: Localized;
  airport: Localized;
  borders?: Localized;
  image?: string;
  sights: Localized<string[]>;
}

// National emergency numbers in Iran (same in every city).
export const emergency = { police: '110', ambulance: '115', fire: '125' };

export const destinations = data as Destination[];
export const destinationBySlug = (slug: string) => destinations.find((d) => d.slug === slug);
