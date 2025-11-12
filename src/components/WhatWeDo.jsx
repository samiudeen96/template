import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="section">
      <div className="flex items">
        <div className="w-4/12">
          <h6>WHAT WE DO</h6>
        </div>

        <div className="border"></div>

        <div className="w-8/12 p-6">
          <div className="flex mb-6">
            <div className="flex-1 p-4">
              <div className="">
                <Image
                  src="/whatwedo/vector1.svg"
                  alt="logo"
                  width={60}
                  height={60}
                  priority
                />
                <div>
                  <h4 className="mt-6">BRANDING</h4>
                  <p className="mt-2">
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l"></div>
            <div className="flex-1 p-4">
              <div className="">
                <Image
                  src="/whatwedo/vector2.svg"
                  alt="logo"
                  width={60}
                  height={60}
                  priority
                />
                <div>
                  <h4 className="mt-6">DESIGN</h4>
                  <p className="mt-2">
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b"></div>

          <div className="flex  mt-6">
            <div className="flex-1 p-4">
              <div className="">
                <Image
                  src="/whatwedo/vector3.svg"
                  alt="logo"
                  width={60}
                  height={60}
                  priority
                />
                <div>
                  <h4 className="mt-6">VIDEO</h4>
                  <p className="mt-2">
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-l"></div>
            <div className="flex-1 p-4">
              <div className="">
                <Image
                  src="/whatwedo/vector4.svg"
                  alt="logo"
                  width={60}
                  height={60}
                  priority
                />
                <div>
                  <h4 className="mt-6">CONTENT</h4>
                  <p className="mt-2">
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
