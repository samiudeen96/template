import Image from "next/image";
import React from "react";

const Card = ({ item }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
        <Image
          src={item.image}
          alt={item.label || "card image"}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-white text-xl font-syne tracking-wide">
            View
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="font-syne mt-4 text-2xl">{item.label}</p>
      {item.sub ? <h5>{item.sub}</h5> : ""}
    </div>
  );
};

export default Card;
