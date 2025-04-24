"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CoverCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative md:rounded-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="md:rounded-md">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="h-56 md:h-64 bg-secondary w-full md:rounded-md"></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Avatar className="absolute z-40 size-32 md:size-40 -bottom-16 md:-bottom-20 left-12 md:left-1/2 md:-translate-x-1/2 ring-2 ring-background ring-offset-2">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Carousel>
  );
}
