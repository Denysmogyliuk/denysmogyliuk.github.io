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
    'onboarding. I move fast, but never at the cost of long-term code quality.',
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
          'Product company building and scaling e-commerce platforms, AI-powered content ' +
          'generation systems, and online education products. Focused on frontend ' +
          'architecture, scalable user experiences, performance optimization, and improving ' +
          'product workflows.',
        highlights: [
          'Architected frontend across 3 product lines (e-commerce, AI content generation, e-learning) — established clear module boundaries and maintainable architecture.',
          'Reduced API overhead by ~40% and improved rendering performance by ~30% through TanStack Query caching and code splitting on high-load surfaces.',
          'Shipped AI generation UI end-to-end: prompt workflows, generation history, content preview, and export pipeline.',
          'Introduced Cursor AI into the development workflow, reducing delivery time by ~20% while maintaining code quality.',
          'Participated in technical interviews, supported onboarding, and shared frontend best practices within the team.',
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
          'Language-learning platform aimed at improving speaking and vocabulary skills. ' +
          'Delivered core features while keeping the architecture adaptable to evolving ' +
          'requirements.',
        highlights: [
          'Built a scalable Next.js 15 frontend with SSR and Server Components.',
          'Delivered WebRTC speaking rooms for live pronunciation and conversation practice.',
          'Implemented WebSocket-powered multi-user interactions for real-time learning sessions.',
          'Built an i18n foundation and an RBAC admin dashboard for global usage and platform management.',
        ],
      },
      {
        summary:
          'Equipment- and warehouse-management platform for an Olympic Games commission, ' +
          'covering rental equipment logistics from storage through to invoicing.',
        highlights: [
          'Built monitoring for rental equipment — storage location, condition, and additional services across multiple warehouse addresses.',
          'Implemented the billing system for equipment rentals and add-on services.',
          'Ran demos for the client and led functionality discussions to shape and refine the scope.',
        ],
      },
      {
        summary:
          'Language-learning platform for travelers, blending lessons with trip planning ' +
          'around real destinations.',
        highlights: [
          'Built location discovery and selection so learners could plan their studies by destination.',
          'Implemented booking and lesson scheduling with teachers.',
          'Added hotel selection and in-café food ordering as part of the travel experience.',
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
          'Large-scale sportswear e-commerce platform with 10M+ daily active users, focused ' +
          'on product discovery, customer-facing flows, analytics, and production stability ' +
          'under high traffic.',
        highlights: [
          'Built SPA architecture from scratch, covering routing, reusable UI patterns, forms, and product data flows.',
          'Integrated Google Analytics to improve funnel visibility and track conversion, feature usage, and drop-off points.',
          'Used Hotjar insights to identify user friction across product browsing and checkout flows.',
          'Set up Sentry error monitoring and frontend logging, helping the team detect, prioritize, and debug production issues faster.',
          'Improved responsiveness and perceived performance in key e-commerce flows by ~30%.',
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
          'Agency environment delivering multiple client projects, including a sports manager ' +
          'simulator and data-heavy web applications.',
        highlights: [
          'Delivered multiple SPAs from zero to production, owning architecture, development, release, and iteration.',
          'Designed a reusable frontend structure that other developers could extend without deep onboarding.',
          'Improved complex data-driven UX flows for client products, reducing friction in business-critical interfaces.',
          'Collaborated with designers to keep UX decisions consistent across products and reusable components.',
        ],
      },
    ],
  },
]

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  { title: 'Frontend Architecture', items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)'] },
  { title: 'Styling & UI', items: ['Tailwind CSS', 'Bootstrap', 'Material UI'] },
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
    description: 'Major Ukrainian sports retailer — e-commerce platform with extensive product catalog, filtering, and seamless checkout.',
    image: '/projects/megasport.webp',
  },
  {
    name: 'Aivanta',
    url: 'https://aivanta.uk',
    description: 'AI-powered technology company website with modern design and interactive product presentations.',
    image: '/projects/aivanta.webp',
  },
  {
    name: 'OlaLingo',
    url: 'https://www.olalingo.com/en',
    description: 'Online language school with live classes from native teachers, flexible scheduling, and interactive e-learning platform.',
    image: '/projects/olalingo.webp',
  },
  {
    name: 'Peak Gear',
    url: 'https://peak-gear.com',
    description: 'Sports & outdoor gear e-commerce with advanced filtering, product pages, and responsive design.',
    image: '/projects/peak-gear.webp',
  },
  {
    name: 'ArtGenix',
    url: 'https://art-genix.com',
    description: 'Creative AI-driven art platform with generative tools and interactive gallery experience.',
    image: '/projects/artgenix.webp',
  },
  {
    name: 'Thrive Store',
    url: 'https://thrivestore.co.uk',
    description: 'UK-based e-commerce store with modern shopping experience, product showcases, and integrated payment solutions.',
    image: '/projects/thrive-store.webp',
  },
  {
    name: 'Learn IT Hub',
    url: 'https://learnithub.uk',
    description: 'UK-based educational technology platform for IT courses with interactive learning experience.',
    image: '/projects/learn-it-hub.webp',
  },
  {
    name: 'Boxelio',
    url: 'https://boxelio.com',
    description: 'Subscription box service platform with interactive product discovery and ordering system.',
    image: '/projects/boxelio.webp',
  },
  {
    name: 'Readiverses',
    url: 'https://readiverses.com',
    description: 'Digital reading platform focused on delivering engaging content experiences with clean, accessible UI.',
    image: '/projects/readiverses.webp',
  },
  {
    name: 'Softora',
    url: 'https://softora.eu',
    description: 'European software solutions company website with clean design and service presentations.',
    image: '/projects/softora.webp',
  },
  {
    name: 'Echo Gold',
    url: 'https://echo-gold.com',
    description: 'Premium gold & jewelry e-commerce with elegant design, product showcases, and secure transactions.',
    image: '/projects/echo-gold.webp',
  },
  {
    name: 'Trek Supplies',
    url: 'https://treksupplies.com',
    description: 'Outdoor & adventure e-commerce store with product catalog, filtering, and smooth checkout flow.',
    image: '/projects/trek-supplies.webp',
  },
  {
    name: 'Inspire',
    url: 'https://ai-inspire.com',
    description: 'AI-powered inspiration platform helping users discover creative ideas and content.',
    image: '/projects/inspire.webp',
  },
  {
    name: 'Jubiva',
    url: 'https://jubiva.com',
    description: 'E-commerce platform with modern product showcases, dynamic catalog, and seamless UX.',
    image: '/projects/jubiva.webp',
  },
  {
    name: 'The Cardix',
    url: 'https://thecardix.com',
    description: 'Digital card platform with customizable templates and modern user-friendly interface.',
    image: '/projects/the-cardix.webp',
  },
  {
    name: 'Sportive Stores',
    url: 'https://sportivestores.com',
    description: 'Multi-brand sports retail platform with dynamic catalog, advanced search, and responsive design.',
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
  { text: 'Source on GitHub', href: 'https://github.com/DenysMogyliuk' },
  { text: `© ${new Date().getFullYear()}, Denys Mogyliuk` },
]

export const allSkills = skills.flatMap((group) => group.items)
