import { Space } from 'antd';
import React from 'react';

const AddElement = () => {
  return (
    <div className="w-full">
      <Space className="p-2 w-full border-b border-b-neutral-600" size={5}>
        <i className="ri-arrow-right-circle-line text-[22px]"></i>
        <div>Add Element</div>
      </Space>
    </div>
  );
};

export default AddElement;
