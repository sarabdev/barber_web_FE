"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/custom/Navbar";
import Footer from "../../components/Common/footer";
import { SparklesCore } from "../../components/ui/sparkle";
import { services } from "../../components/Common/services";
import { useSelector } from "react-redux";
import { BookingCard } from "../../components/Common/bookingCard";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../lib/Store/user/userActions";
export default function page() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, []);
  console.log(user?.bookings);
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="min-h-screen relative w-full bg-black flex flex-col pt-24 overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-wrap justify-stretch  gap-8 px-8 pb-8">
          {user?.bookings?.length > 0 ? (
            user?.bookings?.map((service, index) => (
              <BookingCard
                key={index}
                booking={service}
                service={services?.find(
                  (ser) => ser?.title === service?.serviceName
                )}
              />
            ))
          ) : (
            <div>No bookings available</div>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
