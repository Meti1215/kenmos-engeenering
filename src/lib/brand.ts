export const brandMedia = {
  logo: '/images/logo.svg',
  hero: {
    image: '/images/hero_building.png',
  },
  about: {
    collage1: '/images/about_collage_1.png',
    collage2: '/images/about_collage_2.png',
  },
  projects: {
    zemenBank: '/images/project_zemen.png',
    stadium: '/images/project_stadium.png',
    memorial: '/images/project_memorial.png',
    hilton: '/images/project_hilton.png',
  },
  industries: {
    commercial: '/images/ind_commercial.png',
    industrial: '/images/ind_industrial.png',
    residential: '/images/ind_residential.png',
    institutional: '/images/ind_institutional.png',
    hospitality: '/images/ind_hospitality.png',
    infrastructure: '/images/ind_infrastructure.png',
  }
} as const

export const brand = {
  name: 'Kenmos Structural Engineering',
  shortName: 'Kenmos Engineering',
  founderName: 'Kenmos Tesfaye',
  founderTitle: 'Founder & General Manager',
  tagline: 'Structural Excellence. Lasting Impact.',
  signatureLine: 'Delivering innovative, safe, and cost-optimized structural engineering solutions.',
  logoPath: brandMedia.logo,
  phone: '+251 911 526 566',
  phoneHref: 'tel:+251911526566',
  location: 'Enat Building, 7th Floor, Piazza, Addis Ababa, Ethiopia',
  hours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 12:00 PM',
  email: 'contact@kenmosengineering.com',
  heroRotatingTexts: [
    'Ethiopian structural engineering firm established in 2009',
    'Specializes in structural design and complex steel structures',
    'Over 800 successful projects handled with cost optimization',
    'Ensuring structural safety, precision, and building durability',
  ],
  heroStats: [
    { value: '15+', label: 'Years of Experience', count: 15 },
    { value: '800+', label: 'Projects Completed', count: 800 },
    { value: '20+', label: 'Expert Engineers', count: 20 },
    { value: '1B+', label: 'Birr Project Value Handled', count: 1 },
  ],
} as const

export const aboutContent = {
  subtitle: 'ABOUT KENMOS',
  title: 'Building the Future with Precision & Integrity',
  paragraphs: [
    'Kenmos Structural Engineering was established in January 2009, with the aim to provide the best design and affiliated services.',
    'Cost and Value optimization has been one of the pillars of our design philosophy.',
    'Our founder and lead engineer brings over 20 years of experience in the design and supervision of structural works, working on more than 800 projects ranging from 800,000.00 Birr to well over a billion birr.',
  ]
}

export const services = [
  {
    id: 'structural-design',
    title: 'Structural Design',
    description: 'Innovative, safe and cost-effective structural designs for all types of buildings.',
    icon: 'Building2',
  },
  {
    id: 'supervision',
    title: 'Construction Supervision',
    description: 'Ensuring quality, safety and compliance at every stage of construction.',
    icon: 'ShieldCheck',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'End-to-end project management delivering on time and within budget.',
    icon: 'Briefcase',
  },
  {
    id: 'assessment-retrofitting',
    title: 'Structural Assessment & Retrofitting',
    description: 'Evaluating and strengthening existing structures for safety and durability.',
    icon: 'Activity',
  },
  {
    id: 'tender-boq',
    title: 'Tender & BOQ Preparation',
    description: 'Accurate estimation and documentation for successful project delivery.',
    icon: 'FileText',
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    description: 'Expert advice and technical solutions tailored to your project needs.',
    icon: 'Users',
  },
] as const

