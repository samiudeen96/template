import Image from "next/image";
import React from "react";

const TemplateContent = ({ content }) => {
  return (
    <div className="section flex justify-between">
      <div className="w-7/12 h-96 flex flex-col justify-between">
        <div>
          <h6 className="">{content.title}</h6>
          <h2 className="font-semibold text-5xl leading-tight">
            {content.text1}
          </h2>
        </div>

        <Image src={content.image} alt="logo" width={85} height={85} priority />

      </div>

      <div className="border"></div>

      <div className="w-4/12 h-96 text-2xl flex flex-col justify-between">
        {content.text2}

        <button className="button">{content.buttonText}</button>
      </div>
    </div>
  );
};

export default TemplateContent;
