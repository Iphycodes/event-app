import React from 'react';
import LayoutStylingDisplay from './libs/display';
import LayoutStylingDirection from './libs/direction';

interface LayoutStylingProps {}

const LayoutStyling = ({}: LayoutStylingProps) => {
  return (
    <div className="w-full border-y border-neutral-600 p-[10px]">
      <div className="flex justify-between items-center mb-3 font-semibold text-[18px]">
        <span>Layout</span>
        <i className="ri-arrow-down-s-line cursor-pointer"></i>
      </div>
      <div className="w-full">
        <LayoutStylingDisplay />
        <LayoutStylingDirection />
      </div>
    </div>
  );
};

export default LayoutStyling;
