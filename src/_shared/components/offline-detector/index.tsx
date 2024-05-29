import { Space, Tag } from 'antd';
import React, { useState } from 'react';
import { Detector } from 'react-detect-offline';
import styled from 'styled-components';

const OfflineDetector = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const handleNetworkChange = (online: boolean) => {
    if (online) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };

  return (
    <Detector render={() => (isOnline ? <Online /> : <Offline />)} onChange={handleNetworkChange} />
  );
};

export default OfflineDetector;

const Offline = () => {
  return (
    <Tag color="error">
      <Space size={5}>
        <StyledIcon>
          <i className="ri-wifi-off-line" />
        </StyledIcon>
        offline
        {/* <a className="underline" style={{ margin: 0 }} onClick={() => window.location.reload()}>
          Refresh Page
        </a> */}
      </Space>
    </Tag>
  );
};

const Online = () => {
  return (
    <Tag color="success">
      <Space size={5}>
        <StyledIcon>
          <i className="ri-wifi-line" />
        </StyledIcon>
        <span>Online</span>
      </Space>
    </Tag>
  );
};

const StyledIcon = styled.span`
  i {
    font-size: 20px !important;
  }

  i.ri-wifi-off-line {
    color: #ff4d4f !important;
  }

  i.ri-wifi-line {
    color: #36a593 !important;
  }
`;
