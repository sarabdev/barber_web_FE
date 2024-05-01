"use client";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="relative">
              <Image
                src={item.src}
                className="max-h-[500px] h-[500px] object-cover min-w-[100%]"
                width={300}
                height={500}
              />
              <motion.div
                className="absolute inset-0 flex items-center bg-black/80 px-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === idx ? 1 : 0,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="text-white">
                  <div className="mb-2 text-gray-400">
                    <div className="font-bold text-[18px] text-white">
                      Description
                    </div>{" "}
                    {item.description}
                  </div>
                  <div className="mb-2 text-gray-400">
                    <div className="font-bold text-[18px] text-white">
                      Education
                    </div>{" "}
                    {item.education}
                  </div>
                  <div className="mb-2 text-gray-400 ">
                    <div className="font-bold text-[18px] text-white">
                      Experience
                    </div>{" "}
                    {item.experience}
                  </div>
                  <div className="mb-2 text-gray-400">
                    <div className="font-bold text-[18px] text-white">
                      Reviews
                    </div>{" "}
                    {item.review}
                  </div>
                  <div className="mb-2 text-gray-400">
                    <div className="font-bold text-[18px] text-white">
                      About
                    </div>{" "}
                    {item.about}
                  </div>
                </div>
              </motion.div>
            </div>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
