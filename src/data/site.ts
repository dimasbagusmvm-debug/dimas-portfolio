export const site = {
  name: 'Dimas Bagus Ginta P',
  title: 'Head of Product',
  location: 'Surabaya, Indonesia',
  email: 'dimasbgintap@gmail.com',
  whatsappDisplay: '+62 858 5525 5637',
  whatsappUrl: 'https://wa.me/6285855255637',
  linkedin: 'https://www.linkedin.com/in/dimasbagusgp/',
  pdf: '/portfolio.pdf',
};

export const heroStats = [
  { slug: 'mining', big: '<span class="nw">8–20</span> → <span class="nw">1–3</span>', caption: 'fatigue incidents per month across 900 haul trucks', small: '01 · Mining' },
  { slug: 'fintech', big: 'IDR 1B / day', caption: 'transactions regained after a decade-old app was rebuilt', small: '02 · Fintech' },
  { slug: 'ai-erp', big: '<span class="nw">30–50</span> → <span class="nw">15–20 min</span>', caption: 'quote-to-shipment cycle with AI inside the ERP', small: '03 · AI & ERP' },
  { slug: 'saas', big: '300+', caption: 'merchants taken online in six months during Covid', small: '04 · SaaS' },
  { slug: 'pos', big: '300', caption: 'new users in 3 months for a mobile POS built from scratch', small: '05 · First product' },
];

export const career = [
  { name: 'Interactive Technologies', months: 29, color: '#EC6A9A' },
  { name: 'Majoo', months: 36, color: '#2EC4A8' },
  { name: 'ViaPulsa', months: 25, color: '#A07BFF' },
  { name: 'Minergo', months: 8, color: '#F2A93B' },
  { name: 'eDOT', months: 8, color: '#5B9BFF' },
];
export const careerYears = [
  { year: '2017', at: 0 },
  { year: '2020', at: 27.4 },
  { year: '2023', at: 61.4 },
  { year: '2026', at: 100 },
];

export const experience = [
  { dates: 'Dec 2025 – Jul 2026', role: 'Product Manager, AI ERP · eDOT', line: 'Project-based, remote. End-to-end ERP implementation and optimization on esuite, with AI (edic) tied to measurable client outcomes.' },
  { dates: 'Apr – Nov 2025', role: 'Lead Digital Transformation & Implementation Catalyst · Minergo Visi Maxima', line: 'Rolled out FAMOUS 2.0 at Borneo Indobara and led EV truck integration with the driver app and online charging booking.' },
  { dates: 'Feb 2023 – Mar 2025', role: 'Head of Product (Product Director) · ViaPulsa Global Indonesia', line: 'Owned the full app portfolio. Also Acting Manager of Engineering & IT Support (Feb–Jul 2024): 13 engineers, +20% productivity.' },
  { dates: 'Feb 2020 – Feb 2023', role: 'Product Manager · Majoo Indonesia', line: 'Core revenue products: POS, online ordering and omnichannel, working directly with the CEO and VPs of Product and Engineering.' },
  { dates: 'Sep 2017 – Feb 2020', role: 'Supervisor, R&D and Product Management · Interactive Technologies Group', line: 'Started as Product Management L1, building InterActive MyProfit, a mobile POS for SMEs, from scratch with the CTO. Later supervised R&D and product initiatives for client solutions.' },
];

export const education = [
  { title: 'B.Sc. Computer Science, Informatics Engineering', sub: 'Universitas 17 Agustus 1945 Surabaya, 2013–2017' },
  { title: 'Product-Led Growth Certification', sub: 'Pendo.io' },
  { title: 'Certified Product Manager Facilitator', sub: 'Binar Academy' },
  { title: 'Design Sprint: Business Idea Validation', sub: 'Tech in Asia Indonesia' },
  { title: 'Business Process Management Master Class', sub: 'Udemy' },
  { title: 'Management Development Program', sub: 'Human Plus Institute' },
];

export const toolkit = [
  { title: 'Product', sub: 'Jira, ClickUp, Trello, Productboard, Notion, Figma, Whimsical' },
  { title: 'AI & prototyping', sub: 'Claude, ChatGPT, Gemini, Lovable, Replit' },
  { title: 'Methods', sub: 'Product-led growth, design sprints, business process management, change management' },
];

/** Prefix an internal path with the configured base (for GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
