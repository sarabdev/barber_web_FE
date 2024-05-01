"use client";
import React, { useState } from "react";
import { AboutBanner } from "../../components/custom/aboutHeader";
import Navbar from "../../components/custom/Navbar";
import { Button } from "../../components/ui/button";
import Footer from "../../components/Common/footer";
import { useToast } from "../../components/ui/use-toast";
import axios from "axios";
import { getCookie } from "../../components/Common/Cookies";
import { useSelector } from "react-redux";

export default function ContactPage() {
  const user = useSelector((state) => state.user?.user);
  const { toast } = useToast();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [formData, setFormData] = useState({
    // email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        variant: "destructive",
        title: "User Signin",
        description: "Please signin to book service",
      });
      return;
    }
    if (!formData.subject || !formData.message) {
      toast({
        variant: "error",
        title: "Missing Fields",
        description: "Please fill in all required fields.",
      });
      return;
    }
    setIsLoading(true);
    const accessToken = getCookie("access_token");
    axios
      .post(`${apiUrl}/stripe/send-contact-mail`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log("Success:", res);
        toast({
          variant: "success",
          title: "Message Sent",
          description: "Your message has been successfully sent.",
        });
        // Clear form data after successful submission
        setFormData({
          // email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          variant: "error",
          title: "Error",
          description: "An error occurred. Please try again later.",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <AboutBanner text={"Contact"} />
      <section className="bg-white dark:bg-black/90 dark">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Your thoughts matter! Whether it's feedback or questions, we're here
            to help. Leave us a message, and we'll be in touch shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@barber.com"
                required
              />
            </div> */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
