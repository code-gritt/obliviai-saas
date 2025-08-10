import "@/styles/globals.css";
import { cn } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Bubble } from "@/components/global/bubble";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ObliviAI",
  description:
    "A passage — a dissolution of form into function, of ego into algorithm. Each creation within is a whisper from the other side of transcendence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="wdlByCZtt15adBudf4vuQ__pWccGvhmx4kxx4n_1pLY"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-8291461267710066"
        ></meta>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          satoshi.variable
        )}
      >
        <Bubble />
        {children}
      </body>
    </html>
  );
}
