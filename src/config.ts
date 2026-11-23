import settings from './content/settings.json';

// Edited in the back office ("Site settings") or directly in src/content/settings.json.
export const site = settings as {
  brand: string;
  whatsapp: string; // international format, digits only
  email: string;
  demoContent: boolean;
};

export const whatsappDigits = site.whatsapp.replace(/\D/g, '');

export const whatsappLink = (text?: string) =>
  `https://wa.me/${whatsappDigits}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
