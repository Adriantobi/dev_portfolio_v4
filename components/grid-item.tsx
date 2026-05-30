"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useEffectEvent, useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { useHover } from "@/hooks/use-hover";
import { cn } from "@/lib/utils";
import { usePalette } from "color-thief-react";

type GridSizeParam = { size: number } | { width: number; height: number };

type SharedGridItemProps = {
  type: "project" | "job" | "social";

  icon?: string;
  header?: string;
  subheader?: string;
  content?: string;

  btnContent?: string;
  btnColor?: string;
  link?: string;
  bgColor?: string;
  bgImage?: string;
  children?: ReactNode;
};

type GridItemProps =
  | ({
      size: number;
      height?: never;
      width?: never;
    } & SharedGridItemProps)
  | ({
      size?: never;
      height: number;
      width: number;
    } & SharedGridItemProps);

export default function GridItem({
  size,
  height,
  width,
  type,
  icon,
  header,
  subheader,
  content,
  bgImage,
  btnContent,
  btnColor,
  link,
  children,
}: GridItemProps) {
  const { width: windowWidth } = useWindowSize();
  const [mobile, setMobile] = useState(false);
  const [ref, hovering] = useHover<HTMLDivElement>();
  const { data, loading, error } = usePalette(icon, 4, "hex");

  const updateMobileState = useEffectEvent((state: boolean) =>
    setMobile(state),
  );

  useEffect(() => {
    if (windowWidth > 0) updateMobileState(windowWidth < 520 ? true : false);
  }, [windowWidth]);

  useEffect(() => {
    // if (btnContent)
    // getDominantColor()
  }, [btnContent]);

  const getGridItemProperties = (param: GridSizeParam) => {
    const w = "size" in param ? param.size : param.width;
    const h = "size" in param ? param.size : param.height;

    if (w === undefined || h === undefined) return "";

    const size_str = `${w}x${h}`;

    switch (size_str) {
      case "2x2":
        return "col-span-2 row-span-2 min-w-[315px] min-h-[150px]";
      case "2x1":
        return mobile
          ? "col-span-1 row-span-1 min-w-[150px] min-h-[150px]"
          : "col-span-1 row-span-2 min-w-[150px] min-h-[150px]";
      case "1x2":
        return "col-span-2 row-span-1 min-w-[315px] min-h-[75px]";
      case "2x4":
        return "col-span-2 row-span-4 min-w-[315px] min-h-[315px]";
      case "3x4":
        return mobile ? "col-span-2 row-span-4" : "col-span-3 row-span-4";
      case "3x3":
        return mobile ? "col-span-2 row-span-3" : "col-span-3 row-span-3";
      default:
        // fallback for arbitrary sizes
        return `col-span-${w} row-span-${h} min-w-[${w * 75}px] min-h-[${h * 75}px]`;
    }
  };

  const gridClasses = size
    ? getGridItemProperties({ size })
    : height && width
      ? getGridItemProperties({ width, height })
      : "";

  const headingWrapper = (
    <>
      {(icon || btnContent) && (
        <div className="flex items-start justify-between relative z-1">
          {icon && (
            <div className="shrink-0 rounded-xl overflow-hidden">
              <Image
                src={icon}
                width={48}
                height={48}
                alt={`${header} Image`}
                // quality={100}
                unoptimized
              />
            </div>
          )}
          {btnContent && (width !== 2 || height !== 1) && (
            <span
              className="px-3.5 py-1.5 rounded-full text-xs font-medium w-fit transition-all duration-200 hover:scale-[1.02] text-white"
              style={{
                backgroundColor: btnColor ? `rgb(${btnColor})` : data?.[0],
              }}
            >
              {btnContent}
            </span>
          )}
        </div>
      )}
    </>
  );

  const contentWrapper = (
    <>
      {(header || content || btnContent || subheader) && (
        <div className="flex flex-col gap-1 relative z-1">
          {header && <span>{header}</span>}
          {subheader && (
            <span className="text-sm text-zinc-800 dark:text-zinc-300">
              {subheader}
            </span>
          )}
          {content && (
            <span className="text-sm text-zinc-800/85 dark:text-zinc-300/85">
              {content}
            </span>
          )}
          {width === 2 && height === 1 && btnContent && (
            <span
              className="px-3.5 py-1.5 rounded-full text-xs font-medium w-fit transition-all duration-200 hover:scale-[1.02] text-white mt-1"
              style={{
                backgroundColor: btnColor ? `rgb(${btnColor})` : data?.[0],
              }}
            >
              {btnContent}
            </span>
          )}
        </div>
      )}
    </>
  );

  const imageWrapper = (
    <>
      {bgImage && width === 2 && height === 4 ? (
        <div
          className={cn(
            "w-full h-full bg-cover! absolute inset-0 object-cover bg-center opacity-65 z-0",
            "group-hover:scale-125 group-hover:opacity-25 transition-normal duration-300",
          )}
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      ) : null}
    </>
  );

  const container = (
    <motion.div
      // initial={{ scale: 0 }}
      // animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 330,
        damping: 35,
        duration: 0.15,
      }}
      ref={ref}
      className={cn(
        gridClasses ?? "min-w-37.5 min-h-18.75",
        "group border relative rounded-[20px] p-3.75 flex flex-col overflow-hidden gap-2 h-full w-full",
        type === "social"
          ? "[backdrop-filter:brightness(1.1)_blur(2px)_url(#displacementFilter)]"
          : "hover:[backdrop-filter:brightness(1.1)_blur(2px)_url(#displacementFilter)]",
        type === "social"
          ? "border-[rgb(var(--grid-item))]/75 bg-[rgb(var(--grid-item))]/25"
          : "border-transparent",
        "hover:border-[rgb(var(--grid-item))]/85 hover:bg-[rgb(var(--grid-item))]/45",
        link ? "cursor-pointer" : "",
      )}
    >
      <>
        {link ? (
          <Link
            className="flex flex-col w-full h-full gap-2"
            href={link}
            target="_blank"
          >
            {headingWrapper}
            {contentWrapper}
            {imageWrapper}
            {children}
          </Link>
        ) : (
          <>
            {headingWrapper}
            {contentWrapper}
            {imageWrapper}
            {children}
          </>
        )}
      </>
    </motion.div>
  );

  return container;
}
