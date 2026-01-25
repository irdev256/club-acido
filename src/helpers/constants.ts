// -------------------------------------------------------------

import type { NavItem } from './types';

// CLIENT
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola! Me darías más información?';
export const CLIENT_WHATSAPP_LINK = 'https://wa.me/message/2XPF4LNDEZXLK1';
export const CLIENT_INSTAGRAM_LINK = 'https://www.instagram.com/clubacido?igsh=ZTQ4cWlsN3lobWQ3&utm_source=qr';
export const CLIENT_TIKTOK_LINK = 'https://www.tiktok.com/@abusmua?_r=1&_t=ZM-93Cp8S85gjc';
export const CLIENT_FACEBOOK_LINK = '';
export const CLIENT_EMAIL = 'clubacido@gmail.com';
export const CLIENT_PHONE_NUMBER = '+54 123456789';
export const CLIENT_AGENDA_PRO = 'https://agendapro.com/site/ar/elclubacido/';
export const CLIENT_GOOGLE_MAPS_IFRAME =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.159552289143!2d-58.645289500000004!3d-34.6506733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8aad648d531%3A0xcbd5af7d58931e3a!2sGdor.%20Inocencio%20Arias%202570%2C%20B1712CEB%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1769366785749!5m2!1ses-419!2sar';
export const CLIENT_GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/V3y7teK3nrWH4T6n9';
// OUR
export const OUR_WHATSAPP_LINK = '';

('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.159552289143!2d-58.645289500000004!3d-34.6506733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8aad648d531%3A0xcbd5af7d58931e3a!2sGdor.%20Inocencio%20Arias%202570%2C%20B1712CEB%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1769366785749!5m2!1ses-419!2sar');

// --------------------------------------------------------------

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

export const NavItems: NavItem[] = [{ label: 'Agendá tu turno', href: CLIENT_AGENDA_PRO, type: 'external', icon: '/icon.png' }];

export const HamburgerNavItems: NavItem[] = [
  { label: 'Home', href: `/`, type: 'route', icon: '/icon.png' },
  { label: 'Skincare', href: '/skincare', type: 'route', icon: '/icon.png' },
  { label: 'Tattoo', href: '/tattoo', type: 'route', icon: '/icon.png' },
  { label: 'Talleres', href: '/talleres', type: 'route', icon: '/icon.png' },
  ...NavItems,
];

// --------------------------------------------------------------

export const Z_INDEX = {
  FLOATING_ACTIONS: 1200,
  HAMBURGER_MENU: 1300,
};
