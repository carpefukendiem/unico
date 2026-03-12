// =============================================================================
// Único Futbol Club - Site Constants
// =============================================================================

// ---------------------------------------------------------------------------
// Brand Colors
// ---------------------------------------------------------------------------
export const COLORS = {
  primary: '#1B3A8C',
  darkNavy: '#0F2461',
  lightBlue: '#3564C4',
  accent: '#3564C4',
  white: '#FFFFFF',
  lightGray: '#F8F9FC',
  darkText: '#1A1A2E',
} as const;

// ---------------------------------------------------------------------------
// Club Contact Information
// ---------------------------------------------------------------------------
export const CONTACT = {
  email: 'unicofutbolclub@gmail.com',
  phone: '805-469-8034',
  phoneHref: 'tel:+18054698034',
  location: 'Santa Barbara, CA',
  instagram: {
    handle: '@unicofutbolclub',
    url: 'https://www.instagram.com/unicofutbolclub',
  },
} as const;

// ---------------------------------------------------------------------------
// Site Metadata
// ---------------------------------------------------------------------------
export const SITE = {
  name: 'Unico Futbol Club',
  nameAccented: 'Único Futbol Club',
  tagline: 'Developing Elite Youth Soccer Players in Santa Barbara',
  description:
    'Único Futbol Club is a competitive youth soccer club in Santa Barbara, CA dedicated to developing elite players through expert coaching, disciplined training, and a culture of excellence.',
  url: 'https://www.unicofutbolclub.com',
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export interface NavDropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: NavDropdownItem[];
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Fan Gear',
    href: 'https://unicofutbolclub.itemorder.com/shop/home/',
    external: true,
  },
  {
    label: 'Registration',
    href: 'https://system.gotsport.com/programs/593K68654?reg_role=player',
    external: true,
  },
  { label: 'Camps', href: '/camps' },
  { label: 'Try Outs', href: '/tryouts' },
  {
    label: 'Cal South ODP',
    href: 'https://www.calsouth.com/programs/odp/',
    external: true,
  },
  {
    label: 'Resources',
    href: '#',
    dropdown: [
      {
        label: 'Coaches Portal',
        href: 'https://system.gotsport.com/',
        external: true,
      },
      {
        label: 'Parent/Player Agreement',
        href: '/resources/parent-player-agreement',
      },
      {
        label: 'Parent/Training Only Player Agreement',
        href: '/resources/parent-training-agreement',
      },
    ],
  },
] as const;

// ---------------------------------------------------------------------------
// Coaches
// ---------------------------------------------------------------------------
export interface Coach {
  name: string;
  role: string;
  teams?: string[];
  image: string;
}

export const COACHES: Coach[] = [
  {
    name: 'Luis Alcaraz Cuellar',
    role: 'Club President',
    image: '/images/coach-luis.jpg',
  },
  {
    name: 'Israel Guerrero',
    role: 'Director of Coaching - Boys',
    teams: ['2012 Boys Team'],
    image: '/images/coach-israel.jpg',
  },
  {
    name: 'Jose Aguilar',
    role: 'Director of Coaching - Girls, Head Coach',
    teams: ['2015 Girls Team', '2016 Girls Team'],
    image: '/images/coach-jose.jpg',
  },
  {
    name: 'Lalo Lopez',
    role: 'Head Coach',
    teams: ['2013 Girls Team'],
    image: '/images/coach-lalo.jpg',
  },
  {
    name: 'Francisco Angel De La Luz',
    role: 'Head Coach',
    teams: ['2013 Boys Team', '2017 Boys Team'],
    image: '/images/coach-francisco.jpg',
  },
  {
    name: 'Hermes Mares Garcia',
    role: 'Head Coach',
    teams: ['2011 Boys Team - Black'],
    image: '/images/coach-hermes.jpg',
  },
  {
    name: 'Victor Cortes',
    role: 'Head Coach',
    teams: ['2010 Boys Team'],
    image: '/images/coach-victor-c.jpg',
  },
  {
    name: 'Victor Pacheco',
    role: 'Head Coach',
    teams: ['2014 Boys Team', '2015 Boys Team'],
    image: '/images/coach-victor-p.jpg',
  },
  {
    name: 'Alex Gonzalez',
    role: 'Head Coach',
    teams: ['2011 Boys Team - White'],
    image: '/images/coach-alex.jpg',
  },
  {
    name: 'Eddie Buenrostro',
    role: 'Head Coach',
    teams: ['2008 Girls Team', '2012 Girls Team'],
    image: '/images/coach-eddie.jpg',
  },
];

// ---------------------------------------------------------------------------
// Affiliate / Sponsor Logos
// ---------------------------------------------------------------------------
export interface Affiliate {
  name: string;
  logo: string;
  url: string;
}

export const AFFILIATES: Affiliate[] = [
  {
    name: 'Coast Soccer League',
    logo: '/images/logo-csl.png',
    url: 'https://www.coastsoccer.com',
  },
  {
    name: 'Cal South',
    logo: '/images/logo-calsouth.jpg',
    url: 'https://www.calsouth.com',
  },
  {
    name: 'US Youth Soccer',
    logo: '/images/logo-usyouth.png',
    url: 'https://www.usyouthsoccer.org',
  },
  {
    name: 'US Soccer',
    logo: '/images/logo-ussoccer.png',
    url: 'https://www.ussoccer.com',
  },
];
