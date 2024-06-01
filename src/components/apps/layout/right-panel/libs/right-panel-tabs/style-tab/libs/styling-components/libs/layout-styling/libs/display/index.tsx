import { Col, Row } from 'antd';
import React, { useState } from 'react';

const LayoutStylingDisplay = () => {
  const [display, setDisplay] = useState<'block' | 'flex' | 'grid' | 'none'>('block');

  const handleChangeDisplay = (newDisplay: 'block' | 'flex' | 'grid' | 'none') => {
    //perform action here
    setDisplay(newDisplay);
  };

  const displayItems: { label: string; value: 'block' | 'flex' | 'grid' | 'none' }[] = [
    {
      label: 'Block',
      value: 'block',
    },
    {
      label: 'Flex',
      value: 'flex',
    },
    {
      label: 'Grid',
      value: 'grid',
    },
    {
      label: 'None',
      value: 'none',
    },
  ];

  return (
    <Row gutter={[5, 5]} className="w-full flex items-center text-[#d9d9d9] mb-2">
      <Col lg={6} md={6}>
        Display
      </Col>
      <Col lg={18} md={18}>
        <Row className="bg-[#353535] flex rounded-[4px] items-center border border-neutral-600">
          <Col lg={22}>
            <Row className="flex items-center">
              {displayItems?.map(({ label, value }, idx) => (
                <Col
                  key={idx}
                  lg={6}
                  className={`py-1 text-center rounded-[4px] ${
                    value === display ? 'bg-neutral-900' : 'hover:bg-neutral-700'
                  } cursor-pointer`}
                  onClick={() => handleChangeDisplay(value)}
                >
                  {label}
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={2}>
            <i className="ri-arrow-down-s-line cursor-pointer"></i>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LayoutStylingDisplay;
