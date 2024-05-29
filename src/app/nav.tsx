'use client';
import React from 'react';
import { SiderTheme } from 'antd/es/layout/Sider';
import { NavItem, getFirstCharacter, getRandomColorByString } from '@grc/_shared/helpers';
import { isEmpty } from 'lodash';
import { Avatar } from 'antd';

export type Nav = {
  theme: SiderTheme & string;
  appName: string;
  items: NavItem[];
  footerMenuItems: NavItem[];
};

const footerMenuItems: NavItem[] = [
  {
    label: 'Profile',
    key: 'profile',
    destination: '',
    icon: (
      <Avatar
        style={{
          backgroundColor: getRandomColorByString('Ifeanyi'),
          verticalAlign: 'middle',
          height: '28px',
          width: '28px',
          marginLeft: '-5px',
        }}
      >
        {isEmpty('') && getFirstCharacter('Ifeanyi')}
      </Avatar>
    ),
  },
];

const menuItems: NavItem[] = [
  {
    label: 'Add Element',
    key: 'add-element',
    destination: '',
    icon: (
      <i className="ri-add-fill font-extralight" style={{ fontSize: '22px', fontWeight: 100 }}></i>
    ),
  },
  {
    label: 'Layout',
    key: 'layout',
    destination: '',
    icon: (
      <i
        className="ri-list-check-2 font-extralight"
        style={{ fontSize: '20px', fontWeight: 100 }}
      ></i>
    ),
  },
  {
    label: 'Add Invitee',
    key: 'add-invitee',
    destination: '',
    icon: <i className="ri-user-add-line" style={{ fontSize: '20px' }}></i>,
  },
  {
    label: 'Event Setting',
    key: 'event-setting',
    destination: '',
    icon: <i className="ri-file-settings-line" style={{ fontSize: '20px' }}></i>,
  },
];

const appNav: Nav = {
  appName: 'Event App',
  theme: 'light',
  items: menuItems,
  footerMenuItems: footerMenuItems,
};

export { appNav };
