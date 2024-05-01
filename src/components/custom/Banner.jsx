"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/image-slider.jsx";
import image1 from "../../assets/images/banner5.jpg";
import image2 from "../../assets/images/banner6.jpg";
import image3 from "../../assets/images/banner8.jpg";
import image4 from "../../assets/images/banner2.jpg";

export function ImagesSliderDemo() {
  const images = [image1.src, image2.src, image3.src, image4.src];

  return (
    <ImagesSlider
      className="md:min-h-[100vh] min-h-[70vh]"
      images={images}
      autoplay
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center text-white"
      >
        {/* <motion.p className=" text-3xl md:text-3xl text-center  py-2">
          Since 1991
        </motion.p> */}
        <motion.p className="font-bold text-4xl sm:text-4xl md:text-9xl text-center tracking-[15px] md:tracking-[20px]  py-2">
          Yadistyled
        </motion.p>
        <motion.p className="font-bold text-xl md:text-5xl text-center  py-2">
          Bringing out the best <br></br>in your hair
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
