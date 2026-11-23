// Site-wide settings. Replace the placeholders before launch.
export const site = {
  brand: 'Mehrzad Travel',
  // International format, digits only, no "+" (used for wa.me links). PLACEHOLDER.
  whatsapp: '989000000000',
  email: 'info@example.com', // PLACEHOLDER
  // Shows a thin "demo content" bar on every page until real content is in.
  demoContent: true,
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
