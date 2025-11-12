import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="section">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Left side title */}
        {/* <div className="lg:w-4/12 w-full">
          <h6>
            WHAT WE DO
          </h6>
        </div> */}

        <div className="w-full lg:w-3/12 text-center xl:text-start">
          <h6 className="">
            WHAT WE DO
          </h6>
        </div>

        {/* Divider (hidden on small screens) */}
        {/* <div className="hidden lg:block border-l"></div> */}

        {/* Right side content */}
        <div className="lg:w-9/12 w-full  lg:border-l lg:ps-12">
          {/* Grid instead of flex for better wrapping */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b lg:pb-6">
            {/* 1. Branding */}
            <div className="p-6 flex flex-col items-start">
              <Image
                src="/whatwedo/vector1.svg"
                alt="logo"
                width={60}
                height={60}
                priority
              />
              <h4 className="mt-4 font-semibold">BRANDING</h4>
              <p className="mt-2 text-gray-600 text-sm">
                We craft compelling brand identities that leave a lasting
                impression.
              </p>
            </div>

            {/* 2. Design */}
            <div className="p-6 flex flex-col items-start border-t lg:border-t-0 lg:border-l">
              <Image
                src="/whatwedo/vector2.svg"
                alt="logo"
                width={60}
                height={60}
                priority
              />
              <h4 className="mt-4 font-semibold">DESIGN</h4>
              <p className="mt-2 text-gray-600 text-sm">
                We craft compelling brand identities that leave a lasting
                impression.
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
            {/* 3. Video */}
            <div className="p-6 flex flex-col items-start">
              <Image
                src="/whatwedo/vector3.svg"
                alt="logo"
                width={60}
                height={60}
                priority
              />
              <h4 className="mt-4 font-semibold">VIDEO</h4>
              <p className="mt-2 text-gray-600 text-sm">
                We craft compelling brand identities that leave a lasting
                impression.
              </p>
            </div>

            {/* 4. Content */}
            <div className="p-6 flex flex-col items-start border-t lg:border-t-0 lg:border-l">
              <Image
                src="/whatwedo/vector4.svg"
                alt="logo"
                width={60}
                height={60}
                priority
              />
              <h4 className="mt-4 font-semibold">CONTENT</h4>
              <p className="mt-2 text-gray-600 text-sm">
                We craft compelling brand identities that leave a lasting
                impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
