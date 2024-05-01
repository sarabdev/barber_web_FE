"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../assets/images/LOGO.png";
import { Button } from "../ui/button";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../lib/Store/user/userActions";
import { clearAllCookies } from "../Common/Cookies";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    }
  }, []);

  console.log(user);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex items-center justify-between  px-8  ${
        scrolling
          ? "bg-black fixed top-0 z-50 border-b border-gray-500"
          : " absolute top-0 z-50 bg-black bg-opacity-60  transition-all duration-300"
      } `}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center md:gap-[60px] w-full lg:justify-center">
          <div className="md:hidden block">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white mt-2 text-[22px] mr-2">
                <RxHamburgerMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-6 mt-2">
                <DropdownMenuItem>
                  <Link href="/" className=" ">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services" className=" ">
                    Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact" className=" ">
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about" className=" ">
                    About
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link
            href="/"
            className="text-white hover:text-gray-300 hidden md:block"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-gray-300  hidden md:block"
          >
            Services
          </Link>
          <Link href="/" className="text-white font-bold text-lg">
            <Image
              src={logo}
              alt="logo"
              height={100}
              width={150}
              className=" md:w-[150px] w-[80px]"
            />
            {/* <div className=" text-[28px] md:text-[36px]"> Logo</div> */}
          </Link>
          <Link
            href="contact"
            className="text-white hover:text-gray-300  hidden md:block"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300  hidden md:block"
          >
            About
          </Link>
        </div>
        <div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild className=" cursor-pointer">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <div className="px-2 flex gap-2">
                  <div className="font-semibold">Name: </div>
                  <div>{user?.firstName}</div>
                  <div>{user?.lastName}</div>
                </div>
                <div className="px-2 flex gap-2">
                  <div className=" font-semibold">Email: </div>
                  <div>{user?.email}</div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className=" cursor-pointer">
                  <Link href={"/bookings"}>Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className=" cursor-pointer"
                  onClick={() => {
                    clearAllCookies();
                    localStorage.removeItem("user");
                    window.location.reload();
                  }}
                >
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button>
              <Link href={"/signin"}>Signin</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
