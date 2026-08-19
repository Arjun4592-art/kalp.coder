export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-we-work', label: 'How We Work' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const services = [
  {
    slug: 'web-development',
    icon: 'web',
    title: 'Web Development',
    short:
      'Custom websites and web applications built for speed, scalability, and real business goals.',
    body: "From marketing sites to complex web platforms, we write clean code that's easy to maintain and built to grow with you — not just good looks.",
  },
  {
    slug: 'mobile-app-development',
    icon: 'mobile',
    title: 'Mobile App Development',
    short:
      'Native and cross-platform mobile apps for iOS and Android that feel fast and reliable.',
    body: 'We handle everything from wireframes to app store submission, so your idea reaches phones without friction.',
  },
  {
    slug: 'custom-software',
    icon: 'gear',
    title: 'Custom Software Development',
    short:
      'Internal tools, dashboards, CRMs, and automation built for how you actually work.',
    body: "Off-the-shelf tools don't always fit your workflow — we build custom systems tailored to your exact process.",
  },
  {
    slug: 'ui-ux-design',
    icon: 'palette',
    title: 'UI/UX Design',
    short:
      'Interfaces designed around how real people use products, not how mockups look.',
    body: 'We design interfaces that reduce friction, guide users clearly, and reflect your brand at every screen.',
  },
  {
    slug: 'ecommerce',
    icon: 'cart',
    title: 'E-Commerce Solutions',
    short:
      'Product catalogs, secure checkout, and inventory systems built to convert.',
    body: 'Fast, easy-to-manage online stores that turn visitors into customers, from cart to fulfillment.',
  },
  {
    slug: 'api-integration',
    icon: 'api',
    title: 'API Development & Integration',
    short:
      'Robust APIs that connect your systems with the tools you already rely on.',
    body: 'Payment gateways, CRMs, analytics — we make sure your software talks to everything it needs to.',
  },
  {
    slug: 'maintenance-support',
    icon: 'shield',
    title: 'Maintenance & Support',
    short:
      'Ongoing maintenance, bug fixes, security updates, and feature upgrades.',
    body: "Software isn't done at launch — we keep your product running smoothly long after we ship it.",
  },
  {
    slug: 'mvp-development',
    icon: 'rocket',
    title: 'MVP Development for Startups',
    short:
      'Lean, functional MVPs shipped fast so you can test your idea in the market.',
    body: 'Got an idea and a deadline? We help early-stage founders validate without burning the entire budget.',
  },
] as const

export const techStack = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Python', 'Laravel'],
  Mobile: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
  'Cloud & DevOps': ['AWS', 'Google Cloud', 'Docker', 'CI / CD'],
  Integrations: ['Stripe', 'Razorpay', 'Twilio', 'Maps API'],
}

export const industries = [
  {
    title: 'Healthcare',
    desc: 'Patient portals, appointment systems, HIPAA-conscious builds.',
  },
  {
    title: 'E-Commerce & Retail',
    desc: 'Storefronts, inventory systems, custom checkout flows.',
  },
  {
    title: 'Fintech',
    desc: 'Secure payment flows, dashboards, compliance-aware architecture.',
  },
  {
    title: 'EdTech',
    desc: 'Learning platforms, course management, student portals.',
  },
  {
    title: 'Real Estate',
    desc: 'Listing platforms, CRM integrations, virtual tour tools.',
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Tracking systems, dashboards, automation tools.',
  },
  {
    title: 'Startups, Any Domain',
    desc: 'Lean MVPs built to validate fast.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discovery Call',
    body: 'We start by listening. We learn about your business, your goals, your users, and what success actually looks like for this project.',
  },
  {
    step: '02',
    title: 'Planning & Proposal',
    body: 'We map out the scope, timeline, tech stack, and cost, clearly, in writing. No hidden surprises halfway through.',
  },
  {
    step: '03',
    title: 'Design',
    body: 'Before a single line of code is written, we design the experience — wireframes, prototypes, and visual design — and get your sign-off.',
  },
  {
    step: '04',
    title: 'Development',
    body: 'Our developers build in sprints, with regular check-ins so you always know exactly where the project stands.',
  },
  {
    step: '05',
    title: 'Testing & QA',
    body: "Every feature is tested across devices and edge cases before it ever reaches your users. We catch the bugs so your customers don't have to.",
  },
  {
    step: '06',
    title: 'Launch',
    body: "We handle deployment, and we're right there with you at launch, monitoring closely to make sure everything runs smoothly.",
  },
  {
    step: '07',
    title: 'Support & Growth',
    body: "Launch isn't the finish line. We stick around for maintenance, updates, and scaling as your business grows.",
  },
]

