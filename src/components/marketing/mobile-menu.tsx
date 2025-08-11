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
import {
  Box,
  CalendarClock,
  Captions,
  CircleHelp,
  CopyCheck,
  FileText,
  Gem,
  Layers3,
  LineChart,
  Newspaper,
  UserCog,
  Waypoints,
} from "lucide-react";
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
        transition={{
          type: "spring",
          bounce: 0.15,
          duration: 0.5,
        }}
        className="size-full flex flex-col justify-start"
      >
        <ul className="flex flex-col items-start flex-1 w-full space-y-3">
          <li
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
          >
            <Link
              href="https://portfolio-devsite.netlify.app/"
              className="flex items-center w-full text-start"
            >
              <UserCog className="w-4 h-4 mr-2" />
              About
            </Link>
          </li>

          <li
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
          >
            <Link
              href="https://www.linkedin.com/in/gokul-va-14a304a5/"
              className="flex items-center w-full text-start"
            >
              <UserCog className="w-4 h-4 mr-2" />
              LinkedIn
            </Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
          >
            <Link
              href="https://devverse-astro.vercel.app/"
              className="flex items-center w-full text-start"
            >
              <UserCog className="w-4 h-4 mr-2" />
              Blog
            </Link>
          </li>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-transparent">
              <AccordionTrigger className="px-4 py-2 text-lg hover:text-muted-foreground font-normal">
                <span className="flex items-center">
                  <Layers3 className="w-4 h-4 mr-2" />
                  AI Products
                </span>
              </AccordionTrigger>
              <AccordionContent
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-start gap-1 mt-1"
              >
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://nuvonote.vercel.app"
                    className="flex items-center w-full text-start"
                  >
                    Nuvonote
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://workafloat-ai.vercel.app"
                    className="flex items-center w-full text-start"
                  >
                    Workafloat AI
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://contengen-ai.vercel.app/"
                    className="flex items-center w-full text-start"
                  >
                    ContenGen AI
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://terranovoa-ai.vercel.app/"
                    className="flex items-center w-full text-start"
                  >
                    TerraNovoa AI
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://visualaize-vert.vercel.app/"
                    className="flex items-center w-full text-start"
                  >
                    VisualAIze
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://lernkarte-ai.vercel.app/"
                    className="flex items-center w-full text-start"
                  >
                    LernKarte AI
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://geldify-ai.vercel.app/"
                    className="flex items-center w-full text-start"
                  >
                    Geldify AI
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://prune-url.vercel.app/"
                    className="flex items-center w-full text-start"
                  >
                    PruneUrl
                  </Link>
                </li>
                <li className="w-full px-4 py-2 text-lg font-normal transition transform rounded-md cursor-pointer text-foreground/80 hover:text-muted-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80">
                  <Link
                    href="https://resumesque-ai.vercel.app/"
                    className="flex items-center w-full text-start"
                  >
                    Resumesque AI
                  </Link>
                </li>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
