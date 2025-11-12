import React from "react";
import Slider from "./Slider";

const Clients = () => {
  return (
    <div className="section border-t overflow-hidden relative">
      <div className="flex flex-col xl:flex-row items-center xl:items-center gap-6">
        
        {/* Title */}
        <div className="w-full xl:w-2/12 text-center xl:text-start">
          <h6 className="">
            OUR CLIENTS
          </h6>
        </div>

        {/* Divider (hidden on mobile/tablet) */}
        <div className="hidden xl:block border h-10 me-8"></div>

        {/* Slider */}
        <div className="flex-1 w-full">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Clients;
