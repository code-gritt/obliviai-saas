"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion } from "framer-motion";
import { Layers3, Newspaper, UserCog } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
  const ref = useClickOutside(() => setIsOpen(false));

  const variants = {
    open: { opacity: 1, y: 20 },
    closed: { opacity: 0, y: 0 },
  };

  const projectsData = [
    { title: "Nuvonote", href: "https://nuvonote.vercel.app" },
    { title: "Workafloat AI", href: "https://workafloat-ai.vercel.app" },
    { title: "ContenGen AI", href: "https://contengen-ai.vercel.app/" },
    { title: "TerraNovoa AI", href: "https://terranovoa-ai.vercel.app/" },
    { title: "VisualAIze", href: "https://visualaize-vert.vercel.app/" },
    { title: "LernKarte AI", href: "https://lernkarte-ai.vercel.app/" },
    { title: "Geldify AI", href: "https://geldify-ai.vercel.app/" },
    { title: "PruneUrl", href: "https://prune-url.vercel.app/" },
    { title: "Resumesque AI", href: "https://resumesque-ai.vercel.app/" },
    { title: "Orqly AI", href: "https://orqly.vercel.app/" },
  ];

  const blogsData = [
    { title: "Devverse", href: "https://devverse-astro.vercel.app/" },
    {
      title: "The Atlas Boulevard",
      href: "https://the-atlas-boulevard.vercel.app/",
    },
    {
      title: "Ich Spreche Deutsch",
      href: "https://ich-spreche-deutsch.vercel.app/",
    },
  ];

  const linkBaseClasses =
    "flex items-center w-full px-4 py-2 text-lg font-normal text-foreground/80 hover:text-foreground hover:bg-muted/20 rounded-md transition-colors active:scale-95 active:opacity-80";

  const renderHorizontalScrollLinks = (
    items: { title: string; href: string }[]
  ) => (
    <ul className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-accent/60 scrollbar-track-transparent px-4 py-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex-shrink-0 min-w-[200px]">
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={linkBaseClasses}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderVerticalLinks = (items: { title: string; href: string }[]) => (
    <ul className="flex flex-col space-y-1 px-2 py-1">
      {items.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={linkBaseClasses}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex flex-1",
        isOpen ? "flex" : "hidden"
      )}
    >
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        className="size-full flex flex-col justify-start"
      >
        <ul className="flex flex-col items-start flex-1 w-full space-y-3">
          {/* Static Links */}
          <li>
            <Link
              href="https://portfolio-devsite.netlify.app/"
              onClick={() => setIsOpen(false)}
              className={linkBaseClasses}
            >
              <UserCog className="w-4 h-4 mr-2" /> About
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/gokul-va-14a304a5/"
              onClick={() => setIsOpen(false)}
              className={linkBaseClasses}
            >
              <UserCog className="w-4 h-4 mr-2" /> LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@DevvResolve"
              onClick={() => setIsOpen(false)}
              className={linkBaseClasses}
            >
              <UserCog className="w-4 h-4 mr-2" /> YouTube
            </Link>
          </li>

          {/* AI Products Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="ai-products" className="border-transparent">
              <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                <span className="flex items-center">
                  <Layers3 className="w-4 h-4 mr-2" /> AI Products
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {renderHorizontalScrollLinks(projectsData)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Blogs Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="blogs" className="border-transparent">
              <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                <span className="flex items-center">
                  <Newspaper className="w-4 h-4 mr-2" /> Blogs
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {renderVerticalLinks(blogsData)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
