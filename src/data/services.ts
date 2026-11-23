import type { Localized } from '../i18n';
import servicesData from '../content/services.json';
import treatmentsData from '../content/treatments.json';

// Edited in the back office (Pages CMS) or directly in src/content/*.json.
export interface Item {
  slug: string;
  icon: string;
  title: Localized;
  text: Localized;
}

export const services = servicesData as Item[];
export const treatments = treatmentsData as Item[];
