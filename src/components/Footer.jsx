import { media } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="section">
      <div className="flex">
        <div className="border-r w-4/12 h-60 flex flex-col justify-between">
          <div>
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
            <p className="mt-6 text-lg">Main Street. 1 22222 Berlin</p>
          </div>

          <div className="media flex items-center gap-2">
            {media.map((item, index) => (
              <button
                key={index}
                className="rounded-full border text-[12px] w-6 h-6 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-8/12">
          <div className="grid grid-cols-3 ms-12">
            <div>
              <h5>Pages</h5>
              <ul className="flex flex-col gap-4 mt-6">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>STUDIO</li>
                <li>CONTACT</li>
              </ul>
            </div>

            <div>
              <h5>CMS</h5>
              <ul className="flex flex-col gap-4 mt-6">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>STUDIO</li>
                <li>CONTACT</li>
              </ul>
            </div>

            <div>
              <h5>Utility Pages</h5>
              <ul className="flex flex-col gap-4 mt-6">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>STUDIO</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
