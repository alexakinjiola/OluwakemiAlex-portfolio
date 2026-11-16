// Every word on the site lives here, so copy edits never mean touching layout code.

export const person = {
  name: 'Oluwakemi Mary Alex',
  short: 'Oluwakemi Alex',
  role: 'Virtual Assistant',
  email: 'holuwakemi00@gmail.com',
  phone: '+234 813 489 6084',
  phoneHref: 'tel:+2348134896084',
  linkedin: 'https://www.linkedin.com/in/oluwakemi-akinjiola/',
  location: 'Surulere, Lagos',
  availability: 'Available for remote & part-time roles',
}

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export const companies = ['Jobgap', 'Baaraku', 'Errandpay', 'Adels Crystal Lake']

export const highlights = [
  { icon: 'workspace_premium', value: '5', suffix: 'yrs', label: 'Admin & remote support' },
  { icon: 'apartment', value: '4', suffix: '', label: 'Companies supported' },
  { icon: 'public', value: '2', suffix: '', label: 'Countries, UK & Nigeria' },
  { icon: 'trending_up', value: '+23', suffix: '%', label: 'Brand visibility at Errandpay' },
]

export const services = [
  {
    id: 'admin',
    icon: 'calendar_month',
    tone: 'terra',
    title: 'Inbox & calendar',
    long: 'Administrative support',
    short: 'Triaged email, tidy scheduling and Calendly calls that never double-book. You open your day already sorted.',
    text: 'The daily backbone: a managed inbox, a calendar that reflects reality, meetings scheduled, and Calendly calls booked without a single clash.',
    tags: ['Email management', 'Calendar management', 'Meeting scheduling', 'Calendly', 'Travel & reminders', 'Document organisation'],
  },
  {
    id: 'recruitment',
    icon: 'person_search',
    tone: 'olive',
    title: 'Recruitment support',
    long: 'Recruitment & hiring support',
    short: 'Sourcing and applications across Glassdoor, LinkedIn, ZipRecruiter and more, with interviews coordinated and feedback logged.',
    text: 'Sourcing and applying across the major job boards, coordinating interviews, and reporting feedback so nothing stalls in the pipeline.',
    tags: ['Glassdoor', 'LinkedIn', 'ZipRecruiter', 'SimplyHired', 'Interview coordination', 'Feedback tracking'],
  },
  {
    id: 'content',
    icon: 'campaign',
    tone: 'terra',
    title: 'Social & content',
    long: 'Social media & content',
    short: 'Content calendars planned and posted, blogs uploaded, captions written. A steady presence that keeps a brand visible.',
    text: 'Content calendars planned and kept, posts scheduled, blogs uploaded, and light SEO applied to keep a brand visible and consistent.',
    tags: ['Content calendars', 'Post scheduling', 'Blog uploads', 'SEO (SEMrush, Ahrefs)', 'Caption writing', 'Community replies'],
  },
  {
    id: 'records',
    icon: 'folder_open',
    tone: 'olive',
    title: 'Admin & records',
    long: 'Data & records',
    short: 'Documents organised, databases kept current, reports prepared. The quiet clerical backbone a team can trust.',
    text: 'Accurate data entry, databases kept current, and clean reports prepared for business, marketing, or leadership when they are needed.',
    tags: ['Data entry', 'Database upkeep', 'Report preparation', 'Google Workspace', 'Microsoft Office', 'File maintenance'],
  },
]

export const results = [
  { value: '+23', unit: '%', text: 'Growth in brand visibility from content calendars I built and maintained at Errandpay.' },
  { value: '+15', unit: '%', text: 'Lift in online presence after organising and publishing the company blog.' },
  { value: '4', unit: '', text: 'Remote and on-site teams supported across the UK and Nigeria since 2020.' },
  { value: 'Zero', unit: '', text: 'Double-bookings, because scheduling and follow-up are handled properly, every time.' },
]

export const process = [
  { icon: 'forum', title: 'A short conversation', text: "You tell me what's eating your time. I ask a few sharp questions and map out what I'd take on first." },
  { icon: 'tune', title: 'I set up the systems', text: 'Access, labels, calendars and a way of working we both trust, so handover is clean and nothing falls through.' },
  { icon: 'self_improvement', title: 'You get your time back', text: "Regular, clear updates. Minimal supervision. The quiet confidence that it's handled." },
]

