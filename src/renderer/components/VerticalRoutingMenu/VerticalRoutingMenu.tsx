import React from 'react';
import { css } from '@emotion/core';
import MenuItem, { MenuItemProps } from './MenuItem';

export type VerticalRoutingMenuProps = {
  className?: string;
  menuItems: MenuItemProps[];
};

const VerticalRoutingMenuStyle = css`
  background-color: #fff;
  > nav {
    height: 100%;
  }
`;

const VerticalRoutingMenu: React.FC<VerticalRoutingMenuProps> = props => {
  const { menuItems, ...rest } = props;
  const menu = menuItems.map(v => {
    return (
      <MenuItem
        key={v.linkTo}
        {...v}
        css={css`
          height: 40px;
        `}
      />
    );
  });

  return (
    <div css={VerticalRoutingMenuStyle} {...rest}>
      <nav>{menu}</nav>
    </div>
  );
};

export default VerticalRoutingMenu;
