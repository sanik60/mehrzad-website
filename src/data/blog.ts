import type { Lang } from '../i18n';

interface MdModule {
  frontmatter: { title: string; description: string; date: string | Date };
  Content: any;
}

// Posts live in src/content/blog/<lang>/<slug>.md. English is the reference version.
const files = import.meta.glob<MdModule>('../content/blog/*/*.md', { eager: true });

export interface Post {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  date: Date;
  Content: any;
}

const all: Post[] = Object.entries(files).map(([path, mod]) => {
  const [, lang, slug] = path.match(/blog\/([a-z]{2})\/(.+)\.md$/)!;
  return {
    slug,
    lang: lang as Lang,
    title: mod.frontmatter.title,
    description: mod.frontmatter.description,
    date: new Date(mod.frontmatter.date),
    Content: mod.Content,
  };
});

export const postSlugs = [...new Set(all.filter((p) => p.lang === 'en').map((p) => p.slug))];

/** The post in the requested language, or the English version as a fallback. */
export function getPost(slug: string, lang: Lang): { post: Post; translated: boolean } | undefined {
  const exact = all.find((p) => p.slug === slug && p.lang === lang);
  if (exact) return { post: exact, translated: true };
  const fallback = all.find((p) => p.slug === slug && p.lang === 'en');
  return fallback && { post: fallback, translated: lang === 'en' };
}

export function postsFor(lang: Lang): Post[] {
  return postSlugs
    .map((slug) => getPost(slug, lang)!.post)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
