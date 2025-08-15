"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CpuIcon, Newspaper } from "lucide-react";
import Link from "next/link";
import React from "react";
import Icons from "../global/icons";

interface Props {
  title: string;
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

// Data
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
    subtitle: "Helps businesses generate powerful social media content",
    href: "https://contengen-ai.vercel.app/",
  },
  {
    title: "TerraNovoa AI",
    subtitle: "Explore AI-powered geospatial mapping",
    href: "https://terranovoa-ai.vercel.app/",
  },
  {
    title: "VisualAIze",
    subtitle: "Professional image editing powered by AI",
    href: "https://visualaize-vert.vercel.app/",
  },
  {
    title: "LernKarte AI",
    subtitle: "Generate intelligent flashcards instantly",
    href: "https://lernkarte-ai.vercel.app/",
  },
  {
    title: "Geldify AI",
    subtitle: "Control your finances with real-time insights",
    href: "https://geldify-ai.vercel.app/",
  },
  {
    title: "PruneUrl",
    subtitle: "URL shortener with AI-powered safety checks",
    href: "https://prune-url.vercel.app/",
  },
  {
    title: "Resumesque AI",
    subtitle: "A polished, AI professional resume for free",
    href: "https://resumesque-ai.vercel.app/",
  },
  {
    title: "Orqly AI",
    subtitle: "Connecting Voices, Bridging Worlds",
    href: "https://orqly-ai.vercel.app/",
  },
  {
    title: "Rocliq",
    subtitle:
      "Streamlines project and task management. Organize your work and hit your deadlines",
    href: "https://rocliq.vercel.app/",
  },
];

export const blogsData = [
  {
    title: "Devverse",
    subtitle: "Insights and tips on development",
    href: "https://devverse-astro.vercel.app/",
  },
  {
    title: "The Atlas Boulevard",
    subtitle: "Exploring ideas, creativity, and design",
    href: "https://the-atlas-boulevard.vercel.app/",
  },
  {
    title: "Ich Spreche Deutsch",
    subtitle: "Enrich your German knowledge and capabilities",
    href: "https://ich-spreche-deutsch.vercel.app/",
  },
  {
    title: "Je Parle Francais",
    subtitle: "Enrich your French knowledge and capabilities",
    href: "https://je-parle-francais.vercel.app/",
  },
];

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Static Links */}
        <NavigationMenuItem>
          <Link
            href="https://portfolio-devsite.netlify.app/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground">
              About
            </NavigationMenuLink>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gokul-va-14a304a5/"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground">
              LinkedIn
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Blogs */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
            Blogs
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {blogsData.map((blog, idx) => (
                <Item
                  key={idx}
                  title={blog.title}
                  href={blog.href}
                  icon={<Newspaper className="w-5 h-5" />}
                >
                  {blog.subtitle}
                </Item>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://www.youtube.com/@DevvResolve"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground">
              YouTube
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* AI Products */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
            AI Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[800px] gap-10 p-4 md:w-[1000px] md:grid-cols-4">
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
          className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline transition-colors hover:bg-accent/50 group"
        >
          <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border">
            {icon}
          </div>
          <div className="text-start ml-3">
            <span className="text-sm group-hover:text-foreground font-normal">
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
