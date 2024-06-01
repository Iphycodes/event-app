import { Col, Row, Tooltip } from 'antd';
import React, { ReactNode, useState } from 'react';

const LayoutStylingDirection = () => {
  const [direction, setDirection] = useState<'row' | 'column' | 'rtl-wrap'>('row');

  const handleChangeDirection = (newDirection: 'row' | 'column' | 'rtl-wrap') => {
    //perform action here
    setDirection(newDirection);
  };

  const directionItems: { icon: ReactNode; label: string; value: 'row' | 'column' | 'rtl-wrap' }[] =
    [
      {
        icon: <i className="ri-arrow-right-line"></i>,
        label: 'Row',
        value: 'row',
      },
      {
        icon: <i className="ri-arrow-down-line"></i>,
        label: 'Column',
        value: 'column',
      },
      {
        icon: <i className="ri-corner-right-down-fill"></i>,
        label: 'Right to Left Wrap',
        value: 'rtl-wrap',
      },
    ];

  return (
    <Row gutter={[5, 5]} className="w-full flex items-center mb-2">
      <Col lg={6} md={6}>
        Direction
      </Col>
      <Col lg={18} md={18}>
        <Row className="bg-[#353535] flex rounded-[4px] items-center border border-neutral-600">
          <Col lg={22}>
            <Row className="flex items-center">
              {directionItems?.map(({ label, icon, value }, idx) => (
                <Col
                  key={idx}
                  lg={8}
                  className={`py-1 text-center rounded-[4px] ${
                    value === direction ? 'bg-neutral-900' : 'hover:bg-neutral-700'
                  } cursor-pointer`}
                  onClick={() => handleChangeDirection(value)}
                >
                  <Tooltip title={label}>{icon}</Tooltip>
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

export default LayoutStylingDirection;
