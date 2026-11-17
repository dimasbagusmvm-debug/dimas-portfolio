import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.jpg', { eager: true });

/** Look up an image in src/assets/projects by file name. */
export function img(file: string): ImageMetadata {
  const hit = images[`../assets/projects/${file}`];
  if (!hit) throw new Error(`Missing image: ${file}`);
  return hit.default;
}

/* ---------- Block types: every beat is a list of these ---------- */

export type Step = { title: string; text: string; highlight?: boolean };
export type CompareRow = { label: string; value: string; lo: number; hi?: number; kind: 'before' | 'after' };
export type Compare = { title?: string; max: number; rows: CompareRow[]; ariaLabel: string; caption?: string };
export type Column = { label: string; value: string; lo: number; hi?: number; color: 'neutral' | 'drop' | 'acc' };

export type Block =
  | { type: 'p'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'stats'; items: [string, string][] }
  | { type: 'problems'; items: [string, string][] }
  | { type: 'log'; items: { tag: 'Chosen' | 'Supporting' | 'Not chosen' | 'Deprioritized'; title: string; text: string }[] }
  | { type: 'flow'; title: string; steps: (Step | Step[])[]; caption?: string }
  | { type: 'compare'; charts: Compare[] }
  | { type: 'columns'; title: string; max: number; cols: Column[]; caption?: string; ariaLabel: string }
  | { type: 'takeaway'; label: string; text: string }
  | { type: 'figure'; file: string; alt: string; caption: string }
  | { type: 'figures'; items: { file: string; alt: string; caption: string; /** portrait shot, e.g. a phone */ tall?: boolean }[] }
  | { type: 'tiles'; items: Step[] }
  | { type: 'two'; left: Block[]; right: Block[] };

export type Beat = { label: string; title: string; blocks: Block[] };

export type Project = {
  slug: string;
  num: string;
  /** Main case studies, or things built hands-on (shown in their own home section) */
  group?: 'case' | 'builder';
  /** Short name used in “Next: …” */
  short: string;
  accent: string;
  card: { kicker: string; hook: string; company: string; role: string };
  opener: {
    kicker: string;
    /** HTML; key phrase in <em>, ranges in <span class="nw"> */
    hook: string;
    sub: string;
    role: string[];
    cover: { file: string; alt: string; position?: string };
  };
  beats: Beat[];
};

const LESSON = 'Lesson';
const OUTCOME = 'Outcome';

