"use client";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface OrSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  message?: string;
  badgeClassName?: string;
}

export const OrSeparator = ({
  message = "Or continue with",
  className,
  badgeClassName,
  ...rest
}: OrSeparatorProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 flex justify-center items-center my-7",
        className,
      )}
      {...rest}
    >
      <Separator />
      <Badge
        variant="outline"
        className={cn("absolute bg-secondary", badgeClassName)}
      >
        {message}
      </Badge>
    </div>
  );
};
