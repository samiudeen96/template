import Image from "next/image";
import React from "react";
import { menu, media } from "@/lib/constant";

const Header = () => {
  return (
    <div className=" pb-8 flex items-center justify-between">
      <div className="flex items-center content-center gap-4">
        <Image src="/icon.svg" alt="logo" width={50} height={50} priority />
        <h5 className="">FYLLA</h5>
      </div>

      <div className="flex gap-6">
        <ul className="lg:flex items-center gap-6 text-[14px] hidden ">
          {menu.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>

        <button className="button md:block hidden">LET'S TALK</button>

        <div className="border md:block hidden"></div>

        <div className="media md:flex items-center gap-2 hidden">
          {media.map((item, index) => (
            <button
              key={index}
              className="rounded-full border text-[12px] w-6 h-6 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="lg:hidden block">
          <Image src="/menu.svg" alt="logo" width={50} height={50} priority />
        </div>
      </div>
    </div>
  );
};

export default Header;
