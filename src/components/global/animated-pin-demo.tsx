"use client";
import React from "react";
import { PinContainer } from "./3d-pin";

interface AnimatedPinProps {
  title: string;
  subtitle: string;
  href: string;
  videoUrls: string[];
}

export function AnimatedPinDemo({
  title,
  subtitle,
  href,
  videoUrls,
}: AnimatedPinProps) {
  return (
    <div className="flex items-center justify-center">
      <PinContainer title={href} href={href}>
        <div className="flex flex-col p-3 rounded-lg shadow-lg tracking-tight text-slate-100/80 w-[18rem] h-[16rem] transition-all hover:scale-[1.02] bg-neutral-900">
          <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">
            {title}
          </h3>
          <p className="text-slate-300 text-sm line-clamp-2">{subtitle}</p>
          <div className="w-full rounded-md mt-3 flex-1 overflow-hidden">
            {videoUrls.map((url, idx) => (
              <video
                key={idx}
                src={url}
                className="rounded-md w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
