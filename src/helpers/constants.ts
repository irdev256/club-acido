export const HomeSection = {
  HERO: 'inicio',
  CONTENT: 'mentoria',
  SOBRE_MI: 'sobre-mi',
  TESTIMONIALS: 'testimonios',
};

export const PagesInfo = {
  HOME: { path: '/', helmet: 'Home | Club Ácido' },
  CONTACTO: { path: '/contacto', helmet: 'Contacto | Club Ácido' },
};

export const NavItems = [
  { label: 'Mentoría', href: HomeSection.CONTENT, type: 'anchor' },
  { label: 'Sobre mí', href: HomeSection.SOBRE_MI, type: 'anchor' },
  { label: 'Testimonios', href: HomeSection.TESTIMONIALS, type: 'anchor' },
  { label: 'Contacto', href: PagesInfo.CONTACTO, type: 'route' },
];

// --------------------------------------------------------------

// CLIENT
export const CLIENT_WHATSAPP_LINK = '';
export const CLIENT_INSTAGRAM_LINK = '';
export const CLIENT_TIKTOK_LINK = '';
export const CLIENT_FACEBOOK_LINK = '';
export const WHATSAPP_DEFAULT_MESSAGE = '';

// OUR
export const OUR_WHATSAPP_LINK = '';
