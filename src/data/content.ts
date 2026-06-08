export const profile = {
  name: 'Denys Mogyliuk',
  role: 'Front-end engineer',
  url: 'https://denysmogyliuk.github.io',
  greeting: 'Hi, my name is',
  tagline: 'I’m a frontend engineer in love with the Web, electronics, bicycles, and music.',
  intro:
    'I build and ship frontend for products used by 10M+ people every day. Across ' +
    'ecommerce, AI tooling, and education platforms, I’ve architected React systems ' +
    'from scratch — modular enough that any developer can jump in without lengthy ' +
    'onboarding. Lately I\'ve been writing backend too: NestJS, PostgreSQL, S3 — ' +
    'enough to own a feature end to end. I move fast, but never at the cost of long-term code quality.',
} as const

export type ExperienceProject = {
  summary: string
  highlights: string[]
}

export type Job = {
  company: string
  position: string
  start: string
  end: string
  projects: ExperienceProject[]
}

export const experience: Job[] = [
  {
    company: 'Niko Technologies',
    position: '',
    start: 'Nov 2025',
    end: 'Present',
    projects: [
      {
        summary:
          'Three product lines at once: e-commerce, an AI content generator, and an e-learning platform. ' +
          'Mostly frontend architecture, but also picked up NestJS on the backend side.',
        highlights: [
          'Set up the frontend structure for all three products from scratch — clear boundaries, shared utilities, zero copy-paste between teams.',
          'Cut API overhead by ~40% and sped up rendering by ~30% with TanStack Query and route-level code splitting.',
          'Built the AI generation UI start to finish: prompt editor, generation history, preview, and export.',
          'Brought Cursor AI into the team workflow — shaved ~20% off delivery time without touching code review standards.',
          'Wrote NestJS services for the backend: REST endpoints, business logic, and data contracts shared with the frontend.',
          'Did a few technical interviews and helped onboard new devs.',
        ],
      },
    ],
  },
  {
    company: 'Corpsoft',
    position: '',
    start: 'Apr 2024',
    end: 'Nov 2025',
    projects: [
      {
        summary:
          'Language app focused on speaking practice. The tricky part was real-time: live rooms, multi-user sessions, and keeping it all stable.',
        highlights: [
          'Built the frontend on Next.js 15 with SSR and Server Components.',
          'Shipped WebRTC speaking rooms — users practice pronunciation with live feedback.',
          'Added WebSocket-based multi-user sessions for group learning.',
          'Set up i18n and built an admin dashboard with role-based access.',
        ],
      },
      {
        summary:
          'Equipment management platform for an Olympic Games commission — tracking rental gear from warehouse to invoice.',
        highlights: [
          'Built a dashboard to monitor equipment: where it is, what condition it\'s in, and which add-ons are attached.',
          'Implemented the billing module for rentals and additional services.',
          'Ran client demos and led feature discussions to keep the scope on track.',
        ],
      },
      {
        summary:
          'Language-learning platform for travelers — lessons tied to real destinations and trip planning.',
        highlights: [
          'Built location search and selection so learners could pick where they want to study.',
          'Implemented teacher booking and lesson scheduling.',
          'Added hotel search and café ordering as part of the travel flow.',
        ],
      },
    ],
  },
  {
    company: 'Memcrab',
    position: '',
    start: 'Feb 2022',
    end: 'Apr 2024',
    projects: [
      {
        summary:
          'Sportswear e-commerce with 10M+ daily active users. Big catalog, high traffic, and a lot of moving parts on the frontend.',
        highlights: [
          'Built the SPA from the ground up — routing, UI components, forms, product flows.',
          'Wired up Google Analytics to track funnels, conversions, and where users drop off.',
          'Used Hotjar to spot friction in browsing and checkout, then fixed what mattered.',
          'Set up Sentry and frontend logging — made production debugging much less painful.',
          'Tightened up key e-commerce flows and cut perceived load time by ~30%.',
        ],
      },
    ],
  },
  {
    company: 'Progressio agency',
    position: '',
    start: 'Jul 2019',
    end: 'Feb 2022',
    projects: [
      {
        summary:
          'Agency work — different clients, different domains. Shipped a sports manager simulator and a handful of data-heavy apps.',
        highlights: [
          'Took projects from blank repo to production: architecture, dev, release, follow-up.',
          'Built frontend structures other devs could pick up and extend without a long onboarding.',
          'Reworked data-heavy UX flows where clients were losing users in critical steps.',
          'Worked closely with designers to keep decisions consistent across products.',
        ],
      },
    ],
  },
]

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  { title: 'Frontend Architecture', items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)'] },
  { title: 'Backend', items: ['NestJS', 'PostgreSQL', 'AWS S3', 'REST API'] },
  { title: 'Styling & UI', items: ['Tailwind CSS', 'Bootstrap', 'Material UI'] },
  { title: 'State & Data Layer', items: ['TanStack Query', 'Zustand', 'Redux'] },
  { title: 'Performance & Scalability', items: ['SSR', 'Code Splitting', 'Rendering Optimization'] },
  { title: 'Real-time Systems', items: ['WebSocket', 'WebRTC'] },
  { title: 'Testing', items: ['Jest', 'React Testing Library', 'Playwright'] },
  { title: 'DevOps & Tooling', items: ['Docker', 'CI/CD', 'Vite', 'Webpack'] },
  { title: 'AI Engineering', items: ['Cursor', 'Claude Code', 'Agent Skills & Rules', 'MCP', 'Team AI Workflows'] },
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
  { label: 'LinkedIn', value: 'denis-moghiliuc', href: 'https://www.linkedin.com/in/denis-moghiliuc' },
]

