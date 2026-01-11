export const PagesInfo = {
  HOME: {
    path: '/',
    helmet: 'Home | Club Ácido',
    sections: { HERO: 'inicio', CONTENT: 'mentoria', SOBRE_MI: 'sobre-mi', TESTIMONIALS: 'testimonios' },
  },
  CONTACTO: { path: '/contacto', helmet: 'Contacto | Club Ácido' },
  QUIZ: { path: '/quiz/:quizSlug', helmet: 'Quiz | Club Ácido' },
};

export const NavItems = [
  { label: 'Mentoría', href: PagesInfo.HOME.sections.CONTENT, type: 'anchor' },
  { label: 'Sobre mí', href: PagesInfo.HOME.sections.SOBRE_MI, type: 'anchor' },
  { label: 'Testimonios', href: PagesInfo.HOME.sections.TESTIMONIALS, type: 'anchor' },
  { label: 'QUIZ', href: '/quiz/diagnostico-piel', type: 'route' },
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
