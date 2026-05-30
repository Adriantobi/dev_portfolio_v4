"use client";

import { useEffect, useEffectEvent, useState } from "react";
import GridItem from "./grid-item";
import { JobBentoItem } from "./job-bento-item";
import ProjectBentoItem from "./project-bento-item";
import TextLink from "./text-link";
import { cn } from "@/lib/utils";
import useSocialStore from "@/stores/social-store";

export default function BentoGrid() {
  const { visible, setVisibility } = useSocialStore();

  const changeBento = () => {
    setVisibility(!visible);
  };

  return (
    <div
      className={cn(
        "grid max-w-161 w-135 gap-4 justify-center z-100 grid-cols-3",
        "max-desktop:max-w-full max-desktop:w-full",
        "max-phone:grid-cols-2",
      )}
    >
      <span className="col-span-full text-base z-100 pl-3.75 cursor-default font-bold">
        EXPERIENCE
      </span>

      <JobBentoItem
        icon="/images/companies/jeffreyai_logo.jpg"
        link="https://www.jeffreyai.com/"
        start={new Date("2024-03-01")}
        end={new Date("2026-05-15")}
        role="Angular Developer"
        type="Full Time"
        company="JeffreyAI"
        description="As a front-end Angular developer, I craft a seamless user experience, from design to performance. I turn concepts into interactive interfaces, build reusable components, and ensure everything runs smoothly."
        tech={[
          "Angular",
          "Typescript",
          "Figma",
          "React",
          "Azure DevOps",
          "Plasmo",
          "Sass",
          "Tailwind",
          "Next.js",
          "SQL",
        ]}
      />
      <JobBentoItem
        icon="/images/companies/carbonandfinch_logo.jpg"
        link="https://www.carbonandfinch.com/"
        start={new Date("2024-01-01")}
        end={new Date("2024-03-01")}
        role="X++ Developer"
        type="Full Time"
        company="Carbon & Finch"
        description="Identified and resolved bugs or errors within Dynamics AX or Dynamics 365 business applications. Also implemented new features and tailored existing modules to align with specific business processes or workflows."
        tech={["X++", "Azure", "Microsoft Dynamics 365", "C#"]}
      />

      <JobBentoItem
        icon="/images/companies/epsom_ewell_hub_logo.jpg"
        link="https://www.epsomandewellhub.com/"
        start={new Date("2023-07-01")}
        end={new Date("2023-09-01")}
        role="Web Developer"
        type="Volunteer"
        company="Epsom & Ewell Hub"
        description="Applied Wix and JavaScript proficiency to elevate a critical job-seeking platform, channeling a passion for coding and community impact. Worked collaboratively with a designer to integrate UI elements seamlessly, utilizing the Wix drag-and-drop interface and code editor."
        tech={["JavaScript", "Wix"]}
      />

      <JobBentoItem
        icon="/images/companies/moreton_bay_regional_council_logo.jpg"
        link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Moreton%20Bay%20Regional%20Council/7q8DN5enMzSHqLwev_Moreton%20Bay%20Regional%20Council_u2pPtAhxvS8oQHQfT_1681464876569_completion_certificate.pdf"
        start={new Date("2023-03-01")}
        end={new Date("2023-04-01")}
        role="Web Developer"
        type="Virtual Experience"
        company="Moreton Bay"
        description="From planning the website to creating a form section for user input. Explore UI/UX design for end users and further polished my web development skills."
        tech={["Figma", "CSS", "HTML", "JavaScript"]}
      />

      <JobBentoItem
        icon="/images/companies/wedancevip_logo.jpg"
        link="https://www.wedance.vip"
        start={new Date("2022-07-01")}
        end={new Date("2022-09-01")}
        role="Front-end Developer"
        type="Internship"
        company="WeDance"
        description="Used Vue.js to fix bugs given by various tickets on the github codebase. Helped in designing and building the new WeDance version."
        tech={["Vue.js", "CSS", "TypeScript"]}
      />

      <JobBentoItem
        icon="/images/companies/goldman_sachs_logo.jpg"
        link="https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_u2pPtAhxvS8oQHQfT_1629113234515_completion_certificate.pdf"
        start={new Date("2021-08-01")}
        end={new Date("2021-08-01")}
        role="Software Engineer"
        type="Virtual Experience"
        company="Goldman Sachs"
        description="Cracked leaked password database that had different hashing types like SHA-256, MD5 etc. Using services like hashcat to run the passwords through different hashing algorithms and crack them using methods such as brute force."
        tech={["Hashcat", "Cryptography"]}
      />

      <JobBentoItem
        icon="/images/companies/jpmorganchase_logo.jpg"
        link="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_u2pPtAhxvS8oQHQfT_1629460325328_completion_certificate.pdf"
        start={new Date("2021-07-01")}
        end={new Date("2021-08-01")}
        role="Software Engineer"
        type="Virtual Experience"
        company="JPMorgan"
        description="Created an interface with a stock price data feed. Used JPMorgan Chase frameworks and tools. Displayed data visually for traders."
        tech={["Typescript", "React", "Python", "JavaScript", "Git"]}
      />

      <span className="col-span-full text-base z-100 pl-3.75 cursor-default font-bold">
        PROJECTS
      </span>

      <ProjectBentoItem
        link="https://www.npmjs.com/package/torrentmq"
        title="TorrentMQ"
        description="TorrentMQ is a browser-native peer-to-peer messaging library. It builds a self-healing mesh network of WebRTC data channels, then layers a publish/subscribe broker on top."
        images={["/images/projects/torrentMQ.png"]}
      />

      <ProjectBentoItem
        link="https://github.com/Adriantobi/dotfiles/"
        title="Neovim Config"
        description="A neovim configuration built using kickstart.nvim and specialised to suit my needs as a developer."
        images={[
          "/images/projects/nvimConfig1.png",
          "/images/projects/nvimConfig2.png",
          "/images/projects/nvimConfig3.png",
          "/images/projects/nvimConfig4.png",
        ]}
        unoptimized
      />

      <ProjectBentoItem
        link="https://www.npmjs.com/package/rbbt-client"
        title="RBBT Client"
        description="RBBTClient is a JavaScript library designed for seamless interaction with RabbitMQ over WebSockets."
        images={["/images/projects/rbbtClient.png"]}
      />

      <ProjectBentoItem
        link="https://github.com/Adriantobi/cuery/"
        title="Cuery CLI Tool"
        description="Cuery is a versatile command line utility designed to streamline the execution of commands by leveraging aliases stored in a configuration file."
        images={["/images/projects/cueryCliTool.gif"]}
        unoptimized
      />

      <ProjectBentoItem
        link="https://nooodle.vercel.app/app"
        title="Noodle"
        description="Noodle is a study platform that allows you to choose from a variety of spaces, as well as listen to Spotify and set tasks."
        images={["/images/projects/noodle.png"]}
      />

      <ProjectBentoItem
        link="http://ce-wallington.vercel.app/"
        title="Christ Embassy Wallington"
        description="A church website built using Nextjs and prisma to display news and announcements."
        images={["/images/projects/christEmbassyWallington.png"]}
      />

      <ProjectBentoItem
        link="https://monstr.ofneill.com/"
        title="Monstr"
        description="Monstr is a web-based chat application that allows users to create and join disposable chat rooms."
        images={["/images/projects/monstr.png"]}
      />

      <ProjectBentoItem
        link="https://www.epsomandewellhub.com/"
        title="Epsom And Ewell Hub"
        description="A redesign and development of the Epsom and Ewell Hub official website, built using Wix."
        images={["/images/projects/epsomAndEwellHub.png"]}
      />

      <ProjectBentoItem
        link="https://photos.adriantd.com/"
        title="Photography Portfolio"
        description="A simple portfolio to display my film photography."
        images={[
          "/images/projects/photographyPortfolio1.png",
          "/images/projects/photographyPortfolio2.png",
        ]}
      />

      <ProjectBentoItem
        link="https://v2.adriantd.com/"
        title="adriantd.com (v2)"
        description="A recent portfolio built using Nextjs displaying skills and experience. Styled using CSS Modules and deployed with vercel."
        images={["/images/projects/adriansPortfoliov2.png"]}
      />

      <ProjectBentoItem
        link="https://v1.adriantd.com/"
        title="adriantd.com (v1)"
        description="A HTML portfolio, crafted in 2022. Witness the raw code and pixel-perfect design that fueled my early web development journey."
        images={["/images/projects/adriansPortfoliov1.png"]}
      />

      <ProjectBentoItem
        link="https://v0.adriantd.com/"
        title="adriantd.com (v0)"
        description="No frameworks, no plugins, just HTML. This hand-coded portfolio from 2019 is a testament to my dedication and understanding of the web's building blocks."
        images={["/images/projects/adriansPortfoliov0.jpg"]}
      />

      <span className="col-span-full text-sm z-100 pl-3.75 cursor-pointer">
        <TextLink onClick={changeBento}>
          {`${visible ? "Hide" : "Show"} bento board`}
        </TextLink>
      </span>

      <div
        className={cn(
          "col-span-full grid grid-cols-3 gap-4 transition-all duration-500 ease-in-out origin-top",
          "max-phone:grid-cols-2",
          visible
            ? "opacity-100 scale-100 max-h-full pointer-events-auto"
            : "opacity-0 scale-95 max-h-0 pointer-events-none overflow-hidden gap-0!",
        )}
      >
        <GridItem
          type="social"
          link="https://instagram.com/adrian.td"
          icon="/images/socials/instagram_logo.jpg"
          size={2}
          header="Instagram"
          subheader="@adrian.td"
          content="I shoot film"
          btnContent="Follow"
        />

        <GridItem
          type={"social"}
          link={"https://github.com/Adriantobi"}
          icon={"/images/socials/github_logo.jpg"}
          width={2}
          height={1}
          header={"GitHub"}
          subheader={"@AdrianTobi"}
          btnContent={"Follow"}
          btnColor={"35, 35, 35"}
        />

        <GridItem
          type={"social"}
          link={"https://twitter.com/adriantdoav"}
          icon={"/images/socials/x_logo.jpg"}
          width={2}
          height={1}
          header={"X"}
          subheader={"@adriantdoav"}
          btnContent={"Follow"}
        />

        <GridItem
          type={"social"}
          link={"https://www.linkedin.com/in/adriantd"}
          icon={"/images/socials/linkedin_logo.jpg"}
          size={2}
          header={"LinkedIn"}
          subheader={"@adriantd"}
          content={"Student at Queen Mary University of London"}
          btnContent={"Connect"}
        />

        <GridItem
          type={"social"}
          link={
            "https://www.xiaohongshu.com/user/profile/616c9247000000000201ca3e"
          }
          icon={"/images/socials/xiaohongshu_logo.jpg"}
          width={2}
          height={4}
          header={"小红书"}
          subheader={"@adrian.td"}
          content={"life is one big conundrum."}
          btnContent={"Follow"}
          bgImage={
            "https://lh3.googleusercontent.com/g1SSCTW2NFSxUDRmGBBxt8bIaj-xj-_4rgKJwBUSMmFP7nEMZ0_Rf8GFL4lJtoON41_PhOoPnskWPvxafwz7iUtZUnBtR29Pq_S9C8ojMdJcXqjLqWfBwHvI-CspmAj8uCm0nQwDpA=w2400"
          }
        />

        <GridItem
          type={"social"}
          link={"https://weibo.com/u/7696376222?ssl_rnd=1660044172.0373"}
          icon={"/images/socials/weibo_logo.jpg"}
          width={2}
          height={1}
          header={"Weibo"}
          subheader={"@adriantobi"}
          btnContent={"Follow"}
          btnColor={"231, 0, 18"}
        />

        <GridItem
          type={"social"}
          link={"https://youtube.com/@adriantdoav"}
          icon={"/images/socials/youtube_logo.jpg"}
          width={2}
          height={1}
          header={"YouTube"}
          subheader={"@adriantdoav"}
          btnContent={"Follow"}
        />
      </div>
    </div>
  );
}
