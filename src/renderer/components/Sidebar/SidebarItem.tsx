import React from 'react';
import { css } from '@emotion/core';

export type SidebarItemProps = {
  className?: string;
  label: string;
};

const SidebarItemStyle = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SidebarItem: React.FC<SidebarItemProps> = props => {
  return (
    <div css={SidebarItemStyle} {...props}>
      {typeof props.className}
    </div>
  );
};

export default SidebarItem;
