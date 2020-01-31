import React from 'react';
import { css } from '@emotion/core';
import Sidebar from '@/renderer/components/Sidebar';
import FirstContent from '@/renderer/components/FirstContent';

const layoutStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const sidebarStyle = css`
  flex: 0 0 180px;
`;

const contentStyle = css`
  flex: 1 1 auto;
`;

const Layout: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Sidebar css={sidebarStyle} />
      <FirstContent css={contentStyle} />
    </div>
  );
};

export default Layout;
