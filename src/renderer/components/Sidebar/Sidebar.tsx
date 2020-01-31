import React from 'react';
// import styled from 'styled-components';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-root">
      <nav>
        <div>あ</div>
        <div>い</div>
        <div>う</div>
        <div>え</div>
        <div>お</div>
      </nav>
    </div>
  );
};

const StyledSidebar: React.FC = () => {
  return <Sidebar />;
};

export default StyledSidebar;
