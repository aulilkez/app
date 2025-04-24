"use client";

import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineSeparator,
  TimelineDate,
  TimelineTitle,
  TimelineIndicator,
  TimelineContent,
} from "@/components/ui/timeline";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Experience = {
  company: string;
  position: string;
  datetime: {
    startDate: string;
    endDate: string;
  };
  description: string;
  resources: {
    label: string;
    image: string;
  }[];
};

interface ExperienceTimelineProps {
  experience: Experience[];
  separatorClassName?: string;
  indicatorClassName?: string;
  scrollAreaClassName?: string;
  scrollBarClassName?: string;
}

export const ExperienceTimeline = ({
  experience,
  separatorClassName,
  indicatorClassName,
  scrollAreaClassName,
  scrollBarClassName,
}: ExperienceTimelineProps) => {
  return (
    <Timeline defaultValue={3}>
      {experience.map((item, idx) => (
        <TimelineItem key={idx} step={idx + 1}>
          <TimelineHeader>
            <TimelineSeparator className={cn(separatorClassName)} />
            <TimelineDate>
              {item.datetime.startDate} - {item.datetime.endDate}
            </TimelineDate>
            <TimelineTitle>
              {item.company} as {item.position}
            </TimelineTitle>
            <TimelineIndicator className={cn(indicatorClassName)} />
          </TimelineHeader>
          <TimelineContent>
            <p>{item.description}</p>
            <ScrollArea
              className={cn("whitespace-nowrap h-32", scrollAreaClassName)}
            >
              <div className="flex gap-2 mt-3 relative">
                {item.resources.map((resource) => (
                  <div className="w-[150px] relative" key={resource.label}>
                    <Image
                      fill
                      src={resource.image}
                      alt={resource.label}
                      className="rounded-md object-cover"
                    />
                  </div>
                ))}
              </div>
              <ScrollBar
                orientation="horizontal"
                className={cn("hidden", scrollBarClassName)}
              />
            </ScrollArea>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
