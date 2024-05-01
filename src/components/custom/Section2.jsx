import React from "react";

export default function Section2() {
  return (
    <div className="p-8 md:p-[100px]">
      <div className="flex">
        <div className="text-[24px] font-extrabold md:text-[44px] flex-1">
          Whether you're looking for a bold new look or a subtle change, I’m
          here to make it happen.
        </div>
        <div className="flex-1 hidden md:block"></div>
      </div>
      <div className="flex mt-6 md:mt-14">
        <div className="flex-1 hidden md:block"></div>
        <div className="text-[20px] font-light md:text-[32px]  flex-1 ">
          Trust your hair to my skillful hands for stunning results that you'll
          love.
        </div>
      </div>
    </div>
  );
}
