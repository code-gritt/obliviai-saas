import {
  ChartPieIcon,
  MegaphoneIcon,
  LineChartIcon,
  MessageSquareTextIcon,
  UsersIcon,
  CreditCardIcon,
  SettingsIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Link = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "About", href: "https://portfolio-devsite.netlify.app/" },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/gokul-va-14a304a5/",
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@DevvResolve",
      },
    ],
  },
  {
    title: "AI Products",
    links: [
      { name: "Nuvonote", href: "https://nuvonote.vercel.app" },
      { name: "Workafloat AI", href: "https://workafloat-ai.vercel.app" },
      { name: "ContenGen AI", href: "https://contengen-ai.vercel.app/" },
      { name: "TerraNovoa AI", href: "https://terranovoa-ai.vercel.app/" },
      { name: "VisualAIze", href: "https://visualaize-vert.vercel.app/" },
      { name: "LernKarte AI", href: "https://lernkarte-ai.vercel.app/" },
      { name: "Geldify AI", href: "https://geldify-ai.vercel.app/" },
      { name: "PruneUrl", href: "https://prune-url.vercel.app/" },
      { name: "Resumesque AI", href: "https://resumesque-ai.vercel.app/" },
      { name: "Orqly AI", href: "https://orqly-ai.vercel.app/" },
      {
        title: "Rocliq",
        href: "https://rocliq.vercel.app/",
      },
      {
        title: "DigiRech",
        href: "https://digirech.vercel.app/",
      },
      {
        title: "Rosetta",
        href: "https://rosetta-bookmark.vercel.app/",
      },
    ],
  },
  {
    title: "Blogs",
    links: [
      { name: "Devverse", href: "https://devverse-astro.vercel.app/" },
      {
        name: "The Atlas Boulevard",
        href: "https://the-atlas-boulevard.vercel.app/",
      },
      {
        name: "Ich Spreche Deutsch",
        href: "https://ich-spreche-deutsch.vercel.app/",
      },
      {
        name: "Je Parle Francais",
        href: "https://je-parle-francais.vercel.app/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
];

export const SIDEBAR_LINKS: Link[] = [
  { href: "/dashboard", label: "Dashboard", icon: ChartPieIcon },
  { href: "/dashboard/campaigns", label: "Campaigns", icon: MegaphoneIcon },
  { href: "/dashboard/analytics", label: "Analytics", icon: LineChartIcon },
  { href: "/dashboard/posts", label: "Posts", icon: MessageSquareTextIcon },
  { href: "/dashboard/engagement", label: "Engagement", icon: UsersIcon },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCardIcon },
  { href: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];
