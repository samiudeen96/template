import React from "react";
import Slider from "./Slider";

const Clients = () => {
  return (
    <div className="section border-t overflow-hidden relative">
      <div className="flex items-center">
        <div className="w-2/12">
            <h6 className="">OUR CLIENTS</h6>
        </div>
        <div className="border h-15 me-8"></div>
        <Slider />
      </div>
    </div>
  );
};

export default Clients;
