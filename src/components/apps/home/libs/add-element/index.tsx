import { Col, Input, Row, Space } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import ElementComponents from './libs/element-components';
import LayoutComponents from './libs/layout-components';
import { componentListData } from './components';

const AddElement = () => {
  const [component, setComponent] = useState<'layout' | 'element'>('layout');
  const handleSearch = () => {};

  return (
    <div className="w-full">
      <div className="p-2  w-full border-b  border-b-neutral-600">
        <Space className="w-full mb-3" size={5}>
          <i className="ri-arrow-right-circle-line text-[22px]"></i>
          <div>Add</div>
        </Space>
        <Row className="w-full bg-[#353535] flex rounded-[4px] items-center border border-neutral-600 mb-2">
          <Col
            lg={12}
            className={`py-[2px] text-center rounded-[4px] ${
              component === 'layout' ? 'bg-neutral-900' : 'hover:bg-neutral-700'
            } cursor-pointer`}
            onClick={() => setComponent('layout')}
          >
            Layout
          </Col>
          <Col
            lg={12}
            className={`py-[2px] text-center rounded-[4px] ${
              component === 'element' ? 'bg-neutral-900' : 'hover:bg-neutral-700'
            } cursor-pointer`}
            onClick={() => setComponent('element')}
          >
            Element
          </Col>
        </Row>
        <Input
          placeholder={'Search elements'}
          prefix={<SearchOutlined style={{ color: '#d9d9d9' }} />}
          size="small"
          className="element-search-input w-full border-neutral-600 bg-neutral-900 rounded-sm shadow-sm placeholder:text-slate-400 placeholder:text-sm"
          style={{ borderRadius: '5px', color: '#d9d9d9' }}
          onChange={handleSearch}
        />
      </div>
      <div className="w-full">
        {component === 'element' && (
          <ElementComponents elementComponentsListData={componentListData?.elementComponents} />
        )}
        {component === 'layout' && (
          <LayoutComponents layoutComponentsListData={componentListData?.layoutComponents} />
        )}
      </div>
    </div>
  );
};

export default AddElement;
