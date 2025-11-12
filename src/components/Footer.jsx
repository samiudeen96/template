import { media } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="section">
      <div className=" flex flex-col lg:flex-row">
        <div className="lg:w-4/12 xl:h-60 gap-8 flex flex-col justify-between border-b lg:border-b-0 pb-8 lg:pb-0">

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

        <div className="lg:w-8/12 lg:border-l">
          <div className="grid xl:grid-cols-3 grid-cols-1 lg:ms-12">
            <div className="border-b xl:border-b-0 pb-8 xl:pb-0">
              <h5 className="pt-8 lg:pt-0">Pages</h5>
              <ul className="flex flex-col gap-4 mt-6">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>STUDIO</li>
                <li>CONTACT</li>
              </ul>
            </div>

            <div className="border-b xl:border-b-0 pb-8 xl:pb-0">
              <h5 className="pt-8 xl:pt-0">CMS</h5>
              <ul className="flex flex-col gap-4 mt-6">
                <li>HOME</li>
                <li>SERVICES</li>
                <li>STUDIO</li>
                <li>CONTACT</li>
              </ul>
            </div>

            <div className="pt-8 xl:pt-0">
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
