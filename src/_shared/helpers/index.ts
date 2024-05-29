import { COLOR_LIST_ALPHA } from '@grc/_shared/constant';
import { MenuProps } from 'antd';
import { get, capitalize } from 'lodash';

export type MenuItem = Required<MenuProps>['items'][number];

export type NavItem = {
  label: string;
  key: 'add-element' | 'layout' | 'add-invitee' | 'event-setting' | string;
  destination: string;
  icon: React.ReactNode;
  items?: NavItem[];
};

export const getItem = (menuItem: NavItem): MenuItem => {
  return {
    key: menuItem.key,
    icon: menuItem.icon,
    items: menuItem.items,
    label: menuItem.label,
  } as MenuItem;
};

export const getRandomColorByString = (name: string) => {
  name = name?.toUpperCase();
  return get(COLOR_LIST_ALPHA, getFirstCharacter(name) ?? 'A') ?? '#7B68ED';
};

export const getFirstCharacter = (name: string) => {
  return capitalize(name?.charAt(0));
};
