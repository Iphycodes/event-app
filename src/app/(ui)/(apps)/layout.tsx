'use client';
import { AppContext } from '@grc/app-context';
import { appNav } from '@grc/app/nav';
import LeftDrawer from '@grc/components/apps/layout/left-drawer';
import SideNav from '@grc/components/apps/layout/side-nav';
import { Layout } from 'antd';
import React, { ReactElement, useContext, useState } from 'react';
import RightDrawer from '@grc/components/apps/layout/right-panel';
import AppHeader from '@grc/components/apps/layout/app-header';

const { Content } = Layout;

interface AppBaseLayoutProps {
  // Add your prop types here
  children?: ReactElement | ReactElement[];
}

const AppBaseLayout: React.FC<AppBaseLayoutProps> = ({ children }) => {
  const { toggleLeftDrawer } = useContext(AppContext);
  const [selectedKey, setSelectedKey] = useState('');

  const handleLayoutBodyClick = () => {
    setSelectedKey('');
  };

  return (
    <Layout hasSider={false} className="bg-background bg-gray-300">
      <AppHeader />
      <SideNav appNav={appNav} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <LeftDrawer toggleLeftDrawer={toggleLeftDrawer} />
      <Layout
        className="relative z-0 bg-gray-300"
        style={{
          marginLeft: toggleLeftDrawer ? '50px' : '300px',
          marginRight: '350px',
          transition: 'all 0.4s',
        }}
        onClick={handleLayoutBodyClick}
      >
        <Content>
          <div
            className={`dark:text-white mt-10 px-5`}
            style={{ minHeight: '100vh', height: '100vh' }}
          >
            {children}
          </div>
        </Content>
        <RightDrawer toggleRightDrawer={true} />
      </Layout>
    </Layout>
  );
};

export default AppBaseLayout;
