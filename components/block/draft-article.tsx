import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
// import { BadgeDelta } from "@/components/ui/badge-delta";
// import { formatDate } from "@/lib/format-date";
// import { BoxStars } from "./box-stars";
//
// Types
export type DraftArticle = {
  id: string;
  author: string;
  title: string;
  thumbnail: string;
  publishAt: Date | string;
  alt: string;
  slug: string;
  description: string;
  stats: {
    valueIncrease: number;
    valueDecrease: number;
  };
};

type DraftArticleListProps = {
  articles: DraftArticle[];
};

export function DraftArticleList({ articles }: DraftArticleListProps) {
  return (
    <div className="relative">
      <ul className="grid space-y-2.5">
        {articles.map((article, idx) => (
          <li key={idx}>
            <DraftArticleCard {...article} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DraftArticleCard({
  author,
  title,
  thumbnail,
  publishAt,
  alt,
  slug,
  description,
  stats,
}: DraftArticle) {
  return (
    <Card className="border-none group relative md:flex">
      {/* <BoxStars className="hidden group-hover:block transition-all ease-linear duration-500" /> */}

      <CardHeader className="rounded-md pt-4 p-4 md:pr-2 md:p-2 pb-2">
        <div className="relative md:w-48">
          {/* <BoxStars className="hidden group-hover:block transition-all ease-linear duration-500" /> */}

          <Badge className="absolute top-3 right-3 md:hidden">
            {/* {formatDate(publishAt)} */}
          </Badge>

          <Image
            fill
            src={thumbnail}
            alt={alt}
            className="size-full rounded-md group-hover:rounded-none transition-all ease-linear"
          />

          <div className="absolute bottom-3 flex w-full justify-between px-4 items-center">
            <Link
              href="#"
              className="text-sm hover:underline z-50 font-medium pl-2 md:text-xs"
            >
              @{author}
            </Link>

            <div className="flex gap-x-2 md:hidden">
              <BadgeDelta
                className="bg-background"
                variant="complex"
                deltaType="increase"
                value={stats.valueIncrease + "%"}
              />
              <BadgeDelta
                className="bg-background"
                variant="complex"
                deltaType="decrease"
                value={stats.valueDecrease + "%"}
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-col items-start space-y-1 p-3 md:justify-center pt-1">
        <CardTitle className="text-2xl md:text-xl mb-2 hover:underline transition-all ease-linear">
          <Link to={`/articles/${slug}`}>{title}</Link>
        </CardTitle>
        <CardDescription className="md:text-xs">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