export const whyChooseUs = [
  {
    icon: 'chat',
    title: 'Transparent Communication',
    body: 'No black-box development. You get regular updates, honest timelines, and a team that actually answers your questions.',
  },
  {
    icon: 'scale',
    title: 'Built for Scale',
    body: "We don't just build for today. Our code is written to handle growth — more users, more data, more features — without falling apart.",
  },
  {
    icon: 'clock',
    title: 'On-Time Delivery',
    body: 'We set realistic timelines and stick to them. If something changes, we tell you immediately, not after the deadline passes.',
  },
  {
    icon: 'coin',
    title: 'Affordable, Not Cheap',
    body: 'We price fairly for the value we deliver, without the inflated overhead of large agencies or the risk of underqualified freelancers.',
  },
  {
    icon: 'handshake',
    title: 'Long-Term Partnership',
    body: "Many of our clients come back for their next project, because we treat every product like it's our own.",
  },
] as const

export const team = [
  {
    name: 'Founder Name',
    role: 'Founder & Lead Developer',
    bio: 'Years of hands-on engineering experience, now focused on building software that actually solves the problem it was built for.',
  },
  {
    name: 'Team Member',
    role: 'UI/UX Lead',
    bio: "Designs interfaces that get out of the user's way — clear, fast, and unmistakably on-brand.",
  },
  {
    name: 'Team Member',
    role: 'Backend Engineer',
    bio: 'Builds the systems no one sees and everyone depends on — reliable, secure, and built to scale.',
  },
]

export const pricing = [
  {
    tier: 'MVP / Small Website',
    price: 'Starting from ₹—',
    note: 'Lean builds to validate an idea fast.',
  },
  {
    tier: 'Custom Web App / Mobile App',
    price: 'Starting from ₹—',
    note: 'Full products built for real users.',
  },
  {
    tier: 'Enterprise / Complex Platform',
    price: 'Custom quote',
    note: 'Scoped after a free discovery call.',
  },
]

export const stats = [
  { value: '40+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5', label: 'Years of Experience' },
  { value: '92%', label: 'Client Retention Rate' },
]

export const testimonials = [
  {
    quote:
      'Kalp Coder took our idea from a rough sketch to a fully working app in weeks, not months. What stood out was how clearly they communicated at every stage — we never felt lost.',
    name: 'Client Name',
    role: 'Founder',
    company: 'Company Name',
    result: 'MVP shipped in 6 weeks',
  },
  {
    quote:
      "We'd worked with agencies before who overpromised and underdelivered. Kalp Coder was different — they were upfront about timelines and actually hit them.",
    name: 'Client Name',
    role: 'Product Lead',
    company: 'Company Name',
    result: 'On-time launch, zero scope surprises',
  },
  {
    quote:
      'Our old system was a mess of spreadsheets and manual work. The custom dashboard they built saved our team hours every single week.',
    name: 'Client Name',
    role: 'Operations Manager',
    company: 'Company Name',
    result: '12+ hours saved weekly',
  },
]

export const portfolio = [
  {
    slug: 'healthcare-patient-portal',
    name: 'Patient Portal Platform',
    industry: 'Healthcare',
    challenge:
      'Clinics were booking appointments over phone calls and losing patients to no-shows.',
    solution:
      'A booking and reminders portal with role-based access for patients, doctors, and front-desk staff.',
    result: '40% fewer missed appointments',
  },
  {
    slug: 'retail-inventory-checkout',
    name: 'Unified Retail Checkout',
    industry: 'E-Commerce & Retail',
    challenge:
      'A growing retailer needed one system across their online store and in-store checkout.',
    solution:
      'A shared inventory engine with a storefront and POS built on the same product data.',
    result: 'Stock errors down to near zero',
  },
  {
    slug: 'fintech-payouts-dashboard',
    name: 'Automated Payouts Dashboard',
    industry: 'Fintech',
    challenge:
      'Finance teams were reconciling vendor payouts by hand across spreadsheets.',
    solution:
      'A compliance-aware dashboard automating payout scheduling, approvals, and audit trails.',
    result: 'Reconciliation time cut by 70%',
  },
  {
    slug: 'edtech-course-platform',
    name: 'Cohort Learning Platform',
    industry: 'EdTech',
    challenge:
      'An education startup needed to launch a paid cohort product before enrollment opened.',
    solution:
      'A lean MVP with course delivery, progress tracking, and a student community space.',
    result: 'Launched in 6 weeks, sold out first cohort',
  },
  {
    slug: 'logistics-tracking-suite',
    name: 'Fleet Tracking Suite',
    industry: 'Logistics & Supply Chain',
    challenge:
      'Dispatchers had no live visibility into delivery status across their fleet.',
    solution:
      'A real-time tracking dashboard with automated customer notifications.',
    result: 'Support tickets dropped 35%',
  },
  {
    slug: 'realestate-listing-crm',
    name: 'Listings & CRM Integration',
    industry: 'Real Estate',
    challenge:
      'Agents were juggling listings on one tool and leads on another.',
    solution: 'A unified listing site wired directly into their existing CRM.',
    result: 'Lead response time halved',
  },
]

