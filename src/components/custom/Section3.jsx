import Image from "next/image";
import React from "react";
import image from "../../assets/images/banner1.jpg";

export default function Section3() {
  return (
    <div className="h-[600px]">
      <Image
        src={image}
        alt="section_3"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
