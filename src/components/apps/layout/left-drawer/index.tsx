import React, { useContext } from 'react';
import { Layout } from 'antd';
import { AppContext } from '@grc/app-context';
import AddElement from '../../home/libs/add-element';
import AddInvitee from '../../home/libs/add-invitee';
import EventSetting from '../../home/libs/event-setting';
import LayoutStructure from '../../home/libs/layout-structure';

const { Sider } = Layout;
interface LeftDrawerProps {
  toggleLeftDrawer: boolean;
}

const LeftDrawer: React.FC<LeftDrawerProps> = ({ toggleLeftDrawer }) => {
  const { leftDrawerKey } = useContext(AppContext);
  return (
    <Sider
      collapsed={toggleLeftDrawer}
      collapsedWidth={0}
      className="dash-sider border-r border-r-gray-200 p-0"
      width={250}
      style={{
        overflow: 'auto',
        position: 'fixed',
        padding: '0',
        paddingTop: 40,
        height: '100vh',
        scrollbarWidth: 'none',
        scrollbarColor: 'red',
        left: 50,
        top: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      {leftDrawerKey === 'add-element' && <AddElement />}
      {leftDrawerKey === 'add-invitee' && <AddInvitee />}
      {leftDrawerKey === 'event-setting' && <EventSetting />}
      {leftDrawerKey === 'layout' && <LayoutStructure />}
    </Sider>
  );
};

export default LeftDrawer;
