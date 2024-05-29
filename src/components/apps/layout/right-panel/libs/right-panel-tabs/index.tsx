import { Tabs, TabsProps } from 'antd';
import React from 'react';

const RightPanelTabs = () => {
  const elementItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Style',
      children: 'Content of Style',
    },
    {
      key: '2',
      label: 'Setting',
      children: 'Content of Setting',
    },
    {
      key: '3',
      label: 'Interaction',
      children: 'Content of Interaction',
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      items={elementItems}
      className="right-panel-tabs text-white"
      tabBarStyle={{ color: '#ffffff' }}
    />
  );
};

export default RightPanelTabs;
