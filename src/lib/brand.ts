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
    id: 'parliament-building',
    title: 'Parliament Building',
    category: 'Institutional',
    description:
      'Owner: House of People’s Representatives\nLead Consultant: Addis Mebratu Consult + 5-7\nStatus: Under Preliminary Design',
    image: '/images/project_parliament.jpg',
  },
  {
    id: 'ethiopian-air-force-sport-center',
    title: 'Ethiopian Air Force Sport Center',
    category: 'Institutional',
    description:
      'Structural engineering services provided by Kenmos Engineering for the Ethiopian Air Force Sport Center.',
    image: '/images/project_airforce.jpg',
  },
  {
    id: 'enat-building',
    title: 'Enat Building (Office Building)',
    category: 'Commercial',
    description:
      'Architect: Million Samuel\nStructural: Kenmos Engineering\nStatus: Completed',
    image: '/images/project_enat.jpg',
  },
  {
    id: 'ellelie-hotel',
    title: 'Ellelie Hotel',
    category: 'Hospitality',
    description:
      'Lead Consultant: Tilahun Bekele\nStructural: Kenmos Engineering',
    image: '/images/project_ellelie.jpg',
  },
  {
    id: 'eliyana-mall-hotel',
    title: 'Eliyana Mall & Hotel',
    category: 'Hospitality',
    description:
      'Lead Consultant: Mesfin Architects\nStructural: Kenmos Engineering',
    image: '/images/project_eliyana.jpg',
  },
] 
export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We meet with clients and architects to define project requirements, budget, constraints, and timeline.',
  },
  {
    step: '02',
    title: 'Structural Analysis & Design',
    description:
      'We use advanced engineering software to analyze and design safe structural systems.',
  },
  {
    step: '03',
    title: 'Value Engineering',
    description:
      'We optimize materials and costs while maintaining safety and quality.',
  },
  {
    step: '04',
    title: 'Construction Supervision',
    description:
      'Our engineers monitor construction quality and ensure compliance with the design.',
  },
] as const 
export const teamMembers = [
  {
    name: 'Kenmos Tesfaye',
    role: 'Founder & General Manager',
    bio: 'Leads the structural consultancy team with over 20 years of experience in structural design and supervision.',
    image: '/images/team_kenmos.png',
  },
  {
    name: 'Senior Structural Engineer',
    role: 'Structural Engineer',
    bio: 'Experienced in structural analysis, design, and engineering solutions.',
    image: '/images/team_engineer.png',
  },
  {
    name: 'CAD Technician Team',
    role: 'CAD Technicians',
    bio: 'Specialized in technical drawings and structural documentation.',
    image: '/images/team_cad.png',
  },
] as const 
export const testimonials = [
  {
    quote:
      'Kenmos Engineering delivered excellent structural solutions with high quality and professionalism.',
    name: 'Project Client',
    role: 'Building Developer',
    rating: 5,
  },
  {
    quote:
      'Their engineering team provided reliable designs and effective project support.',
    name: 'Architect Partner',
    role: 'Design Consultant',
    rating: 5,
  },
  {
    quote:
      'Kenmos demonstrated strong technical knowledge and commitment to safety.',
    name: 'Construction Partner',
    role: 'Contractor',
    rating: 5,
  },
] as const