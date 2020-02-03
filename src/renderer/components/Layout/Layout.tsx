import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { css } from '@emotion/core';
import Sidebar from '@/renderer/components/VerticalRoutingMenu';
import FirstContent from '@/renderer/components/FirstContent';
import SecondContent from '@/renderer/components/SecondContent';
import ThirdContent from '@/renderer/components/ThirdContent';

const layoutStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const sidebarStyle = css`
  box-shadow: 2px 0 4px -2px rgba(0, 0, 0, 0.2);
  flex: 0 0 180px;
`;

const contentStyle = css`
  flex: 1 1 auto;
`;

const menu = [
  {
    label: 'First',
    linkTo: '/first'
  },
  {
    label: 'Second',
    linkTo: '/second'
  },
  {
    label: 'Third',
    linkTo: '/third'
  }
];

const contents = [
  {
    path: '/first',
    component: <FirstContent css={contentStyle} />
  },
  {
    path: '/second',
    component: <SecondContent css={contentStyle} />
  },
  {
    path: '/third',
    component: <ThirdContent css={contentStyle} />
  },
  {
    path: '/',
    component: <FirstContent css={contentStyle} />
  }
];

const Layout: React.FC = () => {
  const routes = contents.map(v => (
    <Route key={v.path} path={v.path}>
      {v.component}
    </Route>
  ));
  return (
    <Router>
      <div css={layoutStyle}>
        <Sidebar css={sidebarStyle} menuItems={menu}></Sidebar>
        <Switch>{routes}</Switch>
      </div>
    </Router>
  );
};

export default Layout;
