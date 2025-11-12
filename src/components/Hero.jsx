import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="section">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <h1 className="">
              We are a digital <br /> agency from <br /> Lisbon.
            </h1>
            <p className="mt-6 text-2xl">
              Elevating brands through creative digital solutions, <br />
              proudly representing Lisbon's vibrant <br /> innovation.
            </p>
          </div>
          <div>
            <Image
              src="/vector.svg"
              alt="logo"
              width={40}
              height={50}
              priority
            />
          </div>
        </div>
      {/* </div>

      <div className="flex-1"> */}
        <Image
          className="rounded-[16px]"
          src="/hero.svg"
          alt="logo"
          width={650}
          height={650}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
