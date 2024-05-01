"use client";
import Navbar from "../components/custom/Navbar";
import { ImagesSliderDemo } from "../components/custom/Banner";
import { ScrollAreaHorizontalDemo } from "../components/custom/BannerScroller";
import Section2 from "../components/custom/Section2";
import Section3 from "../components/custom/Section3";
import NewsSection from "../components/custom/NewsSection";
import { LayoutGridDemo } from "../components/custom/Section4";
import Footer from "../components/Common/footer";
import { addUser } from "../lib/Store/user/userslice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    let user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    dispatch(addUser(user));
  }, []);

  return (
    <div className=" ">
      <Navbar />
      <ImagesSliderDemo />
      <ScrollAreaHorizontalDemo className=" mt-4" />
      <Section2 />
      <Section3 />
      <NewsSection />
      <LayoutGridDemo />
      <Footer />
    </div>
  );
}
