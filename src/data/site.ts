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

/** Home page copy per language (keys match src/i18n.ts locales). */
export const home = {
  en: {
    title: 'Head of Product',
    location: 'Surabaya, Indonesia',
    description: 'Nine years building digital products in Indonesia, from SME SaaS and telecom fintech to coal mining and AI-enabled ERP.',
    kicker: 'Product portfolio',
    hook: 'I turn messy operations into products people <em>actually use.</em>',
    sub: 'Nine years building digital products in Indonesia, from SME SaaS and telecom fintech to coal mining and AI-enabled ERP. Computer Science by training, translator between executives, engineers and people in the field by habit.',
    statement: 'I start where the work is messiest: in the cab, at the counter, in the warehouse. Then I build what the people there will actually use.',
    statementSub: 'Adoption comes first. I lead with what each person gains instead of rules, and I put technology exactly where people get stuck. Until people use it, every other metric is noise.',
    numbersKicker: 'The numbers, up front',
    careerKicker: 'Nine years, five companies',
    projectsKicker: 'Projects',
    projectsTitle: 'Pick a story',
    projectsLead: 'Five products across mining, fintech, AI and SME SaaS. Open any one for the full story.',
    builderKicker: 'Product builder',
    builderTitle: 'Things I build myself, with AI',
    builderLead: 'Products I build and ship end to end with Claude Code, from the scope and the decisions to a working app in production.',
    experienceTitle: 'Experience',
    educationTitle: 'Education & certifications',
    toolkitTitle: 'Toolkit',
    ctaKicker: 'What’s next',
    ctaHook: 'Got a messy problem? <em>Let’s talk.</em>',
    ctaSub: 'Open to product leadership roles in SaaS across industries, remote or international.',
    heroStats: [
      { slug: 'ai-erp', big: '<span class="nw">30–50</span> → <span class="nw">15–20 min</span>', caption: 'quote-to-shipment cycle with AI inside the ERP', small: '01 · AI & ERP' },
      { slug: 'mining', big: '<span class="nw">15% → 65%</span>', caption: 'system adoption in six months across 2,500 haul truck drivers', small: '02 · Mining' },
      { slug: 'fintech', big: 'IDR 1B / day', caption: 'transactions regained after a decade-old app was rebuilt', small: '03 · Fintech' },
      { slug: 'saas', big: '300+', caption: 'merchants taken online in six months during Covid', small: '04 · SaaS' },
      { slug: 'pos', big: '300', caption: 'new users in 3 months for a mobile POS built from scratch', small: '05 · First product' },
    ],
    experience: [
      { dates: 'Dec 2025 – Jul 2026', role: 'Product Manager, AI ERP · eDOT', line: 'Project-based, remote. End-to-end ERP implementation and optimization on esuite, with AI (edic) tied to measurable client outcomes.' },
      { dates: 'Apr – Nov 2025', role: 'Lead Digital Transformation & Implementation Catalyst · Minergo Visi Maxima', line: 'Rolled out FAMOUS 2.0 at Borneo Indobara and led EV truck integration with the driver app and online charging booking.' },
      { dates: 'Feb 2023 – Mar 2025', role: 'Head of Product (Product Director) · ViaPulsa Global Indonesia', line: 'Owned the full app portfolio. Also Acting Manager of Engineering & IT Support (Feb–Jul 2024): 13 engineers, +20% productivity.' },
      { dates: 'Feb 2020 – Feb 2023', role: 'Product Manager · Majoo Indonesia', line: 'Core revenue products: POS, online ordering and omnichannel, working directly with the CEO and VPs of Product and Engineering.' },
      { dates: 'Sep 2017 – Feb 2020', role: 'Supervisor, R&D and Product Management · Interactive Technologies Group', line: 'Started as Product Management L1, building InterActive MyProfit, a mobile POS for SMEs, from scratch with the CTO. Later supervised R&D and product initiatives for client solutions.' },
    ],
    education: [
      { title: 'B.Sc. Computer Science, Informatics Engineering', sub: 'Universitas 17 Agustus 1945 Surabaya, 2013–2017' },
      { title: 'Product-Led Growth Certification', sub: 'Pendo.io' },
      { title: 'Certified Product Manager Facilitator', sub: 'Binar Academy' },
      { title: 'Design Sprint: Business Idea Validation', sub: 'Tech in Asia Indonesia' },
      { title: 'Business Process Management Master Class', sub: 'Udemy' },
      { title: 'Management Development Program', sub: 'Human Plus Institute' },
    ],
    toolkit: [
      { title: 'Product', sub: 'Jira, ClickUp, Trello, Productboard, Notion, Figma, Whimsical' },
      { title: 'AI & prototyping', sub: 'Claude, ChatGPT, Gemini, Lovable, Replit' },
      { title: 'Methods', sub: 'Product-led growth, design sprints, business process management, change management' },
    ],
  },
  id: {
    title: 'Head of Product',
    location: 'Surabaya, Indonesia',
    description: 'Sembilan tahun bikin produk digital di Indonesia, dari SaaS UMKM dan fintech telekomunikasi sampai tambang batu bara dan ERP berbasis AI.',
    kicker: 'Portofolio produk',
    hook: 'Aku ngubah operasional yang berantakan jadi produk yang <em>beneran dipakai.</em>',
    sub: 'Sembilan tahun bikin produk digital di Indonesia, dari SaaS UMKM dan fintech telekomunikasi sampai tambang batu bara dan ERP berbasis AI. Kuliahnya Ilmu Komputer, kesehariannya jadi penerjemah antara eksekutif, engineer, dan orang-orang di lapangan.',
    statement: 'Aku selalu mulai dari tempat kerja yang paling berantakan: di kabin truk, di meja kasir, di gudang. Dari situ aku bikin hal yang beneran bakal dipakai orang-orang di sana.',
    statementSub: 'Adopsi nomor satu. Aku ngajak orang lewat untungnya buat mereka, dan naruh teknologi persis di titik mereka nyangkut. Selama belum dipakai, metrik lain cuma noise.',
    numbersKicker: 'Angkanya dulu',
    careerKicker: 'Sembilan tahun, lima perusahaan',
    projectsKicker: 'Proyek',
    projectsTitle: 'Pilih ceritanya',
    projectsLead: 'Lima produk, dari tambang, fintech, AI, sampai SaaS UMKM. Klik salah satu buat baca cerita lengkapnya.',
    builderKicker: 'Product builder',
    builderTitle: 'Yang aku bikin sendiri, pakai AI',
    builderLead: 'Produk yang aku bikin dan rilis sendiri bareng Claude Code, dari nentuin scope sampai aplikasinya jalan di production.',
    experienceTitle: 'Pengalaman',
    educationTitle: 'Pendidikan & sertifikasi',
    toolkitTitle: 'Toolkit',
    ctaKicker: 'Berikutnya',
    ctaHook: 'Lagi pusing sama masalah yang ruwet? <em>Yuk ngobrol.</em>',
    ctaSub: 'Aku terbuka buat posisi product leadership di SaaS, industri apa aja, remote atau internasional.',
    heroStats: [
      { slug: 'ai-erp', big: '<span class="nw">30–50</span> → <span class="nw">15–20 mnt</span>', caption: 'siklus quote-to-shipment dengan AI di dalam ERP', small: '01 · AI & ERP' },
      { slug: 'mining', big: '<span class="nw">15% → 65%</span>', caption: 'adopsi sistem dalam enam bulan, di 2.500 driver truk angkut', small: '02 · Pertambangan' },
      { slug: 'fintech', big: 'IDR 1B / hari', caption: 'transaksi balik lagi setelah aplikasi umur sepuluh tahun dibangun ulang', small: '03 · Fintech' },
      { slug: 'saas', big: '300+', caption: 'merchant go online dalam enam bulan pas Covid', small: '04 · SaaS' },
      { slug: 'pos', big: '300', caption: 'pengguna baru dalam 3 bulan, buat POS mobile yang dibikin dari nol', small: '05 · Produk pertama' },
    ],
    experience: [
      { dates: 'Des 2025 – Jul 2026', role: 'Product Manager, AI ERP · eDOT', line: 'Berbasis proyek, remote. Pegang implementasi dan optimasi ERP end-to-end di esuite, dengan AI (edic) yang dikaitkan ke hasil klien yang bisa diukur.' },
      { dates: 'Apr – Nov 2025', role: 'Lead Digital Transformation & Implementation Catalyst · Minergo Visi Maxima', line: 'Ngerilis FAMOUS 2.0 di Borneo Indobara dan pegang integrasi truk listrik ke aplikasi driver, plus booking pengisian daya online.' },
      { dates: 'Feb 2023 – Mar 2025', role: 'Head of Product (Product Director) · ViaPulsa Global Indonesia', line: 'Pegang semua aplikasi di portofolio. Sempat juga jadi Acting Manager Engineering & IT Support (Feb–Jul 2024): 13 engineer, produktivitas naik 20%.' },
      { dates: 'Feb 2020 – Feb 2023', role: 'Product Manager · Majoo Indonesia', line: 'Pegang produk inti yang ngasilin pendapatan: POS, pesanan online, dan omnichannel. Kerja langsung bareng CEO dan VP Product serta Engineering.' },
      { dates: 'Sep 2017 – Feb 2020', role: 'Supervisor, R&D and Product Management · Interactive Technologies Group', line: 'Mulai dari Product Management L1, bikin InterActive MyProfit, POS mobile buat UMKM, dari nol bareng CTO. Habis itu pegang inisiatif R&D dan produk buat solusi klien.' },
    ],
    education: [
      { title: 'S.Kom. Ilmu Komputer, Teknik Informatika', sub: 'Universitas 17 Agustus 1945 Surabaya, 2013–2017' },
      { title: 'Product-Led Growth Certification', sub: 'Pendo.io' },
      { title: 'Certified Product Manager Facilitator', sub: 'Binar Academy' },
      { title: 'Design Sprint: Business Idea Validation', sub: 'Tech in Asia Indonesia' },
      { title: 'Business Process Management Master Class', sub: 'Udemy' },
      { title: 'Management Development Program', sub: 'Human Plus Institute' },
    ],
    toolkit: [
      { title: 'Produk', sub: 'Jira, ClickUp, Trello, Productboard, Notion, Figma, Whimsical' },
      { title: 'AI & prototyping', sub: 'Claude, ChatGPT, Gemini, Lovable, Replit' },
      { title: 'Metode', sub: 'Product-led growth, design sprint, business process management, change management' },
    ],
  },
};

/** Prefix an internal path with the configured base (for GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