export const projects: Project[] = [
  {
    slug: 'mining',
    short: 'Mining',
    num: '01',
    accent: '#F2A93B',
    card: {
      kicker: 'Coal mining · Digital transformation',
      hook: 'Fatigue incidents down from <span class="nw">8–20</span> to <span class="nw">1–3</span> a month',
      company: 'Minergo Visi Maxima (Sinarmas Mining) · 2025',
      role: 'Lead Digital Transformation',
    },
    opener: {
      kicker: '01 · Coal mining · Digital transformation',
      hook: 'Fatigue incidents down from <em><span class="nw">8–20</span> to <span class="nw">1–3</span></em> a month.',
      sub: 'How we got 2,500 haul truck drivers to adopt a safety system they never asked for, and then plugged electric trucks into it.',
      role: ['Minergo Visi Maxima, part of Sinarmas Mining · Apr–Nov 2025', 'Lead Digital Transformation & Implementation Catalyst'],
      cover: { file: 'mining-cover.jpg', alt: 'Illustration of an electric dump truck charging station with arched orange steel canopies' },
    },
    beats: [
      {
        label: 'Context',
        title: 'Let me give you some context first',
        blocks: [
          { type: 'p', html: 'Sinarmas Mining wanted PT Borneo Indobara to become Indonesia’s first digital mine. My playground was hauling and port: the road that moves coal from the pit to the ships.' },
          { type: 'stats', items: [['10', 'hauling vendors, each with its own SOPs'], ['~900', 'dump trucks'], ['2,500', 'drivers'], ['~3,500', 'system users in total']] },
        ],
      },
      {
        label: 'The problem',
        title: 'So what went wrong?',
        blocks: [
          { type: 'problems', items: [
            ['People were getting hurt', 'Driver fatigue caused 8–20 incidents and fatalities every month.'],
            ['Ten ways of working', 'Every vendor had different SOPs and documents, so data never lined up.'],
            ['Paper all the way', 'Each haul cycle was logged on paper, so paying vendors and reconciling took 5 working days.'],
          ] },
          { type: 'p', html: 'A version 1.0 system already existed. It just did not run well, mostly because of cloud and in-truck IoT hardware problems.' },
        ],
      },
      {
        label: 'The approach',
        title: 'Where the system sits in a coal haul',
        blocks: [
          { type: 'flow', title: 'One haul cycle, pit to port', caption: 'Highlighted steps are where FAMOUS 2.0 changed the most for drivers and vendors.', steps: [
            { title: 'Shift start', text: 'Driver app runs pre-shift checks', highlight: true },
            { title: 'Loading at pit', text: 'Cycle recorded digitally' },
            { title: 'Hauling road', text: 'In-cab IoT detects fatigue in real time', highlight: true },
            { title: 'Dumping at port', text: 'Cycle closed automatically' },
            { title: 'Reconciliation', text: 'Vendor and driver payments, no paper', highlight: true },
          ] },
          { type: 'p', html: 'I aligned expectations with Sinarmas’ digital team at holding level, then turned them into an implementation plan with Borneo Indobara’s site leaders, broken into modules we could ship partially and in parallel.' },
        ],
      },
      {
        label: 'Decisions',
        title: 'Rebuild everything? Not quite.',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Revamp v1.0 module by module', text: 'The core architecture was still sound and 2.0 had a deadline. Cloud and IoT issues were fixed inside each module, hardware included.' },
            { tag: 'Not chosen', title: 'Rebuild from scratch', text: 'Would have pushed the release back without a clear gain.' },
            { tag: 'Chosen', title: 'IoT fatigue hardware in dump trucks', text: 'Agreed with the C-level. Dump truck incidents caused the biggest losses, so detection had to live in the cab.' },
            { tag: 'Supporting', title: 'Driver app for operations and prevention', text: 'Handles shift prep and preventive checks while the hardware watches for fatigue.' },
          ] },
          { type: 'figure', file: 'mining-incab-cameras.jpg', alt: 'In-cab camera views of a haul truck: driver, road and cabin, with faces blurred', caption: 'Inside the cab: driver, road and cabin cameras feed real-time fatigue detection. Faces blurred for privacy.' },
        ],
      },
      {
        label: 'Adoption',
        title: 'The hardest part wasn’t the tech. It was people.',
        blocks: [
          { type: 'p', html: 'Drivers work long shifts in tough conditions, and they don’t behave like typical software users. Here’s what moved them:' },
          { type: 'ul', items: [
            'Recurring training in several formats, from managers down to drivers and supervisors.',
            'Evaluations done right inside the truck cabin.',
            'A reward program for drivers.',
            'Regular field visits, with findings fed straight back to the dev team.',
          ] },
          { type: 'takeaway', label: 'Rule', text: 'Adoption first. Until people used the system, every other metric was noise.' },
          { type: 'figure', file: 'mining-command-center.jpg', alt: 'FAMOUS 2.0 command center dashboard with SOS alerts, readiness, inspections and a fleet heatmap', caption: 'FAMOUS 2.0 command center: live SOS alerts, driver work readiness, daily pre-use inspections (P2H) and a fleet heatmap.' },
        ],
      },
      {
        label: 'Phase two',
        title: 'Then the trucks went electric',
        blocks: [
          { type: 'p', html: 'When electric dump trucks arrived, I led their integration into the same system. EV trucks were connected to the driver app and to the charging stations online, so drivers book a slot at a specific station and bay, then follow the charge from the cab.' },
          { type: 'figures', items: [
            { file: 'mining-ev-charging-station.jpg', alt: 'EV charging station on a mine hauling route with one bay per truck', caption: 'A charging station on the hauling route, one bay per truck.' },
            { file: 'mining-driver-app-charging.jpg', alt: 'Driver app screen showing a booked charging session', caption: 'A booked session: station, bay, time slot, charging guns, time left and battery level. Driver identity blurred.' },
          ] },
          { type: 'ul', items: [
            '<b>Booking:</b> reserve a time slot at a specific station and bay, based on location.',
            '<b>Live status:</b> remaining time, state of charge and incoming power, with a stop button.',
            '<b>One app:</b> charging sits next to fatigue monitoring and shift checks.',
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'What changed',
        blocks: [
          { type: 'compare', charts: [
            { title: 'Fatigue incidents / month', max: 20, ariaLabel: 'Fatigue incidents per month: before 8 to 20, after 1 to 3', rows: [
              { label: 'Before', value: '8–20', lo: 8, hi: 20, kind: 'before' }, { label: 'After', value: '1–3', lo: 1, hi: 3, kind: 'after' }] },
            { title: 'System adoption', max: 100, ariaLabel: 'System adoption: before 15 percent, after 6 months 65 percent', rows: [
              { label: 'Before', value: '15%', lo: 15, kind: 'before' }, { label: '6 months', value: '65%', lo: 65, kind: 'after' }] },
            { title: 'Driver prep per shift', max: 40, ariaLabel: 'Driver prep per shift: before 30 to 40 minutes, after 10 minutes', rows: [
              { label: 'Before', value: '30–40 min', lo: 30, hi: 40, kind: 'before' }, { label: 'After', value: '10 min', lo: 10, kind: 'after' }] },
            { title: 'Monthly reconciliation', max: 5, ariaLabel: 'Monthly reconciliation: before 5 days on paper, after 2 days', rows: [
              { label: 'Before', value: '5 days, paper', lo: 5, kind: 'before' }, { label: 'After', value: '2 days', lo: 2, kind: 'after' }] },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'What I took away',
        blocks: [
          { type: 'p', html: 'Digital transformation in mining is a different game: many stakeholders, vendors and contractors, plus field conditions no office can simulate. The technology was the easier part. Adoption had to be earned in the field, one cabin at a time.' },
        ],
      },
    ],
  },
  {
    slug: 'fintech',
    short: 'Fintech',
    num: '02',
    accent: '#A07BFF',
    card: {
      kicker: 'Telecom fintech · Turnaround',
      hook: 'Daily transactions back from IDR <span class="nw">300–500M</span> to 1B',
      company: 'ViaPulsa Global Indonesia · 2023–2025',
      role: 'Head of Product',
    },
    opener: {
      kicker: '02 · Telecom fintech · Product turnaround',
      hook: 'Daily transactions back from <em>IDR <span class="nw">300–500M</span> to 1B.</em>',
      sub: 'A ten-year-old app was losing to newer rivals. We rebuilt the product, the platform and the brand in six months.',
      role: ['ViaPulsa Global Indonesia · Feb 2023–Mar 2025', 'Head of Product (Product Director), leading 45 people'],
      cover: { file: 'viapulsa-cover.jpg', position: 'center 35%', alt: 'ViaPulsa landing page: Jasa Convert Pulsa Jadi Uang Terpercaya Sejak 2010, with brand ambassador holding the app' },
    },
    beats: [
      {
        label: 'Context',
        title: 'Let me give you some context first',
        blocks: [
          { type: 'p', html: 'ViaPulsa lets people convert mobile credit (pulsa) into cash or e-wallet balance. It had loyal users, but the app had not had a major update in almost a decade.' },
          { type: 'stats', items: [['~800K', 'active users'], ['45', 'people: 13 in-house engineers, 10 partner engineers, 22 in product'], ['6 mo', 'from discovery to version 2.0']] },
        ],
      },
      {
        label: 'The problem',
        title: 'So what went wrong?',
        blocks: [
          { type: 'problems', items: [
            ['A dated product', 'Almost ten years without a major update, while the market moved on.'],
            ['New competitors', 'Rival apps appeared in the same category.'],
            ['Shrinking volume', 'Daily transaction value fell from IDR 1B to IDR 300–500M, and marketing struggled to bring in leads.'],
          ] },
        ],
      },
      {
        label: 'Decisions',
        title: 'Patch it, or bet bigger?',
        blocks: [
          { type: 'p', html: 'We ran discovery across the user base, and with marketing and sales mapped our niche and a new brand persona: the go-to app for converting pulsa, with more value on top.' },
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Full revamp: app, architecture and brand', text: 'High risk, but the company’s vision was bigger than the old app could carry. Six-month baseline, voice-of-customer program running alongside.' },
            { tag: 'Not chosen', title: 'Incremental fixes on the old app', text: 'Considered seriously. It would not get us to the product and revenue model we needed.' },
            { tag: 'Chosen', title: 'App and web, not app only', text: 'A web channel next to the downloadable app let users transact from any platform and opened more income streams.' },
          ] },
        ],
      },
      {
        label: 'The product',
        title: 'What 2.0 looked like',
        blocks: [
          { type: 'two', left: [
            { type: 'tiles', items: [
              { title: 'Core', text: 'Seamless pulsa conversion, with an API gateway for results', highlight: true },
              { title: 'App + web', text: 'Transact from the app or the browser' },
              { title: 'New revenue', text: 'Game diamonds and app activations paid with pulsa', highlight: true },
              { title: 'Brand', text: 'New identity launched with the product' },
            ] },
            { type: 'p', html: 'The launch wasn’t smooth. Changing a decade-old app broke some long-time habits and volume dipped. Fast fixes across teams kept the dip short.' },
          ], right: [
            { type: 'figure', file: 'viapulsa-web-app.jpg', alt: 'ViaPulsa 2.0 web app with convert, wholesale, rate calculator and top-up options', caption: 'ViaPulsa 2.0 on the web: convert, wholesale, rate calculator and top-up, with live rates for six operators.' },
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'What changed',
        blocks: [
          { type: 'columns', title: 'Daily transaction value (IDR)', max: 1000, caption: 'Lighter band shows the reported range.', ariaLabel: 'Daily transaction value: earlier peak 1B, before revamp 300 to 500M, months 1 to 2 after launch 700 to 800M, month 4 after launch 1B', cols: [
            { label: 'Earlier peak', value: '1B', lo: 1000, color: 'neutral' },
            { label: 'Before revamp', value: '300–500M', lo: 300, hi: 500, color: 'drop' },
            { label: 'Months 1–2 after launch', value: '700–800M', lo: 700, hi: 800, color: 'acc' },
            { label: 'Month 4 after launch', value: '1B', lo: 1000, color: 'acc' },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'What I took away',
        blocks: [
          { type: 'p', html: 'A big-bang revamp can pay off, but long-time users feel every change. Next time I would plan the move for existing users as carefully as the new features.' },
        ],
      },
    ],
  },
  {
    slug: 'ai-erp',
    short: 'AI & ERP',
    num: '03',
    accent: '#5B9BFF',
    card: {
      kicker: 'AI & ERP · B2B SaaS',
      hook: 'Quote-to-shipment from <span class="nw">30–50</span> to <span class="nw">15–20</span> minutes',
      company: 'eDOT · 2025–2026',
      role: 'Product Manager, AI ERP',
    },
    opener: {
      kicker: '03 · AI & ERP · B2B SaaS',
      hook: 'Quote-to-shipment from <em><span class="nw">30–50</span> to <span class="nw">15–20</span> minutes.</em>',
      sub: 'Users didn’t need another AI product. They needed the ERP they already had to stop feeling complicated.',
      role: ['eDOT · Dec 2025–Jul 2026 · Remote', 'Product Manager, AI ERP (edic & esuite) · Client: Nabati Group'],
      cover: { file: 'edot-edic-cover.jpg', alt: 'edic landing page: an AI data analyst you chat with, with an Ask edic prompt box and Agent Mode' },
    },
    beats: [
      {
        label: 'Context',
        title: 'Two products, one goal',
        blocks: [
          { type: 'p', html: 'eDOT builds <b>esuite</b>, a distribution management ERP, and <b>edic</b>, an AI data analyst you can talk to. The goal: bring AI agents and assistants into the ERP to make processes smoother and cut operational cost at Nabati Group’s warehouses.' },
          { type: 'figure', file: 'edot-esuite.jpg', alt: 'esuite distribution management ERP interface', caption: 'esuite, the distribution management ERP used across Nabati Group warehouses.' },
        ],
      },
      {
        label: 'The problem',
        title: 'So what went wrong?',
        blocks: [
          { type: 'takeaway', label: 'Users said', text: 'The ERP has so many features that just getting through a process feels like work.' },
          { type: 'p', html: 'We had started by building AI as its own thing. Talking to Nabati users showed us the real pain was ERP complexity, not a missing AI tool.' },
        ],
      },
      {
        label: 'Decisions',
        title: 'The pivot',
        blocks: [
          { type: 'p', html: 'Together with other PMs, I evaluated most major AI models, comparing capability per use case against token consumption, since the business model is usage-based.' },
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Connect AI into existing ERP workflows', text: 'Hits the pain users actually named, and adds value to a product customers already pay for.' },
            { tag: 'Deprioritized', title: 'AI as a separate product', text: 'Our starting point. It would not have fixed ERP complexity.' },
          ] },
          { type: 'flow', title: 'From standalone AI to AI inside the ERP', steps: [
            { title: 'User', text: 'Says what they need instead of digging through menus' },
            { title: 'edic', text: 'Sets up and recaps the process', highlight: true },
            { title: 'esuite', text: 'Quotation to shipment, transactions to finance' },
          ] },
          { type: 'p', html: 'We ran the proof of concept in warehouses on Java, then rolled out to most Nabati warehouses across Indonesia.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'What changed',
        blocks: [
          { type: 'two', left: [
            { type: 'compare', charts: [
              { title: 'Quote-to-shipment cycle', max: 50, caption: 'Still improving as both the AI and its users keep learning.', ariaLabel: 'Quote-to-shipment cycle: before 30 to 50 minutes, after 15 to 20 minutes', rows: [
                { label: 'Before', value: '30–50 min', lo: 30, hi: 50, kind: 'before' }, { label: 'After', value: '15–20 min', lo: 15, hi: 20, kind: 'after' }] },
            ] },
          ], right: [
            { type: 'stats', items: [['20–25', 'new features shipped'], ['~40%', 'of them major, from transactions to finance']] },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'What I took away',
        blocks: [
          { type: 'p', html: 'The most valuable AI work wasn’t choosing the model. It was finding where users got stuck and putting AI exactly there.' },
        ],
      },
    ],
  },
  {
    slug: 'saas',
    short: 'SaaS',
    num: '04',
    accent: '#2EC4A8',
    card: {
      kicker: 'SME SaaS · Omnichannel',
      hook: 'Taking offline merchants online when Covid hit',
      company: 'Majoo Indonesia · 2021',
      role: 'Product Manager',
    },
    opener: {
      kicker: '04 · SME SaaS · Omnichannel',
      hook: 'Taking offline merchants online <em>when Covid shut their doors.</em>',
      sub: 'One-click integrations with marketplaces and food delivery apps, plus Majoo’s own online store, all flowing into one POS.',
      role: ['Majoo Indonesia · 2021 · Product Manager (role held 2020–2023)'],
      cover: { file: 'majoo-omnichannel-cover.jpg', position: 'center 40%', alt: 'Majoo omnichannel dashboard surrounded by GrabFood, GrabMart, GoFood, Shopee, Tokopedia and website icons' },
    },
    beats: [
      {
        label: 'Context',
        title: 'Let me give you some context first',
        blocks: [
          { type: 'p', html: 'Majoo is an all-in-one business app for Indonesian SMEs: POS, accounting, inventory, CRM and online ordering. Before omnichannel, I worked on its core, the POS (cashier app) merchants used every day. That gave me a front-row seat when Covid hit.' },
        ],
      },
      {
        label: 'The problem',
        title: 'So what went wrong?',
        blocks: [
          { type: 'problems', items: [
            ['Empty stores', 'Retail and F&B customers stopped coming in as behavior changed.'],
            ['Falling transactions', 'Transaction trends on Majoo dropped.'],
            ['Churn risk', 'Many merchants did not renew their subscriptions.'],
          ] },
        ],
      },
      {
        label: 'The approach',
        title: 'Ask merchants where their customers went',
        blocks: [
          { type: 'p', html: 'I started omnichannel research: which food delivery apps and marketplaces merchants already used, and what they expected. We picked partners on three criteria: merchant demand, API availability and integration value. Then an MVP, internal testing with tech, and iteration with real merchants before release.' },
          { type: 'flow', title: 'Every channel, one dashboard', steps: [
            [
              { title: '3 marketplaces', text: 'Online orders' },
              { title: '3 food delivery apps', text: 'Delivery orders' },
              { title: 'Merchant’s own online store', text: 'Customers order directly', highlight: true },
            ],
            { title: 'Majoo dashboard', text: 'One click to connect each channel', highlight: true },
            { title: 'Merchant’s POS', text: 'Orders, inventory and reports in one place' },
          ] },
        ],
      },
      {
        label: 'The product',
        title: 'Beyond integrations: our own store',
        blocks: [
          { type: 'p', html: 'Third-party platforms weren’t enough. We also built Majoo’s own e-commerce channel, so merchants could take orders online on their own terms. Customers place orders themselves, which made <b>waiterless and cashierless</b> ordering possible, and every order lands in the same POS and inventory.' },
          { type: 'figure', file: 'majoo-online-store.jpg', alt: 'Majoo online store marketing visual', caption: 'Majoo’s own online store, as the product is marketed today.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'What changed',
        blocks: [
          { type: 'stats', items: [['3 + 3', 'marketplace and food delivery integrations, one click each'], ['300+', 'merchants using integrations in the first six months'], ['+5–8%', 'transaction value after the first release']] },
        ],
      },
      {
        label: LESSON,
        title: 'What I took away',
        blocks: [
          { type: 'p', html: 'The original problem was renewals, yet I never tracked churn after launch. Now I set the success metric that matches the original problem before building, and track it from day one.' },
        ],
      },
    ],
  },
  {
    slug: 'pos',
    short: 'First product',
    num: '05',
    accent: '#EC6A9A',
    card: {
      kicker: 'SME SaaS · First product',
      hook: 'A mobile POS built from scratch, 300 users in 3 months',
      company: 'Interactive Technologies Group · 2018',
      role: 'Product Management L1',
    },
    opener: {
      kicker: '05 · SME SaaS · Where it started',
      hook: 'A mobile POS built <em>from scratch</em>, 300 users in 3 months.',
      sub: 'My first product role. Small businesses were priced out of desktop POS, so we bet on a free mobile app with online ordering and self-order kiosks, back when few people were looking at either.',
      role: ['Interactive Technologies Group · 2018', 'Product Management L1 · InterActive MyProfit'],
      cover: { file: 'myprofit-cover.jpg', alt: 'InterActive MyProfit marketing visual: an all-in-one cashier app on tablet and phone, with AI tips, self order, reservations, stock and QRIS payment' },
    },
    beats: [
      {
        label: 'Context',
        title: 'Let me give you some context first',
        blocks: [
          { type: 'p', html: 'In 2018, mobile POS had no clear winner in Indonesia, and it had barely reached small and medium businesses. Together with our CTO, I started an initiative to build one for that market.' },
          { type: 'stats', items: [['0 → 1', 'built from scratch, no existing product'], ['3', 'channels in v1: POS, online order web and self-order kiosk'], ['Free', 'app, monetized through hardware and add-ons']] },
        ],
      },
      {
        label: 'The problem',
        title: 'So what went wrong?',
        blocks: [
          { type: 'problems', items: [
            ['Stuck on the desktop', 'Most POS systems ran on desktop hardware, a poor fit for small shops and food stalls.'],
            ['Too expensive', 'High costs made business owners reluctant to subscribe, let alone buy a system outright.'],
            ['SMEs left out', 'Few products were built for small businesses at all.'],
          ] },
        ],
      },
      {
        label: 'Decisions',
        title: 'Dream big, ship small',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Mobile-first POS for SMEs', text: 'Mobile instead of desktop, priced and designed for small businesses rather than large retailers.' },
            { tag: 'Chosen', title: 'Online ordering and self-order kiosk in v1', text: 'The ambitious part. Few players were paying attention to self-ordering at the time.' },
            { tag: 'Chosen', title: 'Free app, paid hardware and add-ons', text: 'Revenue came from hardware and API connections to tools like thermal printers and accounting apps, not subscriptions.' },
          ] },
          { type: 'flow', title: 'How we got to 1.0', caption: 'A long loop, and the place where I learned product management by doing it.', steps: [
            { title: 'Discovery', text: 'Understand what SMEs need' },
            { title: 'Test', text: 'Validate the riskiest ideas' },
            { title: 'MVP', text: 'Smallest version worth using', highlight: true },
            { title: 'Iterate', text: 'Fix what users stumbled on' },
            { title: 'Roadmap', text: 'Commit to what proved itself', highlight: true },
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'What changed',
        blocks: [
          { type: 'stats', items: [['1.0', 'released with POS, online ordering and kiosk'], ['300', 'new users within 3 months of launch'], ['2', 'revenue streams: hardware and add-on integrations']] },
          { type: 'figure', file: 'myprofit-features.jpg', alt: 'MyProfit marketing visual listing POS, stock, reports, multi-outlet, QRIS and self order features', caption: 'MyProfit as it is marketed today: POS, stock, reports and multi-outlet, plus QRIS, multiple order types and self order. The self-ordering bet from 2018 is still a core feature.' },
        ],
      },
      {
        label: LESSON,
        title: 'What I took away',
        blocks: [
          { type: 'takeaway', label: 'School', text: 'My first product school: discovery, testing, MVP, iteration and go-to-market, all on one product.' },
          { type: 'p', html: 'Everything I did later at Majoo, ViaPulsa, Minergo and eDOT started with the habits I built here.' },
        ],
      },
    ],
  },
  {
    slug: 'tappin',
    short: 'tapp.in',
    num: '01',
    group: 'builder',
    accent: '#8BCB4A',
    card: {
      kicker: 'Retail POS · Built with Claude Code',
      hook: 'From a fragile spreadsheet app to a live multi-outlet POS',
      company: 'tapp.in (Bekalin Group) · 2026',
      role: 'Product owner & builder',
    },
    opener: {
      kicker: 'Product builder · Retail POS · Built with Claude Code',
      hook: 'A spreadsheet POS rebuilt into <em>a live web app.</em>',
      sub: 'A cashier, stock and reporting app for three outlets in Malang and Surabaya. I owned the product decisions and built it with Claude Code, first on Google Apps Script, then as a web app on Vercel.',
      role: ['tapp.in, formerly Bekalin POS · Bekalin Group · Oct–Nov 2026', 'Product owner & builder · Claude Code, Google Apps Script, Vercel, Supabase'],
      cover: { file: 'tappin-dashboard.jpg', position: 'top', alt: 'tapp.in dashboard: today’s sales, transactions and items sold, a 7-day sales chart, payment methods and latest transactions, with an outlet filter' },
    },
    beats: [
      {
        label: 'Context',
        title: 'Let me give you some context first',
        blocks: [
          { type: 'p', html: 'Bekalin Group sells food from three outlets in Malang and Surabaya, stocked from three warehouses. Its POS started as a Google Apps Script web app with Google Sheets as the database: cashier, pre-orders, stock and reports in one place.' },
          { type: 'stats', items: [['3', 'outlets: Bekalin Malang, Ngombe Es Malang, Bekalin Surabaya'], ['3', 'warehouses, tracked separately from outlets'], ['3', 'roles: super admin, admin and cashier'], ['5', 'payment methods: cash, QRIS, bank transfer, Shopee, TikTok Shop']] },
        ],
      },
      {
        label: 'Users',
        title: 'Who uses it, and how',
        blocks: [
          { type: 'stats', items: [['Cashier', 'sells and takes pre-orders at one outlet, with no back-office access'], ['Admin', 'runs products, stock, customers, discounts, reports and users'], ['Owner', 'everything an admin does, plus owner-only settings']] },
          { type: 'flow', title: 'A cashier’s shift', steps: [
            { title: 'Open the till', text: 'Log in and enter the opening cash' },
            { title: 'Ring up', text: 'Tap products, pick or add a customer, apply a discount', highlight: true },
            { title: 'Pay', text: 'Cash, QRIS, bank transfer, Shopee or TikTok Shop' },
            { title: 'Receipt', text: 'Thermal receipt, or save as a pre-order to pay later' },
            { title: 'Close the till', text: 'Count the cash; the app shows the difference', highlight: true },
          ] },
          { type: 'flow', title: 'An owner’s day', steps: [
            { title: 'Daily summary', text: 'Sales and cash differences, sent as a notification', highlight: true },
            { title: 'Dashboard', text: '7-day trend, top products, vs yesterday, per outlet' },
            { title: 'Sales report', text: 'By period, outlet and payment method' },
            { title: 'Stock', text: 'Stock in, transfers and adjustments across warehouses' },
          ] },
        ],
      },
      {
        label: 'The problem',
        title: 'So what went wrong?',
        blocks: [
          { type: 'p', html: 'These all came from using the app day to day, in my own words at the time.' },
          { type: 'problems', items: [
            ['Heavy screens wouldn’t open', 'Apps Script often failed while parsing data, so the sales report and stock often didn’t load.'],
            ['Malang and Surabaya mixed together', 'Sales couldn’t be split by city, and the report didn’t show how many items were sold.'],
            ['A cashier that felt stiff', 'The counter screen felt like the old Google app, and switching between cashier and back office was clumsy.'],
            ['Work pushed to the back office', 'Adding a customer or a manual discount meant leaving the cashier, and receipts weren’t in thermal format.'],
            ['A back office that broke', 'Saving a product failed, even on a phone, SKUs had to be typed by hand, and some lists wouldn’t scroll.'],
            ['Logged out on every return', 'Reopening the installed app didn’t keep the login session.'],
            ['Outlets confused with warehouses', 'The data treated a selling location and a stock location as the same thing, so the dashboard showed the wrong relationships.'],
          ] },
        ],
      },
      {
        label: 'The approach',
        title: 'Fix it in place first, then move it',
        blocks: [
          { type: 'p', html: 'I worked with Claude Code the way I work with an engineering team: I set the scope and made the calls, it wrote and refactored the code, and every change shipped as a numbered version.' },
          { type: 'flow', title: 'Apps Script, version by version (31 Oct – 5 Nov)', caption: 'Eleven versions in six days, from V20.0.0 to V20.1.0.', steps: [
            { title: 'V20.0.2', text: 'Schema migrations that run once per version' },
            { title: 'V20.0.3', text: 'Outlet filter and total items sold in the sales report' },
            { title: 'V20.0.x', text: 'Page-by-page UI refresh: cashier, stock, pre-orders', highlight: true },
            { title: 'V20.1.0', text: 'Dashboard redesign: 7-day trend, top products, vs yesterday' },
          ] },
        ],
      },
      {
        label: 'Decisions',
        title: 'Rewrite it, or move it?',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Move to a web app, keep the Apps Script logic', text: 'The rebuild runs the original server code unchanged on a compatibility layer that mimics Google Sheets, backed by Supabase Postgres and served from Vercel.' },
            { tag: 'Deprioritized', title: 'The AI agent', text: 'The Apps Script version only had a placeholder for it, with no model connected. I left it out of the rebuild until its scope is clear.' },
            { tag: 'Deprioritized', title: 'Online ordering', text: 'Dropped from the rebuild to focus on the cashier and the back office.' },
            { tag: 'Chosen', title: 'Product variants with their own stock', text: 'One variant dimension, each with separate stock. Modifiers wait for later.' },
            { tag: 'Chosen', title: 'Selling locations separate from warehouses', text: 'An outlet sells; a warehouse holds stock. The data model now treats them as different things.' },
          ] },
          { type: 'flow', title: 'From Apps Script to web app', steps: [
            { title: 'Original Code.gs', text: 'Server logic kept as it was' },
            { title: 'Compatibility layer', text: 'Mimics SpreadsheetApp and google.script.run', highlight: true },
            { title: 'Supabase Postgres', text: 'Sheets stored as rows' },
            { title: 'Vercel + PWA', text: 'Installable web app for cashiers and owners', highlight: true },
          ] },
        ],
      },
      {
        label: 'Pain → fix',
        title: 'What each pain point turned into',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Heavy screens → a new platform', text: 'Moved from Apps Script to Vercel and Supabase, so reports and stock load like any other page.' },
            { tag: 'Chosen', title: 'Mixed cities → outlets and warehouses', text: 'A city filter became three outlets mapped to three warehouses, with users assigned to an outlet.' },
            { tag: 'Chosen', title: 'Back-office detours → done at the counter', text: 'Customers and manual discounts are added from the cashier screen, and receipts print in thermal format.' },
            { tag: 'Chosen', title: 'Variants in a separate flow → one add-product button', text: 'Variants are added from the same button, each with its own stock. For example, a regular and a jumbo iced orange.' },
            { tag: 'Chosen', title: 'Checking the dashboard → a daily summary', text: 'The owner and admins get the day’s sales automatically, and can switch it off in settings.' },
          ] },
        ],
      },
      {
        label: 'The product',
        title: 'What tapp.in does today',
        blocks: [
          { type: 'tiles', items: [
            { title: 'Cashier', text: 'Cart, discounts, pre-orders and thermal receipts', highlight: true },
            { title: 'Stock', text: 'FIFO by batch across warehouses: stock in, transfer, adjustment, history' },
            { title: 'Back office', text: 'Products and variants, customers, discounts, users and an audit log' },
            { title: 'Reports', text: 'Dashboard and sales report by outlet and payment method', highlight: true },
          ] },
          { type: 'figure', file: 'tappin-cashier.jpg', alt: 'tapp.in cashier screen with product tiles on the left and the order with a Rp12.000 total on the right', caption: 'The cashier: tap products, pick a customer or discount, pay or save as a pre-order.' },
          { type: 'figures', items: [
            { file: 'tappin-report.jpg', alt: 'tapp.in sales report for this month with totals, payment method breakdown and an invoice list', caption: 'Sales report, filterable by period and outlet, with a printable receipt per invoice.' },
            { file: 'tappin-mobile.jpg', tall: true, alt: 'tapp.in cashier on a phone with two products in the cart', caption: 'The same cashier on a phone, as an installable web app.' },
          ] },
          { type: 'p', html: 'Since the move it has kept growing: product variants, a manual discount and new customers from the cashier, update notifications, and a daily sales summary sent to the owner and admins.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'What changed',
        blocks: [
          { type: 'stats', items: [['Live', 'on Vercel as tapp.in, an installable web app'], ['11', 'Apps Script versions in six days before the move'], ['1', 'system for 3 outlets and 3 warehouses'], ['Same', 'server logic as the Apps Script version, running on the new stack']] },
        ],
      },
      {
        label: LESSON,
        title: 'What I took away',
        blocks: [
          { type: 'p', html: 'With an AI pair, building gets fast. Deciding what not to build, like the AI agent and online ordering, is what kept the product usable for the people at the counter.' },
        ],
      },
    ],
  },
];

