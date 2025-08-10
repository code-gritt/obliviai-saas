"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CalendarRangeIcon,
  CircleHelp,
  CpuIcon,
  HashIcon,
  Newspaper,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Icons from "../global/icons";

interface Props {
  title: string;
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}
// src/data/projectsData.ts
export const projectsData = [
  {
    title: "Nuvonote",
    subtitle: "Minimalistic notepad powered by structured prompts",
    href: "https://nuvonote.vercel.app",
  },
  {
    title: "Workafloat AI",
    subtitle: "Use AI to uncover insights about job roles and search smarter",
    href: "https://workafloat-ai.vercel.app",
  },
  {
    title: "ContenGen AI",
    subtitle:
      "Helps businesses generate powerful social media content for growth, engagement",
    href: "https://contengen-ai.vercel.app/",
  },
  {
    title: "TerraNovoa AI",
    subtitle:
      "Explore AI-powered geospatial mapping and insights for a sustainable future",
    href: "https://terranovoa-ai.vercel.app/",
  },
  {
    title: "VisualAIze",
    subtitle:
      "Professional image editing powered by AI. Crop, resize, adjust colors, remove backgrounds",
    href: "https://visualaize-vert.vercel.app/",
  },
  {
    title: "LernKarte AI",
    subtitle:
      "Generate intelligent flashcards instantly using AI. Learn faster and smarter with LernKarte AI",
    href: "https://lernkarte-ai.vercel.app/",
  },
  {
    title: "Geldify AI",
    subtitle:
      "Control your finances with real-time insights, automated tracking",
    href: "https://geldify-ai.vercel.app/",
  },
  {
    title: "PruneUrl",
    subtitle:
      "URL shortener with AI-powered safety checks, real-time analytics, and QR generation",
    href: "https://prune-url.vercel.app/",
  },
];

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            href="https://portfolio-devsite.netlify.app/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              About
            </NavigationMenuLink>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gokul-va-14a304a5/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              LinkedIn
            </NavigationMenuLink>
          </Link>
          <Link
            href="https://devverse-astro.vercel.app/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                  >
                    <Icons.icon className="w-6 h-6" />
                    <div className="my-2 text-lg font-normal">Luro AI</div>
                    <p className="text-sm text-muted-foreground">
                      Your ultimate social media management tool
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <Item
                title="Content Calendar"
                href="/features/content-calendar"
                icon={<CalendarRangeIcon className="w-5 h-5" />}
              >
                Plan and visualize your content strategy.
              </Item>
              <Item
                title="Hashtag Manager"
                href="/features/hashtag-manager"
                icon={<HashIcon className="w-5 h-5" />}
              >
                Research and track trending hashtags.
              </Item>
              <Item
                title="Competitor Analysis"
                href="/features/competitor-analysis"
                icon={<UsersIcon className="w-5 h-5" />}
              >
                Monitor and analyze competitor performance.
              </Item>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
            AI Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {projectsData.map((proj, idx) => (
                <Item
                  key={idx}
                  title={proj.title}
                  href={proj.href}
                  icon={<CpuIcon className="w-5 h-5" />}
                >
                  {proj.subtitle}
                </Item>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          passHref
          href={href}
          {...props}
          className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
        >
          <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
            {icon}
          </div>
          <div className="text-start ml-3">
            <span className="text-sm group-hover:text-foreground font-normal leading-none">
              {title}
            </span>
            <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

Item.displayName = "Item";

export default Menu;
