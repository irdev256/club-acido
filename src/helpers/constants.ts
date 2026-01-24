// -------------------------------------------------------------

// export const NAVBAR_SECTION_OFFSET_ON_TOP = { xs: -40, md: -10 };
// export const NAVBAR_SECTION_OFFSET_OVER_IT = { xs: 20, md: 60 };

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
export const CLIENT_WHATSAPP_LINK = 'https://wa.me/message/2XPF4LNDEZXLK1';
export const CLIENT_INSTAGRAM_LINK = 'https://www.instagram.com/clubacido?igsh=ZTQ4cWlsN3lobWQ3&utm_source=qr';
export const CLIENT_TIKTOK_LINK = 'https://www.tiktok.com/@abusmua?_r=1&_t=ZM-93Cp8S85gjc';
export const CLIENT_FACEBOOK_LINK = '';
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola! Me darías más información?';
export const CLIENT_EMAIL = 'clubacido@gmail.com';
export const CLIENT_PHONE_NUMBER = '+54123456789';

// OUR
export const OUR_WHATSAPP_LINK = '';
