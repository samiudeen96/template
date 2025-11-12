import { card1 } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import Card from "./Card";

const FeaturedWork = () => {
  return (
    <section className="section relative">
      <div className="flex gap-10">
        {/* Left Content (Sticky) */}
        <div className="w-5/12 self-start sticky top-5 h-fit">
          <h2 className="font-semibold text-5xl leading-tight">
            Featured <br /> Work
          </h2>

          <p className="mt-6 text-2xl leading-relaxed">
            Showcasing our standout projects that <br />
            blend creativity, strategy, and cutting-edge <br />
            design.
          </p>

          <button className="button mt-10">SEE ALL WORK</button>
        </div>

        <div className="border"></div>

        {/* Right Content (Scrollable) */}
        <div className="w-7/12 space-y-10">
          {/* First Large Card */}
          <div className="relative group w-full cursor-pointer">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/dancingStar.svg"
                alt="dancingStar"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl font-syne tracking-wide">
                  View
                </span>
              </div>
            </div>
            <p className="font-syne mt-4 text-2xl">Dancing Stars</p>
          </div>

          {/* Grid of Other Cards */}
          <div className="grid grid-cols-2 gap-6">
            {card1.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
