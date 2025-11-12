"use client";
import Image from "next/image";
import React, { useState } from "react";
import { menu, media } from "@/lib/constant";
import Link from "next/link";

const Header = () => {
  const [IsOpen, SetIsOpen] = useState(false);

  const showMenu = () => {};

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
          <Image
            onClick={() => SetIsOpen(true)}
            src="/menu.svg"
            alt="logo"
            width={50}
            height={50}
            priority
          />
        </div>

        {IsOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden flex flex-col transition-all duration-300">
            {/* Close Button */}
            <button
              onClick={() => SetIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-2xl hover:bg-gray-200 transition"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Logo at top */}
            <div className="flex items-center gap-3 px-6 pt-6">
              <Image
                src="/icon.svg"
                alt="logo"
                width={40}
                height={40}
                priority
              />
              <h5 className="text-xl font-semibold">FYLLA</h5>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col mt-12 px-6 gap-4">
              {menu.map((item, index) => (
                <li key={index} className="border-b border-gray-200">
                  <Link
                    href={item.href || "#"}
                    onClick={() => SetIsOpen(false)}
                    className="block py-4 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Buttons */}
            {/* <div className="flex items-center gap-3 px-6 mt-8 pb-8">
              {media.map((item, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-sm hover:bg-gray-100 transition"
                >
                  {item.label}
                </button>
              ))}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
