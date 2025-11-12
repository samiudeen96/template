import Image from "next/image";
import React from "react";
import Button from "./Button";

const TemplateContent = ({ content }) => {
  return (
    <div className="section justify-between flex flex-col lg:flex-row gap-8" >
      <div className="lg:w-7/12 lg:h-96 flex flex-col justify-between md:gap-6">
        <div>
          <h6 className="">{content.title}</h6>
          <h2 className="mt-2">
            {content.text1}
          </h2>
        </div>

        <Image src={content.image} alt="logo" width={85} height={85} priority />

      </div>

      <div className="border"></div>

      <div className="lg:w-4/12 h-96  flex flex-col justify-between">
        <p className="text-2xl">{content.text2}</p>

        {/* <button className="button">{content.buttonText}</button> */}
        {/* <div className="mt-6"> */}
            <Button>{content.buttonText}</Button>
          {/* </div> */}
      </div>
    </div>
  );
};

export default TemplateContent;
