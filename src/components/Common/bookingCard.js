"use client";
import React from "react";
import { BackgroundGradient } from "../ui/ServiceCardGradient.jsx";
import Image from "next/image";

export function BookingCard({ booking, service }) {
  if (!service) {
    return <></>;
  }
  return (
    <div className="mt-16 dark">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={service?.src}
          alt="jordans"
          height="400"
          width="400"
          className="object-cover h-[250px]"
        />
        <p className="text-base sm:text-xl flex justify-between items-center text-black mt-4 mb-2 dark:text-neutral-200">
          {service.title}
          <div>{booking?.date ? <div>{booking?.date}</div> : ""}</div>
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {service.description}
        </p>
        <div>Price: ${service?.price}</div>
        <div>
          {booking?.comment ? (
            <div className="">
              Discription:{" "}
              <span className=" text-gray-300 text-[14px]">
                {booking?.comment}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </BackgroundGradient>
    </div>
  );
}
