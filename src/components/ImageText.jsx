import { ourValues } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const ImageText = () => {
  return (
    <div className="section">
      <div className="flex">
        <div className="flex-1">
          <Image
            src="/ourValues.svg"
            width={500}
            height={1000}
            alt=""
            priority
          />
        </div>
        <div className="border"></div>

        <div className="flex-1">
          {ourValues.map((item, index) => (
            <div key={index}>
              <div className="flex gap-4">
                <div className="rounded-full border flex justify-center items-center w-10 h-10">
                  {item.number}
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageText;
