"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";

type CardBlockProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const CardBlock = ({
  icon,
  title,
  description,
  children,
}: CardBlockProps) => {
  return (
    <Card className="p-0 bg-background">
      <CardContent className="p-5">
        <div className={cn("")}>
          <div className="flex items-center gap-3">
            <div
              className={cn(
                buttonVariants({ variant: "default", size: "icon" }),
              )}
            >
              {icon}
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
          </div>
          {description && (
            <CardDescription className="mt-4">{description}</CardDescription>
          )}
        </div>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};
