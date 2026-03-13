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
// External Links
// ---------------------------------------------------------------------------
export const EXTERNAL_LINKS = {
  registration:
    'https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/13560&app_name=Unico+FC&portalid=13560&instancekey=leagues&returnurl=https%3a%2f%2fregistration-setup.bluesombrero.com%2fregistration-admin%2f13560%2fsettings%3fpanel%3dBankingInformation',
  fanGear: 'https://unicofutbolclub.itemorder.com/shop/home/',
  calSouthODP: 'https://www.calsouth.com/programs/odp/',
  coachesPortal: 'https://system.gotsport.com/',
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
  { label: 'Programs', href: '/programs' },
  { label: 'Coaches', href: '/coaches' },
  { label: 'Camps', href: '/camps' },
  { label: 'Try Outs', href: '/tryouts' },
  { label: 'Registration', href: '/registration' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Resources',
    href: '#',
    dropdown: [
      { label: 'Parent/Player Agreement', href: '/resources/parent-player-agreement' },
      { label: 'Parent/Training Agreement', href: '/resources/parent-training-agreement' },
      { label: 'Fan Gear', href: 'https://unicofutbolclub.itemorder.com/shop/home/', external: true },
      { label: 'Cal South ODP', href: 'https://www.calsouth.com/programs/odp/', external: true },
      { label: 'Coaches Portal', href: 'https://system.gotsport.com/', external: true },
    ],
  },
  { label: 'Contact', href: '/contact' },
] as const;

// ---------------------------------------------------------------------------
// Hero & section images (used across homepage, about, programs, tryouts, camps, registration)
// ---------------------------------------------------------------------------
export const HERO_IMAGES = {
  homepage: '/images/unico-fc-santa-barbara-youth-soccer-club.jpg',
  homepageCta: '/images/unico-fc-santa-barbara-soccer-field-coaching.jpg',
  aboutTop: '/images/unico-fc-santa-barbara-players-team-huddle.jpg',
  aboutCta: '/images/unico-fc-santa-barbara-youth-goalkeeper.jpg',
  footerBg: '/images/unico-fc-santa-barbara-youth-soccer-club.jpg',
} as const;

export const SECTION_IMAGES = {
  teamAction: '/images/unico-fc-santa-barbara-youth-player-action.jpg',
  teamCelebrate: '/images/unico-fc-santa-barbara-girls-team-celebration.jpg',
  teamGroup: '/images/unico-fc-santa-barbara-boys-team-photo.jpg',
  teamHuddle: '/images/unico-fc-santa-barbara-players-team-huddle.jpg',
  teamField: '/images/unico-fc-santa-barbara-soccer-field-coaching.jpg',
  teamChamps: '/images/unico-fc-santa-barbara-state-cup-champions-team.jpg',
  campsHero: '/images/unico-fc-santa-barbara-team-beach-day.jpg',
  registrationHero: '/images/unico-fc-santa-barbara-national-cup-champions.jpg',
} as const;

/** Program card images (competitive teams, summer camps, player development) */
export const PROGRAM_IMAGES = {
  competitive: '/images/unico-fc-santa-barbara-competitive-youth-player.jpg',
  camps: '/images/unico-fc-santa-barbara-youth-soccer-training.jpg',
  development: '/images/unico-fc-santa-barbara-player-coach-handshake.jpg',
} as const;

