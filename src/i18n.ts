import { projects as projectsEn, type Project } from './data/projects';
import { projects as projectsId } from './data/projects.id';
import { url } from './data/site';

export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Interface strings. Page content lives in src/data. */
export const ui = {
  en: {
    langName: 'English',
    switchTo: 'Baca dalam Bahasa Indonesia',
    allProjects: '← All projects',
    allBuilds: '← All builds',
    nav: { projects: 'Projects', builds: 'Builds', experience: 'Experience', contact: 'Contact', cta: 'Let’s talk' },
    tileGo: 'Read the story →',
    similar: { kicker: 'Sound familiar?', title: 'Got a problem like this one?', sub: 'I’m open to product leadership roles. Tell me what you’re working on.' },
    next: 'Next',
    readStory: 'Read the story →',
    downloadPdf: 'Download PDF',
    seeProjects: 'See projects ↓',
    months: 'months',
    tags: { Chosen: 'Chosen', Supporting: 'Supporting', 'Not chosen': 'Not chosen', Deprioritized: 'Deprioritized' },
    notFound: {
      title: 'Page not found',
      hook: 'This story <em>doesn’t exist.</em>',
      sub: 'The page you’re looking for isn’t here. The real ones are on the home page.',
    },
  },
  id: {
    langName: 'Bahasa Indonesia',
    switchTo: 'Read in English',
    allProjects: '← Semua proyek',
    allBuilds: '← Semua build',
    nav: { projects: 'Proyek', builds: 'Build', experience: 'Pengalaman', contact: 'Kontak', cta: 'Yuk ngobrol' },
    tileGo: 'Baca ceritanya →',
    similar: { kicker: 'Kedengeran familier?', title: 'Lagi ngadepin masalah kayak gini?', sub: 'Aku terbuka buat posisi product leadership. Ceritain aja lagi ngerjain apa.' },
    next: 'Lanjut',
    readStory: 'Baca ceritanya →',
    downloadPdf: 'Unduh PDF',
    seeProjects: 'Lihat proyek ↓',
    months: 'bulan',
    tags: { Chosen: 'Dipilih', Supporting: 'Pendukung', 'Not chosen': 'Nggak dipilih', Deprioritized: 'Ditunda' },
    notFound: {
      title: 'Halaman tidak ditemukan',
      hook: 'Ceritanya <em>nggak ada.</em>',
      sub: 'Halaman yang kamu cari nggak ada. Cerita-cerita aslinya ada di halaman utama.',
    },
  },
} as const;

export function getProjects(locale: Locale): Project[] {
  return locale === 'id' ? projectsId : projectsEn;
}

/** Projects in the same home section as `project` ("case" when unset). */
export function projectGroup(locale: Locale, group: Project['group'] = 'case'): Project[] {
  return getProjects(locale).filter((p) => (p.group ?? 'case') === group);
}

/** Home anchor for a project's section. */
export function groupAnchor(group: Project['group'] = 'case'): string {
  return group === 'builder' ? '/#builder' : '/#projects';
}

/** Internal link for a locale: English at the root, Indonesian under /id. */
export function localePath(locale: Locale, path: string): string {
  return url(locale === 'en' ? path : `/id${path}`);
}

/** Same page in the other language, from a locale-free path like /projects/mining/. */
export function alternates(path: string): Record<Locale, string> {
  return { en: localePath('en', path), id: localePath('id', path) };
}
