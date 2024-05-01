import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import image1 from "../../assets/images/woman-blue.jpg";
import image2 from "../../assets/images/woman-highlight.jpg";
import image3 from "../../assets/images/male-spider.jpg";
import image4 from "../../assets/images/Beard trimming.jpg";
import image5 from "../../assets/images/women eyebrows.jpg";
import image6 from "../../assets/images/women cuts.jpg";
import { SparklesCore } from "../ui/sparkle";

export const works = [
  {
    title: "5 BENEFITS OF GOING TO A BARBER",
    type: "Hairstyle",
    art: image1.src,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "WHICH TRIM SHOULD I CHOOSE?",
    type: "Bread",
    art: image2.src,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "BEST COSMETICS FOR YOUR HAIR",
    type: "Cosmatic",
    art: image3.src,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "5 BENEFITS OF GOING TO A BARBER",
    type: "Hairstyle",
    art: image4.src,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "5 BENEFITS OF GOING TO A BARBER",
    type: "Hairstyle",
    art: image5.src,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "5 BENEFITS OF GOING TO A BARBER",
    type: "Hairstyle",
    art: image6.src,
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function NewsSection() {
  return (
    <div className=" mt-[40px] md:mt-[80px]">
      <div className="px-2 text-[26px] relative md:text-[56px] font-semibold my-8 text-center">
        <div className="w-full absolute inset-0 h-full z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={200}
            className="w-full h-full z-0"
            particleColor="#FFFFFF"
          />
        </div>
        GALLERY
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.title} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.title}`}
                  className="aspect-[3/4] "
                  width={400}
                  height={400}
                />
              </div>
              {/* <div className="pt-2 text-md font-light ">{artwork.type}</div>
              <div className="pt-2 text-xl font-semibold ">{artwork.title}</div>
              <div className="pt-2 text-md font-light w-[300px] whitespace-break-spaces">
                {artwork.discription}
              </div> */}
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
