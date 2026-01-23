// -------------------------------------------------------------

export const NAVBAR_SECTION_OFFSET_ON_TOP = { xs: -40, md: -10 };
export const NAVBAR_SECTION_OFFSET_OVER_IT = { xs: 20, md: 60 };

// -------------------------------------------------------------

export const PagesInfo = {
  HOME: {
    path: '/',
    helmet: 'Home | Club Ácido',
    sections: { HERO: 'inicio', CONTENT: 'mentoria', SOBRE_MI: 'sobre-mi', TESTIMONIALS: 'testimonios', LINKS: 'links', SOCIAL_DEMO: 'social-demo' },
  },
  SKINCARE: { path: '/skincare', helmet: 'Skincare | Club Ácido' },
  TATTOO: { path: '/tattoo', helmet: 'Tattoo | Club Ácido' },
  TALLERES: { path: '/talleres', helmet: 'Talleres | Club Ácido' },
  QUIZ: { path: '/quiz/:quizSlug', helmet: 'Quiz | Club Ácido' },
};

export const NavItems = [
  { label: 'Skincare', href: '/skincare', type: 'route', icon: '/icon.png' },
  { label: 'Tattoo', href: '/tattoo', type: 'route', icon: '/icon.png' },
  { label: 'Talleres', href: '/talleres', type: 'route', icon: '/icon.png' },
  // { label: 'QUIZ', href: '/quiz/diagnostico-piel', type: 'route', icon: '/icon.png'  },
];

export const HamburgerNavItems = [{ label: 'Home', href: `/`, type: 'route', icon: '/icon.png' }, ...NavItems];

// --------------------------------------------------------------

// CLIENT
export const CLIENT_WHATSAPP_LINK = '';
export const CLIENT_INSTAGRAM_LINK = '';
export const CLIENT_TIKTOK_LINK = '';
export const CLIENT_FACEBOOK_LINK = '';
export const WHATSAPP_DEFAULT_MESSAGE = '';

// OUR
export const OUR_WHATSAPP_LINK = '';
