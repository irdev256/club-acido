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
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.4090705062617!2d-58.561944!3d-34.6696238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62cce786e79%3A0xd79344e9595fafdc!2sPolo%20Tecnol%C3%B3gico%20UNLaM!5e0!3m2!1ses!2sar!4v1769357766589!5m2!1ses!2sar';
export const CLIENT_GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Polo+Tecnol%C3%B3gico+UNLaM/@-34.6696238,-58.561944,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc62cce786e79:0xd79344e9595fafdc!8m2!3d-34.6696238!4d-58.561944!16s%2Fg%2F11hbfhs_ly?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D';
// OUR
export const OUR_WHATSAPP_LINK = '';

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
