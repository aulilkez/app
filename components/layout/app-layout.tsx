"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

type AppLayoutProps = { children: React.ReactNode };

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 backdrop-blur-xs h-16 z-50">
        <div className="container py-3 px-4 mx-auto flex md:justify-center max-w-4xl">
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Company
          </Link>
        </div>
      </header>
      {children}
    </>
  );
};
