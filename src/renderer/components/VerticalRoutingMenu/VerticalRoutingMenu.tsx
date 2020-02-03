import React from 'react';
import { css } from '@emotion/core';
import { useHistory, useLocation } from 'react-router-dom';

export type VerticalRoutingMenuProps = {
  className?: string;
  menuItems: { label: string; linkTo: string }[];
};

const VerticalRoutingMenuStyle = css`
  background-color: #fff;
  > nav {
    height: 100%;
  }
`;

const ItemStyle = css`
  align-items: center;
  color: inherit;
  display: flex;
  height: 40px;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: aliceblue;
    cursor: pointer;
  }

  &.active {
    background-color: aliceblue;
    cursor: default;
    font-weight: bold;
    pointer-events: none;
  }
`;

const VerticalRoutingMenu: React.FC<VerticalRoutingMenuProps> = props => {
  const history = useHistory();
  const location = useLocation();
  const { menuItems, ...rest } = props;

  function isActive(to: string): boolean {
    return location.pathname === to;
  }

  function handleClick(to: string): void {
    if (isActive(to)) {
      return;
    }
    history.replace(to);
  }

  const menu = menuItems.map(({ linkTo, label }) => (
    <div
      key={linkTo}
      css={ItemStyle}
      className={`${isActive(linkTo) ? 'active' : ''}`}
      onClick={(): void => handleClick(linkTo)}
    >
      {label}
    </div>
  ));

  return (
    <div css={VerticalRoutingMenuStyle} {...rest}>
      <nav>{menu}</nav>
    </div>
  );
};

export default VerticalRoutingMenu;
