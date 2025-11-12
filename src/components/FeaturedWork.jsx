// import { card1 } from "@/lib/constant";
// import Image from "next/image";
// import React from "react";
// import Card from "./Card";

// const FeaturedWork = () => {
//   return (
//     <section className="section relative">
//       <div className="flex gap-10">
//         {/* Left Content (Sticky) */}
//         <div className="w-5/12 self-start sticky top-5 h-fit">
//           <h2 className="font-semibold text-5xl leading-tight">
//             Featured <br /> Work
//           </h2>

//           <p className="mt-6 text-2xl leading-relaxed">
//             Showcasing our standout projects that <br />
//             blend creativity, strategy, and cutting-edge <br />
//             design.
//           </p>

//           <button className="button mt-10">SEE ALL WORK</button>
//         </div>

//         <div className="border"></div>

//         {/* Right Content (Scrollable) */}
//         <div className="w-7/12 space-y-10">
//           {/* First Large Card */}
//           <div className="relative group w-full cursor-pointer">
//             <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
//               <Image
//                 src="/dancingStar.svg"
//                 alt="dancingStar"
//                 fill
//                 className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                 priority
//               />
//               <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <span className="text-white text-xl font-syne tracking-wide">
//                   View
//                 </span>
//               </div>
//             </div>
//             <p className="font-syne mt-4 text-2xl">Dancing Stars</p>
//           </div>

//           {/* Grid of Other Cards */}
//           <div className="grid grid-cols-2 gap-6">
//             {card1.map((item, index) => (
//               <Card item={item} key={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedWork;


import { card1 } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import Card from "./Card";

const FeaturedWork = () => {
  return (
    <section className="section relative px-4 py-12 lg:py-20">
      <div className="flex flex-col xl:flex-row gap-10">
        {/* Left Content (Sticky on large screens) */}
        <div className="xl:w-5/12 w-full self-start xl:sticky top-10 h-fit">
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Featured <br /> Work
          </h2>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
            Showcasing our standout projects that <br className="hidden xl:block" />
            blend creativity, strategy, and cutting-edge <br className="hidden xl:block" />
            design.
          </p>

          <button className="button mt-6 sm:mt-8 lg:mt-10 text-sm sm:text-base">
            SEE ALL WORK
          </button>

          <div className="border-b my-8 xl:hidden"></div>
        </div>

        {/* Divider (only visible on desktop) */}
        <div className="hidden lg:block border-l"></div>

        {/* Right Content */}
        <div className="xl:w-7/12 w-full space-y-10">
          {/* First Large Card */}
          <div className="relative group w-full cursor-pointer">
            <div className="relative w-full h-64 sm:h-80 lg:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/dancingStar.svg"
                alt="dancingStar"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-lg sm:text-xl font-syne tracking-wide">
                  View
                </span>
              </div>
            </div>
            <p className="font-syne mt-4 text-lg sm:text-xl lg:text-2xl">
              Dancing Stars
            </p>
          </div>

          {/* Grid of Other Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {card1.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
