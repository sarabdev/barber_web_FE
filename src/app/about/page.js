import Navbar from "../../components/custom/Navbar";
// import { HoverEffect } from "../../components/ui/card-hover-text";
import { AboutBanner } from "../../components/custom/aboutHeader";

import Footer from "../../components/Common/footer";
import AboutMe from "../../assets/images/About-me.png";
import Image from "next/image";

export default function CardHoverEffectDemo() {
  return (
    <>
      <div className="min-h-screen bg-black/90 flex flex-col justify-center items-center">
        <Navbar />
        <AboutBanner text={"About"} />
        <div className="relative mb-8">
          <div className="relative w-[100vw] h-[70vh]">
            <Image src={AboutMe} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-semibold text-[16px] bg-black/60 md:text-[30px] p-8 ">
              Hi there, it's Marisol! I'm so excited to meet you! As a
              passionate hairstylist, I'm all about bringing out your best look
              and making sure you feel amazing. With my cosmetology license and
              years of experience, I've got you covered for everything from
              classic cuts to modern trends. I'm all about creating personalized
              looks that showcase your unique features and individual style. And
              let's be real - getting your hair done should be an uplifting
              experience, right? So let's chat, connect, and have some fun while
              we make some hair magic. I'm here to listen, inspire, and help you
              achieve your hair goals in the friendliest way possible. Let's
              make it happen together!
            </div>
          </div>
        </div>
        {/* <div className=" py-8">
        <HoverEffect items={projects} />
      </div> */}
      </div>
      <Footer />
    </>
  );
}
