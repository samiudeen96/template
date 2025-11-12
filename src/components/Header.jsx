import Image from "next/image";
import React from "react";
import { menu, media } from "@/lib/constant";

const Header = () => {
  return (
    <div className=" pb-8 flex items-center justify-between">
      <div className="flex items-center content-center gap-4">
        <Image
          src="/icon.svg"
          alt="logo"
          width={50}
          height={50}
          priority
        />
        <h5 className="">FYLLA</h5>
      </div>

      <div className="flex gap-6">
        <ul className="flex items-center gap-6 text-[14px]">
          {menu.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>

          <button className="button">LET'S TALK</button>

          <div className="border"></div>

          <div className="media flex items-center gap-2">
            {media.map((item, index)=>(
              <button key={index} className="rounded-full border text-[12px] w-6 h-6 cursor-pointer">{item.label}</button>
            ))}
          </div>

      </div>
    </div>
  );
};

export default Header;