export const industries = [
  {
    id: 'commercial',
    title: 'Commercial Developments',
    description: 'Structural designs for high-rise towers, malls, offices, and mixed-use commercial properties.',
    image: brandMedia.industries.commercial,
  },
  {
    id: 'industrial',
    title: 'Industrial & Steel Structures',
    description: 'Heavy industrial structures, warehouses, factory sheds, and specialized steel construction designs.',
    image: brandMedia.industries.industrial,
  },
  {
    id: 'residential',
    title: 'Residential Complexes',
    description: 'Multi-family residential apartments, luxury villas, and real estate housing developments.',
    image: brandMedia.industries.residential,
  },
  {
    id: 'institutional',
    title: 'Institutional Projects',
    description: 'Structural design for government buildings, universities, stadiums, and public spaces.',
    image: brandMedia.industries.institutional,
  },
  {
    id: 'hospitality',
    title: 'Hospitality Projects',
    description: 'Luxury hotel designs, resort structures, and recreational facilities combining luxury with safety.',
    image: brandMedia.industries.hospitality,
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Specialized Works',
    description: 'Bridges, retaining structures, sports complexes, and specialized steel/concrete structures.',
    image: brandMedia.industries.infrastructure,
  },
] as const

export const projects = [
  {
    id: 'zemen-bank',
    title: 'Zemen Bank Head Office',
    category: 'Commercial',
    description: 'Provided specialized structural review and design coordination assistance for the landmark high-rise headquarters in Addis Ababa.',
    image: brandMedia.projects.zemenBank,
  },
  {
    id: 'stadiums',
    title: 'University Stadiums (Jimma & Haramaya)',
    category: 'Institutional',
    description: 'Full structural analysis and detailing for large-capacity concrete grandstands and structural steel roof arches.',
    image: brandMedia.projects.stadium,
  },
  {
    id: 'et302-memorial',
    title: 'ET-302 Memorial Project',
    category: 'Specialized',
    description: 'Structural engineering design for the commemorative memorial monument in Ethiopia, prioritizing geometric precision.',
    image: brandMedia.projects.memorial,
  },
  {
    id: 'awasa-hilton',
    title: 'Awasa Hilton Hotel',
    category: 'Hospitality',
    description: 'Seismic and structural design for the premium lakeside resort and hospitality suites in Awasa, Ethiopia.',
    image: brandMedia.projects.hilton,
  },
] as const

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description: 'We meet with clients and architects to define the structural design requirements, budget, constraints, and project timeline.',
  },
  {
    step: '02',
    title: 'Structural Analysis & Design',
    description: 'Using advanced engineering software, we model structures and run analysis for loads, wind, and seismic activities.',
  },
  {
    step: '03',
    title: 'Value Engineering & BOQ',
    description: 'We optimize the concrete grades and steel detailing to minimize material costs while maintaining maximum safety margins.',
  },
  {
    step: '04',
    title: 'Construction Supervision',
    description: 'Our engineers make regular site inspections to verify concrete casting, reinforcing bar layouts, and steel welds.',
  },
] as const

export const testimonials = [
  {
    quote: 'Kenmos Engineering proved to be an invaluable partner on our high-rise project. Their value engineering saved us over 12% in steel material costs without compromising design integrity.',
    name: 'Yonas Abebe',
    role: 'Project Director, Mixed-Use Real Estate',
    rating: 5,
  },
  {
    quote: 'Their detail drawings for our steel structural trusses were exceptionally clear. This enabled the fabrication shop to execute welds with zero defects and speed up the erection on site.',
    name: 'Tamrat Hailu',
    role: 'Lead Project Contractor, Steel Warehouses',
    rating: 5,
  },
  {
    quote: 'For over a decade, Kenmos has provided us with consistent, safe structural designs. They respond quickly to site variations and are thorough in structural safety checks.',
    name: 'Dr. Semeneh Kidane',
    role: 'Consulting Architect, Institutional Buildings',
    rating: 5,
  },
] as const

export const teamMembers = [
  {
    name: 'Kenmos Tesfaye',
    role: 'Founder & General Manager',
    bio: 'Leads the structural consultancy team with over 20 years of experience, specialized in structural design and steel structures in Ethiopia.',
    image: '/images/team_kenmos.png',
  },
  {
    name: 'Dawit Mekonnen',
    role: 'Senior Structural Engineer',
    bio: '12+ years of experience in finite element analysis, concrete structures, and dynamic wind/seismic analysis for high-rise buildings.',
    image: '/images/team_dawit.png',
  },
  {
    name: 'Fikru Wolde',
    role: 'Lead Steel Detailer & Designer',
    bio: 'Specialist in steel connection detailing, industrial trusses, and structural drafting with extreme precision and standards.',
    image: '/images/team_fikru.png',
  },
] as const
