"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
  secondaryText?: string;
  children: ReactNode;
};

export default function TextLink({
  href,
  className,
  children,
  secondaryText,
  target,
  onClick,
}: TextLinkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [halfHeight, setHalfHeight] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setHalfHeight(containerRef.current.clientHeight / 2);
    }
  }, []);

  const content = (
    <div
      className={cn(
        "relative inline-flex flex-col overflow-hidden leading-none group",
        className,
      )}
      style={{ height: halfHeight }}
    >
      <div
        ref={containerRef}
        className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2 hover:opacity-75"
      >
        <span className="flex items-center gap-1.25 whitespace-nowrap ">
          {children}
          <ArrowRight
            className="transition-transform duration-300 group-hover:-rotate-45"
            size={16}
          />
        </span>

        <span className="flex items-center gap-1.25 whitespace-nowrap">
          {secondaryText ?? children}
          <ArrowRight
            className="transition-transform duration-300 group-hover:-rotate-45"
            size={16}
          />
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        className="inline-flex items-center"
        href={href}
        target={target}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className="inline-flex items-center cursor-pointer"
      onClick={onClick}
    >
      {content}
    </div>
  );
}
