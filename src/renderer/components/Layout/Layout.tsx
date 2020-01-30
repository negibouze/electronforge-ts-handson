import React from 'react';
import Sidebar from '@/renderer/components/Sidebar';
import FirstContent from '@/renderer/components/FirstContent';

const Layout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <FirstContent />
    </div>
  );
};

export default Layout;
