"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-4">
      <WobbleCard
        containerClassName="col-span-1 md:col-span-2 bg-pink-800 min-h-[300px] md:min-h-[400px]"
        className="relative overflow-hidden"
      >
        <div className="max-w-xs md:max-w-sm">
          <h2 className="text-left text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-sm sm:text-base text-neutral-200">
          If someone yells "stop!", goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 md:col-span-2 lg:col-span-3 bg-blue-900 min-h-[400px] md:min-h-[300px]"
      >
        <div className="max-w-sm md:max-w-md lg:max-w-lg">
          <h2 className="text-left text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 text-left text-sm sm:text-base text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        
      </WobbleCard>
    </div>
  );
}