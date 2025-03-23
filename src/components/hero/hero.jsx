import React from "react";
import { Spotlight } from "../ui/spotlight";
import { cn } from "../../../lib/utils";

export function Hero() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-blue-300 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          From Learning to Building -
          <br /> For Real.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center font-lightx text-3xl text-neutral-300">
          <span className="font-semibold text-blue-300">
            Amity’s First Azure Student Chapter 
          </span>
            - Where real projects take shape, code meets creativity, and ambitious
          ideas turn into groundbreaking solutions. No fluff, no limits—just
          hands-on learning and real-world innovation.
        </p>
      </div>
    </div>
  );
}