// ---------------------------------------------------------------------------
// Gallery (shared between homepage and /gallery)
// ---------------------------------------------------------------------------
export interface GalleryImage {
  src: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/images/unico-fc-santa-barbara-girls-team-celebration.jpg', alt: 'Único FC Santa Barbara girls team celebrating with medals' },
  { src: '/images/unico-fc-santa-barbara-girls-soccer-players.jpg', alt: 'Único FC Santa Barbara girls soccer players on the pitch' },
  { src: '/images/unico-fc-santa-barbara-player-coach-handshake.jpg', alt: 'Único FC Santa Barbara player and coach handshake' },
  { src: '/images/unico-fc-santa-barbara-youth-player-action.jpg', alt: 'Único FC Santa Barbara youth player in action with ball' },
  { src: '/images/unico-fc-santa-barbara-youth-goalkeeper-match.jpg', alt: 'Único FC Santa Barbara youth goalkeeper during match' },
  { src: '/images/unico-fc-santa-barbara-boys-national-cup-team.jpg', alt: 'Único FC Santa Barbara boys team at National Cup' },
  { src: '/images/unico-fc-santa-barbara-competitive-youth-player.jpg', alt: 'Único FC Santa Barbara competitive youth soccer player' },
  { src: '/images/unico-fc-santa-barbara-sportsmanship-field.jpg', alt: 'Único FC Santa Barbara youth soccer sportsmanship' },
  { src: '/images/unico-fc-santa-barbara-youth-soccer-training.jpg', alt: 'Único FC Santa Barbara youth soccer training' },
  { src: '/images/unico-fc-santa-barbara-national-cup-champions.jpg', alt: 'Único FC Santa Barbara National Cup champions' },
  { src: '/images/unico-fc-santa-barbara-girls-soccer-state-cup.jpg', alt: 'Único FC Santa Barbara girls soccer State Cup' },
  { src: '/images/unico-fc-santa-barbara-team-beach-day.jpg', alt: 'Único FC Santa Barbara team beach day' },
];

// ---------------------------------------------------------------------------
// Coaches
// ---------------------------------------------------------------------------
export interface Coach {
  name: string;
  role: string;
  teams?: string[];
  image: string;
  email?: string;
}

export const COACHES: Coach[] = [
  {
    name: 'Luis Alcaraz Cuellar',
    role: 'Club President',
    image: '/images/coach-luis.jpg',
    email: 'lacaraz805@gmail.com',
  },
  {
    name: 'Israel Guerrero',
    role: 'Director of Coaching - Boys, Head Coach',
    teams: ['2012 Boys Team'],
    image: '/images/coach-israel.jpg',
    email: 'izyg96@gmail.com',
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
    email: 'lopezsbsc21@aol.com',
  },
  {
    name: 'Francisco Angel De La Luz',
    role: 'Head Coach',
    teams: ['2013 Boys Team', '2017 Boys Team'],
    image: '/images/coach-francisco.jpg',
    email: 'fangeldelaluz05@gmail.com',
  },
  {
    name: 'Hermes Mares Garcia',
    role: 'Head Coach',
    teams: ['2011 Boys Team - Black'],
    image: '/images/coach-hermes.jpg',
  },
  {
    name: 'Juan Rojas',
    role: 'Head Coach',
    teams: ['2016 Boys Team'],
    image: '/images/coach-juan.jpg',
    email: 'rojasjuan10@aol.com',
  },
  {
    name: 'Victor Cortes',
    role: 'Head Coach',
    teams: ['2008 Girls Team', '2012 Girls Team'],
    image: '/images/coach-victor-c.jpg',
    email: 'sacuiro16@gmail.com',
  },
  {
    name: 'Victor Pacheco',
    role: 'Head Coach',
    teams: ['2010 Boys Team'],
    image: '/images/coach-victor-p.jpg',
  },
  {
    name: 'Alex Gonzalez',
    role: 'Head Coach',
    teams: ['2014 Boys Team', '2015 Boys Team'],
    image: '/images/coach-alex.jpg',
    email: 'alexgonz9@gmail.com',
  },
  {
    name: 'Daniel Torres',
    role: 'Head Coach',
    teams: ['2011 Boys Team - Blue'],
    image: '/images/unico-logo.webp',
  },
  {
    name: 'Kurt Smith',
    role: 'Head Coach',
    teams: ['2017 Girls Team'],
    image: '/images/coach-kurt.jpg',
  },
  {
    name: 'Jamie Warm',
    role: 'Assistant Coach',
    teams: ['2017 Girls Team'],
    image: '/images/coach-jamie.jpg',
    email: 'jamiewarm9@gmail.com',
  },
  {
    name: 'Tim Weyel',
    role: 'Assistant Coach',
    teams: ['2011 Boys Team - Blue'],
    image: '/images/coach-tim.jpg',
    email: 'tweyel@gmail.com',
  },
  {
    name: 'Omar Montalvo',
    role: 'Los Pequeñitos Unico',
    image: '/images/coach-omar.jpg',
    email: 'montalvo080621@gmail.com',
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
