import React from 'react';
import { css } from '@emotion/core';
import { NavLink } from 'react-router-dom';

export type MenuItemProps = {
  className?: string;
  label: string;
  linkTo: string;
};

const NavStyle = css`
  align-items: center;
  color: inherit;
  display: flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: aliceblue;
  }

  &.active {
    background-color: aliceblue;
    font-weight: bold;
  }
`;

const MenuItem: React.FC<MenuItemProps> = props => {
  const { label, linkTo, ...rest } = props;
  return (
    <div {...rest}>
      <NavLink css={NavStyle} to={linkTo} activeClassName="active">
        {label}
      </NavLink>
    </div>
  );
};

export default MenuItem;
