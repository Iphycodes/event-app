import React from 'react';
import { Layout, Space } from 'antd';
import RightPanelTabs from './libs/right-panel-tabs';

const { Sider } = Layout;
interface RightDrawerProps {
  toggleRightDrawer: boolean;
}

const RightDrawer: React.FC<RightDrawerProps> = ({}) => {
  return (
    <Sider
      collapsed={false}
      collapsedWidth={0}
      className="border-l border-l-gray-200 text-white"
      width={350}
      style={{
        overflow: 'auto',
        position: 'fixed',
        padding: '0 10px',
        height: '100vh',
        color: '#ffffff',
        backgroundColor: '#292929',
        scrollbarWidth: 'none',
        scrollbarColor: 'red',
        right: 0,
        top: 0,
        width: '400px',
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Space className="mt-12" size={5}>
        <i className="ri-arrow-right-circle-line text-[22px]"></i>
        <div>None Selected</div>
      </Space>
      <RightPanelTabs />
    </Sider>
  );
};

export default RightDrawer;
