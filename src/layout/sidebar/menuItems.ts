import {
  Home,
  ShoppingCart,
  Users,
  Settings,
  LucideIcon,
  Folder,
} from 'lucide-react';

export interface MenuItem {
  title: string;
  url?: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    icon: Home,
    url: '/',
  },
  {
    title: 'Components',
    icon: ShoppingCart,
    children: [
      {
        title: 'Accordion',
        url: 'components/accordion',
      },
      {
        title: 'Alert',
        url: 'components/alert',
      },
      {
        title: 'Badge',
        url: 'components/badge',
      },
      {
        title: 'Button',
        url: 'components/button',
      },
      {
        title: 'Cards',
        url: 'components/cards',
      },
      {
        title: 'Charts',
        url: 'components/charts',
      },
      {
        title: 'Command',
        url: 'components/command',
      },
      {
        title: 'Context Menu',
        url: 'components/context-menu',
      },
      {
        title: 'Datatable',
        url: 'components/datatable',
      },
      {
        title: 'Drawer',
        url: 'components/drawer',
      },
      {
        title: 'Dropdown',
        url: 'components/dropdown',
      },
      {
        title: 'File Upload',
        url: 'components/file-upload',
      },
      {
        title: 'Form Elements',
        url: 'components/form-elements',
      },
      {
        title: 'Loaders',
        url: 'components/loaders',
      },
      {
        title: 'Menu Bar',
        url: 'components/menu-bar',
      },
      {
        title: 'Modal',
        url: 'components/modal',
      },
      {
        title: 'Sheet',
        url: 'components/sheet',
      },
      {
        title: 'Skeletons',
        url: 'components/skeletons',
      },
      {
        title: 'Table',
        url: 'components/table',
      },
      {
        title: 'Tabs',
        url: 'components/tabs',
      },
      {
        title: 'Toast',
        url: 'components/toast',
      },
      {
        title: 'Tooltip',
        url: 'components/tooltip',
      },
    ],
  },
  {
    title: 'Users',
    icon: Users,
    url: 'users',
  },
  {
    title: 'Settings',
    icon: Settings,
    children: [
      {
        title: 'Profile',
        url: 'profile',
      },
      {
        title: 'Security',
        url: 'security',
      },
    ],
  },
  {
    title: 'Saas',
    icon: Folder,
    children: [
      {
        title: 'Code Editor',
        url: 'saas-components/code-editor',
      },
    ],
  },
];

export default menuItems;
