import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="section">
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-between gap-10">
        {/* Left content */}
        <div className="flex xl:flex-col justify-between flex-col-reverse">
          <div>
            <h1 className="mt-8">We are a digital agency from Lisbon.</h1>
            <p className="mt-6 text-2xl">
              Elevating brands through creative digital solutions, proudly
              representing Lisbon's vibrant innovation.
            </p>
          </div>
          <div className="mt-6 xl:mt-0">
            <Image
              src="/vector.svg"
              alt="vector icon"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>

        {/* Right image */}
        <div className="mt-8">
          <Image
            className="rounded-[16px] w-full h-auto object-cover"
            src="/hero.svg"
            alt="hero image"
            width={550}
            height={550}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
