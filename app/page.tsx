import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CoverCarousel } from "@/features/landing/components/cover-carousel";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  RiGoogleFill,
  RiFacebookFill,
  RiTwitterXFill,
  RiGithubFill,
} from "@remixicon/react";
import {
  BadgeCheck,
  BoxIcon,
  ChartLine,
  HouseIcon,
  PanelsTopLeftIcon,
  Plus,
  SchoolIcon,
  SettingsIcon,
  Sparkles,
  UsersRoundIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { OrSeparator } from "@/components/block/or-seeparator";
import { experience } from "@/constant/experiance";
import { ExperienceTimeline } from "@/features/landing/components/experience-timeline";
import Link from "next/link";
import { profile } from "@/constant/profile";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "@/constant/skills";
import { CardBlock } from "@/components/layout/card-block";
import { BlogAndTweeet } from "@/features/landing/components/blog-annd-tweet";
import { DraftArticleList } from "@/components/block/draft-article";
import { articles } from "@/constant/article";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto font-[family-name:var(--font-geist-sans) relative max-w-3xl">
      <CoverCarousel />
      <Card className="border-none shadow-none p-0 bg-background relative">
        <CardHeader>
          <div className="flex justify-end-safe md:justify-between py-4 space-x-2">
            <div className="inline-flex flex-wrap absolute gap-2 -top-12 right-2.5 md:top-0 md:right-0 md:relative">
              <Button
                variant="default"
                aria-label="Login with Google"
                size="icon"
              >
                <RiGoogleFill size={16} aria-hidden="true" />
              </Button>
              <Button
                variant="default"
                aria-label="Login with Facebook"
                size="icon"
              >
                <RiFacebookFill size={16} aria-hidden="true" />
              </Button>
              <Button variant="default" aria-label="Login with X" size="icon">
                <RiTwitterXFill size={16} aria-hidden="true" />
              </Button>
              <Button
                variant="default"
                aria-label="Login with GitHub"
                size="icon"
              >
                <RiGithubFill size={16} aria-hidden="true" />
              </Button>
            </div>
            <Separator orientation="vertical" />
            <Button className="rounded-full">
              <Sparkles />
              Read a cv
            </Button>
          </div>
          <CardTitle className="md:text-center md:py-4 flex space-x-2 md:justify-center items-center md:mt-3">
            <h1 className="text-3xl font-bold md:text-4xl">ULIL ABSOR</h1>
            <BadgeCheck className="text-blue-500 text-4xl md:text-5xl" />
          </CardTitle>
          <CardDescription className="md:text-center md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
            voluptatum consectetur sed quibusdam officiis maiores magni incidunt
            commodi corporis libero recusandae, fugit quasi deserunt accusantium
            consequatur atque aliquid illo pariatur.
          </CardDescription>
          <div className="mt-4 flex flex-wrap gap-4 md:justify-center">
            {profile.contacts.map((contact) => (
              <Link
                href={contact.href}
                key={contact.label}
                className="gap-1.5 align-middle inline-flex hover:underline"
              >
                <contact.icon />
                {contact.value}
              </Link>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="tab-1">
            <ScrollArea>
              <TabsList className="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1">
                {[
                  {
                    value: "tab-1",
                    label: "Overview",
                    icon: HouseIcon,
                  },
                  {
                    value: "tab-2",
                    label: "Projects",
                    icon: PanelsTopLeftIcon,
                    badge: (
                      <Badge
                        className="bg-primary/15 ms-1.5 min-w-5 px-1"
                        variant="secondary"
                      >
                        3
                      </Badge>
                    ),
                  },
                  {
                    value: "tab-3",
                    label: "Packages",
                    icon: BoxIcon,
                    badge: <Badge className="ms-1.5">New</Badge>,
                  },
                  {
                    value: "tab-4",
                    label: "Team",
                    icon: UsersRoundIcon,
                  },
                  {
                    value: "tab-5",
                    label: "Insights",
                    icon: ChartLine,
                  },
                  {
                    value: "tab-6",
                    label: "Settings",
                    icon: SettingsIcon,
                  },
                ].map(({ value, label, icon: Icon, badge }, idx) => (
                  <TabsTrigger
                    key={idx}
                    value={value}
                    className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    <Icon
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                    {label}
                    {badge}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <TabsContent value="tab-1">
              <CardBlock
                icon={<SchoolIcon />}
                title="Study"
                description="
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, autem? Ex eum ab exercitationem mollitia quia sint et
              rem distinctio possimus, beatae assumenda est enim veritatis
              velit, aliquid laboriosam tempora."
              />
              <OrSeparator message="Career in my life" />
              <ExperienceTimeline experience={experience.slice(0, 3)} />
              <Card className="mt-6 border-none shadow-none bg-background">
                <CardTitle className="flex items-center gap-3 p-6 justify-center relative mb-5">
                  <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Coding to Office Mastery
                  </h2>
                </CardTitle>
                <CardContent className="relative p-0">
                  <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                      items={skills}
                      direction="right"
                      speed="slow"
                      key={1}
                      pauseOnHover={false}
                    />
                    <InfiniteMovingCards
                      items={skills}
                      direction="left"
                      speed="slow"
                      key={23}
                      pauseOnHover={false}
                    />
                    <InfiniteMovingCards
                      items={skills}
                      direction="right"
                      speed="slow"
                      key={40}
                      pauseOnHover={false}
                    />
                  </div>
                </CardContent>
                <CardFooter className="py-0">
                  <DraftArticleList articles={articles} />
                </CardFooter>
              </Card>
              <BlogAndTweeet />
            </TabsContent>
            <TabsContent value="tab-2">
              <p className="text-muted-foreground pt-1 text-center text-xs">
                Content for Tab 2
              </p>
            </TabsContent>
            <TabsContent value="tab-3">
              <p className="text-muted-foreground pt-1 text-center text-xs">
                Content for Tab 3
              </p>
            </TabsContent>
            <TabsContent value="tab-4">
              <p className="text-muted-foreground pt-1 text-center text-xs">
                Content for Tab 4
              </p>
            </TabsContent>
            <TabsContent value="tab-5">
              <p className="text-muted-foreground pt-1 text-center text-xs">
                Content for Tab 5
              </p>
            </TabsContent>
            <TabsContent value="tab-6">
              <p className="text-muted-foreground pt-1 text-center text-xs">
                Content for Tab 6
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
