import React from 'react';
import { css } from '@emotion/core';
import SidebarItem from './SidebarItem';

type MenuItem = {
  key: string;
  label: string;
};

const menus: MenuItem[] = [
  { key: 'menu-1', label: 'Menu1' },
  { key: 'menu-2', label: 'Menu2' },
  { key: 'menu-3', label: 'Menu3' },
  { key: 'menu-4', label: 'Menu4' },
  { key: 'menu-5', label: 'Menu5' }
];

export type SidebarProps = {
  className?: string;
};

const SidebarStyle = css`
  background-color: #fff;
  > nav {
    height: 100%;
  }
`;

const Sidebar: React.FC<SidebarProps> = props => {
  const menu = menus.map(v => (
    <SidebarItem
      key={v.key}
      label={v.label}
      css={css`
        height: 40px;
      `}
    />
  ));

  return (
    <div css={SidebarStyle} {...props}>
      <nav>{menu}</nav>
    </div>
  );
};

export default Sidebar;
