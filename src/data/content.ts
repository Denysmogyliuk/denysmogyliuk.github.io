// Single source of truth for all portfolio content (from CV).
// Keep components dumb; edit content here.

export const profile = {
  name: 'Denys Mogyliuk',
  role: 'Front-end developer',
  url: 'https://denysmogyliuk.github.io',
  greeting: 'Hi, my name is',
  tagline: 'I’m a frontend developer in love with the Web — its performance, architecture, and real-time edges.',
  intro:
    'Built and shipped frontend for products with 10M+ daily active users. ' +
    'Architected React systems from scratch across ecommerce, AI tooling, and ' +
    'education platforms — modular enough that any developer can quickly contribute ' +
    'without extensive onboarding. Strong focus on fast delivery while maintaining ' +
    'long-term code quality and avoiding tech debt.',
} as const

export type Job = {
  company: string
  position: string
  start: string
  end: string
  description: string
  impact: string[]
}

export const experience: Job[] = [
  {
    company: 'Niko Technologies',
    position: 'Front-end developer',
    start: 'Nov 2025',
    end: 'Present',
    description:
      'Product company building and scaling e-commerce platforms, AI-powered content ' +
      'generation systems, and online education products. Focused on frontend ' +
      'architecture, scalable user experiences, performance optimization, and improving ' +
      'product workflows.',
    impact: [
      'Architected frontend across 3 product lines (e-commerce, AI content generation, e-learning) — established clear module boundaries and maintainable architecture.',
      'Reduced API overhead by ~40% and improved rendering performance by ~30% through TanStack Query caching and code splitting on high-load surfaces.',
      'Shipped AI generation UI end-to-end: prompt workflows, generation history, content preview, and export pipeline.',
      'Introduced Cursor AI into the development workflow, reducing delivery time by ~20% while maintaining code quality.',
      'Participated in technical interviews, supported onboarding, and shared frontend best practices within the team.',
    ],
  },
  {
    company: 'Corpsoft',
    position: 'Front-end developer',
    start: 'Apr 2024',
    end: 'Nov 2025',
    description:
      'Language-learning platform aimed at improving speaking and vocabulary skills. ' +
      'Delivered core features while keeping the architecture adaptable to evolving ' +
      'requirements.',
    impact: [
      'Built a scalable Next.js 15 frontend with SSR and Server Components.',
      'Delivered WebRTC speaking rooms for live pronunciation and conversation practice.',
      'Implemented WebSocket-powered multi-user interactions for real-time learning sessions.',
      'Built an i18n foundation and an RBAC admin dashboard for global usage and platform management.',
    ],
  },
  {
    company: 'Memcrab',
    position: 'Front-end developer',
    start: 'Feb 2022',
    end: 'Apr 2024',
    description:
      'Large-scale sportswear e-commerce platform with 10M+ daily active users, focused ' +
      'on product discovery, customer-facing flows, analytics, and production stability ' +
      'under high traffic.',
    impact: [
      'Built SPA architecture from scratch, covering routing, reusable UI patterns, forms, and product data flows.',
      'Integrated Google Analytics to improve funnel visibility and track conversion, feature usage, and drop-off points.',
      'Used Hotjar insights to identify user friction across product browsing and checkout flows.',
      'Set up Sentry error monitoring and frontend logging, helping the team detect, prioritize, and debug production issues faster.',
      'Improved responsiveness and perceived performance in key e-commerce flows by ~30%.',
    ],
  },
  {
    company: 'Progressio agency',
    position: 'Front-end developer',
    start: 'Jul 2019',
    end: 'Feb 2022',
    description:
      'Agency environment delivering multiple client projects, including a sports manager ' +
      'simulator and data-heavy web applications.',
    impact: [
      'Delivered multiple SPAs from zero to production, owning architecture, development, release, and iteration.',
      'Designed a reusable frontend structure that other developers could extend without deep onboarding.',
      'Improved complex data-driven UX flows for client products, reducing friction in business-critical interfaces.',
      'Collaborated with designers to keep UX decisions consistent across products and reusable components.',
    ],
  },
]

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  { title: 'Frontend Architecture', items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)'] },
  { title: 'State & Data Layer', items: ['TanStack Query', 'Zustand', 'Redux'] },
  { title: 'Performance & Scalability', items: ['SSR', 'Code Splitting', 'Rendering Optimization'] },
  { title: 'Real-time Systems', items: ['WebSocket', 'WebRTC'] },
  { title: 'Testing', items: ['Jest', 'React Testing Library', 'Playwright'] },
  { title: 'DevOps & Tooling', items: ['Docker', 'CI/CD', 'Vite', 'Webpack'] },
]

export const languages = ['English — Upper-Intermediate (B2)']

export const education = [
  { year: '2013', name: 'Odessa National Polytechnic University' },
  { year: '', name: 'HTML Academy' },
]

export type ContactLink = {
  label: string
  value: string
  href: string
}

export const contacts: ContactLink[] = [
  { label: 'Email', value: 'denysmogyliuk@gmail.com', href: 'mailto:denysmogyliuk@gmail.com' },
  { label: 'Telegram', value: '@DenysMogyliuk', href: 'https://t.me/DenysMogyliuk' },
  { label: 'GitHub', value: 'DenysMogyliuk', href: 'https://github.com/DenysMogyliuk' },
]

export type Credit = { text: string; href?: string }

export const credits: Credit[] = [
  { text: 'Built with React & Vite' },
  { text: 'Source on GitHub', href: 'https://github.com/DenysMogyliuk' },
  { text: `© ${new Date().getFullYear()} Denys Mogyliuk` },
]

// Flat skill list for JSON-LD knowsAbout
export const allSkills = skills.flatMap((g) => g.items)
