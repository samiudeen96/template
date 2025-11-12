"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { slider } from "@/lib/constant";

const Slider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 6,
        arrows: false, // hide arrows
        pagination: false, // hide dots
        gap: "2rem", // adds spacing between logos
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
          1024: { perPage: 5 },
          768: { perPage: 4 },
          640: { perPage: 3 },
        },
      }}
      extensions={{ AutoScroll }}
      className="w-full"
    >
      {slider.map((item, index) => (
        <SplideSlide key={index}>
          <div className="flex items-center justify-center h-24">
            <Image
              src={item.image}
              alt="logo"
              width={item.width}
              height={item.height}
              className="object-contain max-h-16"
              priority
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
