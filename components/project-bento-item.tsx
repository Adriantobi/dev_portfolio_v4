"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GridItem from "./grid-item";
import TextLink from "./text-link";
import { cn } from "@/lib/utils";

type ProjectBentoItemProps = {
  title: string;
  description: string;
  images: string[];
  link: string;
  unoptimized?: boolean;
};

export default function ProjectBentoItem({
  title,
  description,
  images,
  link,
  unoptimized,
}: ProjectBentoItemProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <GridItem width={3} height={4} type={"project"}>
      <Link className="flex flex-col gap-2.5 group" href={link} target="_blank">
        <div className="text-sm flex flex-col justify-start items-start">
          <TextLink className="text-base">{title}</TextLink>
          <span className="text-sm opacity-75">{description}</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="overflow-hidden rounded-xl">
            <Image
              key={images[currentImage]}
              src={images[currentImage]}
              width={0}
              height={0}
              sizes="100vw"
              alt={`${title} main image`}
              style={{ width: "100%", height: "auto" }}
              unoptimized={unoptimized ?? false}
            />
          </div>

          {images.length > 1 && (
            <div className="flex gap-1 snap-x snap-mandatory py-2 px-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-visible">
              {images.map((img, i) => (
                <div
                  key={img}
                  className={cn(
                    "shrink-0 w-auto h-10 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 snap-center",
                    currentImage === i
                      ? "border-[rgb(var(--background))]/45"
                      : "border-transparent",
                    "phone:hover:scale-105 phone:hover:shadow-lg",
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setCurrentImage(i);
                  }}
                >
                  <Image
                    src={img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={`${title} image ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    unoptimized={unoptimized ?? false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </GridItem>
  );
}
