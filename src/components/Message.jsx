// message.jsx
import React from 'react';

const Message = () => {
  return (
    <div className="w-full h-[146px] flex justify-start items-center gap-[49px] px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-[718.60px] flex-col justify-start items-start gap-[18px] inline-flex">
        <div className="w-full md:w-[510.20px] text-[#49494b] text-xl font-['Be Vietnam']">
          Lorem ipsum dolor sit amet consectetur. Quis mattis dui mi mattis ipsum. Faucibus in sit vulputate id nascetur adipiscing mauris.
        </div>
        <div className="w-full md:w-[167px] flex justify-between items-center">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <div className="w-[119px] text-[#49494b] text-xl font-medium font-['Be Vietnam']">
            Khushi Sikka
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end text-right">
        <div className="text-black text-5xl font-light font-['Be Vietnam'] leading-[72px]">
          Message from
        </div>
        <div className="py-1.5 rounded-tl-2xl rounded-br-2xl flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="text-black text-[64px] font-normal font-['Vilaka Font Demo Version']">
            Founder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
