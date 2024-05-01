"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid.jsx";

import image3 from "../../assets/images/banner4.jpg";
import TimeImage from "../../assets/images/Time-location.png";

export function LayoutGridDemo() {
  return (
    <div className="h-[700px] p-4 w-[100vw] relative overflow-hidden ">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cancelation Policy</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We understand that plans can change unexpectedly, so if you need to
        cancel or reschedule your appointment, please let us know as soon as
        possible. While we appreciate 24 hours’ notice, we're happy to
        accommodate last-minute changes whenever we can. We kindly ask that you
        inform us at least a few hours in advance if you need to cancel or
        reschedule. Thank you for your understanding and consideration!"
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return <div></div>;
};
// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">Greens all over</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">Rivers are serene</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: " w-[100px] ",
    thumbnail: image3.src,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: " w-[100px] ",
    thumbnail: TimeImage.src,
  },
  // {
  //   id: 2,
  //   content: <SkeletonTwo />,
  //   className: "col-span-1",
  //   thumbnail: image2.src,
  // },
  // {
  //   id: 3,
  //   content: <SkeletonThree />,
  //   className: "col-span-1",
  //   thumbnail: image3.src,
  // },
  // {
  //   id: 4,
  //   content: <SkeletonFour />,
  //   className: "md:col-span-2",
  //   thumbnail: image4.src,
  // },
];
