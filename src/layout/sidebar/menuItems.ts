import {
  Home,
  ShoppingCart,
  Users,
  Settings,
  LucideIcon,
} from 'lucide-react';

export interface MenuItem {
  label: string;
  href?: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
  },
  {
    label: 'Components',
    icon: ShoppingCart,
    children: [
      {
        label: 'Button',
        href: 'components/button',
      },
      {
        label: 'Accordion',
        href: 'components/accordion',
      },
    ],
  },
  {
    label: 'Users',
    icon: Users,
    href: 'users',
  },
  {
    label: 'Settings',
    icon: Settings,
    children: [
      {
        label: 'Profile',
        href: 'profile',
      },
      {
        label: 'Security',
        href: 'security',
      },
    ],
  },
];

export default menuItems;
