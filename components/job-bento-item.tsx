import Link from "next/link";
import GridItem from "./grid-item";
import Image from "next/image";
import TextLink from "./text-link";
import { cn } from "@/lib/utils";

type JobBentoItemProps = {
  link: string;
  company: string;
  description: string;
  role: string;
  type: "Virtual Experience" | "Full Time" | "Internship" | "Volunteer";
  icon: string;
  start: Date;
  end: Date | "present";
  tech: string[];
};

export function JobBentoItem({
  link,
  description,
  icon,
  role,
  type,
  company,
  start,
  end,
  tech,
}: JobBentoItemProps) {
  const formatMonthYear = (date: Date) => {
    return date
      .toLocaleDateString("en-US", { month: "short", year: "numeric" })
      .toUpperCase();
  };

  return (
    <GridItem size={3} type="job">
      <Link className="flex flex-col gap-2.5 group" href={link} target="_blank">
        <div className={cn("flex gap-2.5", "max-phone:flex-col")}>
          {icon ? (
            <div className="shrink-0 rounded-xl overflow-hidden w-fit">
              <Image
                src={icon}
                width={48}
                height={48}
                alt={`${company} logo`}
              />
            </div>
          ) : null}

          <div className="text-sm flex flex-col justify-around">
            <TextLink
              className="text-base"
              secondaryText={`${type} · ${company}`}
            >
              {role} · {company}
            </TextLink>
            <span className="opacity-50 text-xs">
              {formatMonthYear(start)} —{" "}
              {end === "present" ? "PRESENT" : formatMonthYear(end)}
            </span>
          </div>
        </div>
        <div className="text-sm opacity-75">
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tech.map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-3xl text-xs px-2.5 py-1 bg-[rgb(var(--tech-stack))]/25",
                "[backdrop-filter:brightness(1.1)_blur(2px)_url(#displacementFilter)]",
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </GridItem>
  );
}
