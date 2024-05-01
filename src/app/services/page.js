"use client";
import React, { useEffect } from "react";
import Navbar from "../../components/custom/Navbar";
import { ServiceCard } from "../../components/custom/ServiceCard";
import Footer from "../../components/Common/footer";
import { SparklesCore } from "../../components/ui/sparkle";
import { services } from "../../components/Common/services";
import { useToast } from "../../components/ui/use-toast";
import { getCookie } from "../../components/Common/Cookies";
import axios from "axios";
import { fetchUser } from "../../lib/Store/user/userActions";
import { useDispatch } from "react-redux";
export default function page() {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentSuccess = params.get("payment_success");

    if (paymentSuccess === "true") {
      handlePaymentSuccess();
    } else if (paymentSuccess === "false") {
      handlePaymentFailure();
    }
  }, []);

  const handlePaymentSuccess = () => {
    console.log("object");
    const params = new URLSearchParams(window.location.search);
    const productTitle = params.get("product_title");
    const productComment = params.get("comment");
    const productdate = params.get("date");
    const service = services.find((ser) => ser.title === productTitle);
    console.log("Payment successful! Purchased product:", productTitle);
    toast({
      variant: "error",
      title: "Checkout",
      description: "Checkout successfull",
    });

    const accessToken = getCookie("access_token");
    axios
      .post(
        `${apiUrl}/stripe/send-mail`,
        { ...service, productComment, productdate },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        clearQueryParams();
        dispatch(fetchUser());
      });
  };

  const handlePaymentFailure = () => {
    toast({
      variant: "destructive",
      title: "Checkout",
      description: "Checkout failed",
    });
    clearQueryParams();
    console.log("Payment failed.");
  };

  const clearQueryParams = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("payment_success");
    url.searchParams.delete("comment");
    url.searchParams.delete("date");
    url.searchParams.delete("product_title");
    window.history.replaceState({}, document.title, url);
  };
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
        <div className="flex flex-wrap justify-stretch  gap-8 pt-24 px-8 pb-8">
          {services?.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              src={service.src}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
