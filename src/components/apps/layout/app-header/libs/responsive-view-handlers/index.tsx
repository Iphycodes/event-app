import { AppContext } from '@grc/app-context';
import { Space, Tooltip } from 'antd';
import React, { useContext } from 'react';
import { MobileOutlined, TabletOutlined, DesktopOutlined } from '@ant-design/icons';

const ResponsiveViewHandlers = () => {
  const { currentResponsiveView, setCurrentResponsiveView } = useContext(AppContext);

  return (
    <Space size={0} className="header-responsiveness-items h-full flex items-center gap-0">
      <Tooltip title={'Desktop view'}>
        <span
          className={`h-full px-4 flex items-center cursor-pointer ${
            currentResponsiveView === 'desktop' && 'bg-[#353535]'
          } hover:bg-[#353535] relative`}
          onClick={() => setCurrentResponsiveView('desktop')}
        >
          <DesktopOutlined style={{ fontWeight: 100, fontSize: 18 }} className="cursor-pointer" />
          {currentResponsiveView === 'desktop' && (
            <i className="ri-circle-fill text-[#00ff00] text-[8px] absolute top-[-20px] right-[10px]"></i>
          )}
        </span>
      </Tooltip>
      <Tooltip title={'Mobile view'}>
        <span
          className={`h-full px-4 flex items-center cursor-pointer ${
            currentResponsiveView === 'mobile' && 'bg-[#353535]'
          } hover:bg-[#353535] relative`}
          onClick={() => setCurrentResponsiveView('mobile')}
        >
          <MobileOutlined style={{ fontWeight: 100, fontSize: 18 }} />
          {currentResponsiveView === 'mobile' && (
            <i className="ri-circle-fill text-[#00ff00] text-[8px] absolute top-[-20px] right-[10px]"></i>
          )}
        </span>
      </Tooltip>
      <Tooltip title={'Tablet view'}>
        <span
          className={`h-full px-4 flex items-center cursor-pointer ${
            currentResponsiveView === 'tablet' && 'bg-[#353535]'
          } hover:bg-[#353535] relative`}
          onClick={() => setCurrentResponsiveView('tablet')}
        >
          <TabletOutlined style={{ fontWeight: 100, fontSize: 18 }} />
          {currentResponsiveView === 'tablet' && (
            <i className="ri-circle-fill text-[#00ff00] text-[8px] absolute top-[-20px] right-[10px]"></i>
          )}
        </span>
      </Tooltip>
    </Space>
  );
};

export default ResponsiveViewHandlers;
