import { Col, Row } from 'antd';
import { capitalize, startCase } from 'lodash';
import React from 'react';

interface ElementComponentsProps {
  elementComponentsListData: Record<string, any>[];
}

const ElementComponents = ({ elementComponentsListData }: ElementComponentsProps) => {
  return (
    <div className="w-full">
      {elementComponentsListData?.map((elementComponentsListItem, idx) => {
        return (
          <div key={idx} className="w-full border-y border-neutral-600 p-[10px]">
            <div className="flex justify-between items-center mb-3 font-semibold text-[16px]">
              <span>{startCase(capitalize(elementComponentsListItem?.title)) ?? ''}</span>
              <i className="ri-arrow-down-s-line cursor-pointer"></i>
            </div>
            <Row gutter={[0, 10]} className="w-full">
              {elementComponentsListItem?.components?.map((element: any, idx: any) => {
                return (
                  <Col key={idx} lg={12} md={12}>
                    <div className="w-full py-2 flex hover:bg-[#353535] items-center justify-center flex-col gap-1">
                      <span className="text-lg">{element?.icon ?? ''}</span>
                      <span>{element?.label ?? ''}</span>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default ElementComponents;