export type Project = {
  name: string
  url: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    name: 'Megasport',
    url: 'https://megasport.ua',
    description: 'Ukraine\'s biggest sports retailer. Built the catalog, filtering, and checkout flows — a lot of moving parts under high traffic.',
    image: '/projects/megasport.webp',
  },
  {
    name: 'Aivanta',
    url: 'https://aivanta.uk',
    description: 'Tech company site with interactive product demos and a heavy focus on motion and visual polish.',
    image: '/projects/aivanta.webp',
  },
  {
    name: 'OlaLingo',
    url: 'https://www.olalingo.com/en',
    description: 'Online language school with live classes from native speakers. Built the scheduling flow and the e-learning platform.',
    image: '/projects/olalingo.webp',
  },
  {
    name: 'Peak Gear',
    url: 'https://peak-gear.com',
    description: 'Outdoor gear store. Clean catalog, solid filtering, and a checkout that doesn\'t get in the way.',
    image: '/projects/peak-gear.webp',
  },
  {
    name: 'ArtGenix',
    url: 'https://art-genix.com',
    description: 'AI art platform — generative tools, image gallery, and a UI that had to match the creative vibe of the product.',
    image: '/projects/artgenix.webp',
  },
  {
    name: 'Thrive Store',
    url: 'https://thrivestore.co.uk',
    description: 'UK health & wellness store. Product pages, cart, and payments — kept the UX clean and conversion-focused.',
    image: '/projects/thrive-store.webp',
  },
  {
    name: 'Learn IT Hub',
    url: 'https://learnithub.uk',
    description: 'IT course platform from the UK. Course catalog, progress tracking, and an interface that doesn\'t feel like a textbook.',
    image: '/projects/learn-it-hub.webp',
  },
  {
    name: 'Boxelio',
    url: 'https://boxelio.com',
    description: 'Subscription box service. The fun part was the product discovery flow — had to feel engaging, not just functional.',
    image: '/projects/boxelio.webp',
  },
  {
    name: 'Readiverses',
    url: 'https://readiverses.com',
    description: 'Reading platform with a focus on keeping things readable and out of the way. Accessibility was a real priority here.',
    image: '/projects/readiverses.webp',
  },
  {
    name: 'Softora',
    url: 'https://softora.eu',
    description: 'Software company site for the EU market. Straightforward design, clear service pages, nothing unnecessary.',
    image: '/projects/softora.webp',
  },
  {
    name: 'Echo Gold',
    url: 'https://echo-gold.com',
    description: 'Gold & jewelry store where the design had to carry the premium feel. Product presentation was the main challenge.',
    image: '/projects/echo-gold.webp',
  },
  {
    name: 'Trek Supplies',
    url: 'https://treksupplies.com',
    description: 'Adventure gear store built for people who actually go outside. Fast filtering, no checkout friction.',
    image: '/projects/trek-supplies.webp',
  },
  {
    name: 'Inspire',
    url: 'https://ai-inspire.com',
    description: 'AI inspiration tool — helps creatives get unstuck. Built around fast, low-friction idea discovery.',
    image: '/projects/inspire.webp',
  },
  {
    name: 'Jubiva',
    url: 'https://jubiva.com',
    description: 'General e-commerce store. Dynamic catalog with a smooth browsing experience and a clean cart flow.',
    image: '/projects/jubiva.webp',
  },
  {
    name: 'The Cardix',
    url: 'https://thecardix.com',
    description: 'Digital card builder with customizable templates. The editor had to be simple enough for non-technical users.',
    image: '/projects/the-cardix.webp',
  },
  {
    name: 'Sportive Stores',
    url: 'https://sportivestores.com',
    description: 'Multi-brand sports retail — lots of products, lots of filters, lots of edge cases. Kept the catalog fast and searchable.',
    image: '/projects/sportive-stores.webp',
  },
]

export const resumeUrl = '/Denys-Mogyliuk-CV.pdf'

export const photo = {
  webp: '/denys.webp',
  alt: 'Denys Mogyliuk',
  width: 700,
  height: 700,
}

export type Credit = { text: string; href?: string }

export const credits: Credit[] = [
  { text: 'Handcrafted by me' },
  { text: `© ${new Date().getFullYear()}, Denys Mogyliuk` },
]

export const allSkills = skills.flatMap((group) => group.items)