export const values = [
  { icon: 'task_alt', title: 'Nothing slips.', text: "Follow-through is the whole job. If it's on my list, it gets done, and you get told when it's done." },
  { icon: 'account_tree', title: 'Systems over scramble.', text: 'I set up calm, repeatable ways of working so the same fire never has to be fought twice.' },
  { icon: 'lock', title: 'Discreet by default.', text: 'Inboxes, candidates and company data are handled with care and confidentiality, always.' },
  { icon: 'done_all', title: 'Low-maintenance to manage.', text: 'Clear updates, sensible questions, minimal supervision. You delegate once and move on.' },
]

export const aboutFacts = [
  { icon: 'location_on', label: 'Based in', value: 'Lagos, Nigeria' },
  { icon: 'laptop_mac', label: 'Focus', value: 'Remote executive support' },
  { icon: 'workspace_premium', label: 'Experience', value: '5 years' },
  { icon: 'schedule', label: 'Availability', value: 'Remote & part-time' },
]

export const experience = [
  {
    when: 'Dec 2024 to now',
    company: 'Jobgap',
    place: 'United Kingdom',
    role: 'Virtual Assistant',
    focus: 'Remote recruitment & admin support',
    current: true,
    points: [
      'Sourced and submitted job applications across Glassdoor and the Jobgap platform.',
      'Managed and organised inboxes for fast, reliable access to what mattered.',
      'Scheduled Calendly calls for prospective interviews without clashes.',
      'Tracked and reported application feedback to keep the pipeline moving.',
    ],
  },
  {
    when: 'May to Nov 2024',
    company: 'Baaraku',
    place: 'Lagos, Nigeria',
    role: 'Virtual Assistant',
    focus: 'Applications & scheduling',
    points: [
      'Applied across Glassdoor, ZipRecruiter, LinkedIn and SimplyHired.',
      'Kept inboxes organised and easy to work from day to day.',
      'Scheduled Calendly interview calls for candidates and clients.',
    ],
  },
  {
    when: 'May 2023 to Apr 2024',
    company: 'Errandpay',
    place: 'Lagos, Nigeria',
    role: 'Digital Marketing Intern',
    note: 'NYSC',
    focus: 'Content, calendars & brand visibility',
    points: [
      'Built and maintained content calendars, growing brand visibility by 23%.',
      'Uploaded and organised blog posts, lifting online presence by 15%.',
      'Managed calendars and scheduling, improving team productivity.',
      'Handled email correspondence and client inquiries for Errandmedia and Errandpay.',
    ],
  },
  {
    when: 'Feb 2020 to Aug 2022',
    company: 'Adels Crystal Lake Ltd',
    place: 'Lagos, Nigeria',
    role: 'Administrative Assistant',
    focus: 'Operations, records & reporting',
    points: [
      'Managed client inquiries, emails and clerical duties including document organisation.',
      'Scheduled meetings, maintained databases and carried out accurate data entry.',
      'Prepared reports for business-development and marketing presentations.',
    ],
  },
]

export const education = [
  { year: '2026', school: 'Ts Academy', award: 'Virtual Assistant Certification', text: 'Certification in view.', upcoming: true },
  { year: '2026', school: 'Domain Assistant', award: 'Virtual Assistant Certification', text: 'Practical skills in remote administrative support, digital tools, task management and professional workflows.' },
  { year: '2024', school: 'ALX Academy', award: 'Virtual Assistant Programme', text: 'Focused training in remote administrative support, tools and professional workflows.' },
  { year: '2016 to 2019', school: 'Obafemi Awolowo University', award: 'B.Sc.Ed, Education & Chemistry', text: 'Built the precision, structure and clear-communication habits that shape how I work today.' },
]

export const tools = [
  { icon: 'grid_view', title: 'Productivity', items: ['Google Workspace', 'Microsoft Office Suite', 'Google Calendar', 'Calendly'] },
  { icon: 'badge', title: 'Recruitment', items: ['LinkedIn', 'Glassdoor', 'ZipRecruiter', 'SimplyHired'] },
  { icon: 'insights', title: 'Marketing & SEO', items: ['SEMrush', 'Ahrefs', 'Content calendars', 'Blog / CMS uploads'] },
  { icon: 'table_chart', title: 'Records', items: ['Excel & Sheets', 'Databases', 'Data entry', 'Report decks'] },
]