export const faqs = [
  {
    q: 'How long does a typical project take?',
    a: "It depends on scope — a simple website might take 2–4 weeks, while a full custom platform can take 3–6 months. We'll give you a clear timeline after our discovery call.",
  },
  {
    q: 'Do you work with startups or only established businesses?',
    a: 'Both. We work with early-stage founders building their first product as well as established businesses modernizing existing systems.',
  },
  {
    q: "What's your pricing model?",
    a: "We offer both fixed-price quotes for well-defined projects and hourly or retainer arrangements for ongoing work. You'll get a clear proposal before anything begins.",
  },
  {
    q: 'Will I own the code after the project is done?',
    a: 'Yes. Once the project is paid in full, all code and intellectual property belong to you.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes — we offer maintenance packages for bug fixes, updates, and new features after your product goes live.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'React, Next.js, Node.js, Python, Flutter, PostgreSQL, AWS, and more — we pick the right tool for the job, not the trendiest one.',
  },
  {
    q: 'Do you sign an NDA before discussing our project?',
    a: "Yes. We're happy to sign an NDA before any detailed discussion — your idea and data stay confidential.",
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes, we work with clients across time zones and are comfortable with remote collaboration, async updates, and flexible call scheduling.',
  },
  {
    q: 'How are payments structured?',
    a: 'Typically in milestones — an upfront deposit, followed by payments tied to project phases such as design sign-off, development completion, and launch.',
  },
  {
    q: 'What if I need changes after the project is marked "complete"?',
    a: 'Minor fixes are covered under a short post-launch warranty period. Beyond that, changes are handled through our maintenance packages or as a scoped mini-project.',
  },
]

export const blogPosts = [
  {
    slug: 'mvp-in-six-weeks',
    title: 'How We Ship an MVP in Six Weeks (Without Cutting Corners)',
    excerpt:
      'A look at the sprint structure, scope discipline, and decisions that let early-stage founders test their idea fast.',
    tag: 'Process',
    date: '2026-06-02',
    readTime: '6 min read',
    body: "Speed on an MVP timeline doesn't come from working faster — it comes from cutting scope with intention. We start every MVP engagement by writing down the one thing the product has to prove, and we build only what's needed to prove it. Everything else goes on a list for after launch, not into the first sprint.\n\nThe sprint structure stays the same across projects: a one-day discovery and scoping session, a design pass that ships wireframes within the first week, then three to four development sprints with a working build at the end of each one. Founders see progress every week, not just at the end.\n\nWhat we cut is never quality — it's scope. Authentication starts simple, admin tooling stays manual longer than it eventually will, and anything that isn't core to the proof gets deferred. That discipline is what makes six weeks realistic instead of a promise we can't keep.",
  },
  {
    slug: 'choosing-a-tech-stack',
    title: 'How We Actually Choose a Tech Stack for a New Project',
    excerpt:
      "Not the trendiest tool — the right one. Here's the framework we use before writing a single line of code.",
    tag: 'Engineering',
    date: '2026-05-18',
    readTime: '5 min read',
    body: "Every stack decision starts with three questions: who is going to maintain this in a year, how fast does it need to move right now, and what does the team already know well. Trendy tools that nobody on the team has shipped with before are a risk we price into the timeline, not a default choice.\n\nFor most client web work, that lands on React or Next.js on the frontend and Node.js or Python on the backend — not because they're fashionable, but because they're well-documented, hire-able, and boring in the best way. Boring means fewer surprises in production.\n\nWe do reach further when the problem calls for it. A data-heavy dashboard might justify a different database choice; a mobile-first product might mean Flutter instead of two native codebases. The stack should disappear into the background of a good product, not be the headline.",
  },
  {
    slug: 'signs-you-need-custom-software',
    title: '5 Signs Your Business Has Outgrown Its Spreadsheets',
    excerpt:
      'If your team is copy-pasting between tabs every morning, this is for you.',
    tag: 'Business',
    date: '2026-04-27',
    readTime: '4 min read',
    body: "Spreadsheets are a fine tool right up until they aren't. The first sign is usually time: if someone on your team spends an hour or more a day moving data between tabs or tools by hand, that's an hour a custom workflow could give back every single day.\n\nThe second sign is errors that trace back to a manual step — a wrong formula copied down a column, a row that didn't get updated, a version that went out of sync. The third is access: when more than a few people need to touch the same sheet at once, conflicts start creeping in.\n\nThe fourth sign is reporting that takes longer than the decision it's meant to support. And the fifth is simpler than it sounds: if you've started building an internal tool just to manage the spreadsheet, you've already started building software — just without the reliability a proper build would give you.",
  },
]
