"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "../ui/ServiceCardGradient.jsx";
import Image from "next/image";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

import { useSelector } from "react-redux";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.jsx";

import axios from "axios";
import { getCookie } from "../Common/Cookies.js";

export function ServiceCard({ title, src, description, price }) {
  const { toast } = useToast();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const handleClick = () => {
    setIsLoading(true);
    if (!user) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "User Signin",
        description: "Please signin to book service",
      });
      return;
    }
    const accessToken = getCookie("access_token");
    axios
      .post(
        `${apiUrl}/stripe/create-checkout-session`,
        { title, description, price, date, comment },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDialogOpen = () => {
    if (!user) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "User Signin",
        description: "Please signin to book service",
      });
      return;
    }
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleBookNowInDialog = () => {
    if (!date) {
      toast({
        variant: "error",
        title: "Date Required",
        description: "Please select a date to book the service.",
      });
      return;
    }
    handleClick();
    handleDialogClose();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="mt-16 dark">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={src}
          alt="jordans"
          height="400"
          width="400"
          className="object-cover h-[250px]"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={handleDialogOpen}
              variant="outline"
              className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>Book now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    ${price}
                  </span>
                </>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-black">
            <DialogHeader>
              <DialogTitle>Book {title}</DialogTitle>
              <DialogDescription>
                Select date and add comments
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 text-black">
              <label htmlFor="date" className=" text-white">
                Date:
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  const currentDate = new Date().toISOString().split("T")[0];
                  if (selectedDate < currentDate) {
                    setDate(currentDate);
                    toast({
                      variant: "error",
                      title: "Invalid Date",
                      description: "Please select a date from today onwards.",
                    });
                  } else {
                    setDate(selectedDate);
                  }
                }}
                min={today}
                required
                className="border rounded px-2 py-1"
              />
              <label htmlFor="comment" className=" text-white">
                Comment:
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="border rounded px-2 py-1"
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant=" ">Cancel</Button>
              </DialogClose>
              <Button onClick={handleBookNowInDialog}>
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <span>Book now </span>
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </BackgroundGradient>
    </div>
  );
}
