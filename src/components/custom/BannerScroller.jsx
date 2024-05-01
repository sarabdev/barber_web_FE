import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import image1 from "../../assets/images/male-cheetah.jpg";
import image2 from "../../assets/images/front page.jpg";
import image3 from "../../assets/images/Front-womenpng.png";
import image4 from "../../assets/images/men hairstyle.jpg";
import image5 from "../../assets/images/front page-hair.png";
import { SparklesCore } from "../ui/sparkle";

export const works = [
  {
    artist: "Xlanir sndiw",
    art: image1.src,
  },
  {
    artist: "Xlanir sndiw",
    art: image2.src,
  },
  {
    artist: "Xlanir sndiw",
    art: image3.src,
  },
  {
    artist: "Xlanir sndiw",
    art: image4.src,
  },
  {
    artist: "Xlanir sndiw",
    art: image5.src,
  },
];

export function ScrollAreaHorizontalDemo() {
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
        Our Style
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] "
                  width={400}
                  height={400}
                />
              </div>
              {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
              </figcaption> */}
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
