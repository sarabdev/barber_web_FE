"use client";
import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "../components/ui/toaster";

import { cn } from "../lib/utils";
import ReduxProvider from "../lib/ReduxProvider/ReduxProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative bg-black text-white",
          fontSans.variable
        )}
      >
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
