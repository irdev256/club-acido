export interface NavItem {
  label: string;
  href: string;
  type: 'route' | 'external' | 'section';
  icon?: string;
}
