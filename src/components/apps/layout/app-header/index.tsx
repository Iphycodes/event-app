import { mediaSize, useMediaQuery } from '@grc/_shared/components/responsiveness';
import { Space, Tag } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Image from 'next/image';
import React from 'react';

import OfflineDetector from '@grc/_shared/components/offline-detector';
import ResponsiveViewHandlers from './libs/responsive-view-handlers';

const AppHeader = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  return (
    <Header
      className="bg-[#292929] w-full z-[1000] sticky top-0 h-10 py-0 flex items-center text-white justify-between shadow-sm border-b border-b-neutral-600 border-border/100 dark:text-white"
      style={{
        padding: `${isMobile ? '0 10px' : '0 10px'}`,
      }}
    >
      <Space size={10}>
        <Image
          src={'/assets/imgs/debit-logo.png'}
          alt="logo"
          height={20}
          width={20}
          style={{ height: '30px', width: '30px' }}
        />
        <OfflineDetector />
      </Space>
      <ResponsiveViewHandlers />
      <Space size={10} className="flex items-center">
        <Tag className="flex items-center gap-1 bg-[#353535] py-1 px-2 border-none cursor-pointer text-white">
          <i className="ri-play-circle-line text-[18px]"></i>
          <span>Preview</span>
        </Tag>
        <Tag className="flex items-center gap-1 bg-[#353535] py-1 px-2 border-none cursor-pointer text-white">
          <i className="ri-planet-line text-[18px]"></i>
          <span>Publish</span>
        </Tag>
        <Tag className="flex items-center gap-1 py-1 px-2 cursor-pointer border border-[#FF8E3A]">
          <Image
            src={'/assets/gifs/attention-dot.gif'}
            width={20}
            height={20}
            alt="attention-dot"
            style={{ width: '20px', height: '20px' }}
          />
          <span>Use AI Helper</span>
        </Tag>
      </Space>
    </Header>
  );
};

export default AppHeader;
