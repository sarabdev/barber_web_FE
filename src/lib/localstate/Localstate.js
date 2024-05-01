"use client";

export const getUser = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("user")) {
      console.log(JSON.parse(localStorage.getItem("user")));
      return JSON.parse(localStorage.getItem("user"));
    }
  }
  return null; // Return null or handle the absence of localStorage as needed
};

export const setUser = (user) => {
  if (typeof window !== "undefined") {
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const removeUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};
