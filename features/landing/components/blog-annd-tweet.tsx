"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { storyTexts } from "@/constant/story-texts";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Autoplay from "embla-carousel-autoplay";
import { Boxes, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const BlogAndTweeet = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true }),
  );

  return (
    <Card className="border-none shadow-none bg-background">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 justify-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Blog & Tweet
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Carousel
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          plugins={[plugin.current]}
        >
          <CarouselContent className="-ml-3 md:-ml-4 pl-2 py-3">
            {storyTexts.map((story, index: number) => (
              <CarouselItem
                key={index}
                className="pl-2.5 basis-[45%] md:basis-[28.9%]"
              >
                <Card className="h-60 border-2 relative flex items-center p-0">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Avatar className="h-8 w-8 rounded-full overflow-hidden">
                      <AvatarImage src={story.image} alt={story.author} />
                      <AvatarFallback>
                        {story.author.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Link
                      href="/aulilkez"
                      className="font-bold hover:underline transition-transform text-xs"
                    >
                      @{story.author}
                    </Link>
                  </div>

                  <CardContent className="py-4 px-0 size-full space-y-3 items-center flex justify-center">
                    {/* <Boxes /> */}
                    <CardTitle className="px-4 text-center transition-all ease-linear duration-300">
                      {story.text}
                    </CardTitle>
                  </CardContent>

                  {/* <BoxStars className="hidden group-hover:block transition-opacity duration-500" /> */}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
      <CardFooter className="px-0">
        {/* <DraftArticleList articles={dummyArticles.slice(0, 5)} /> */}
      </CardFooter>
    </Card>
  );
};
