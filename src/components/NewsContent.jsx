import { latestNews } from "@/lib/constant";
import React from "react";
import Card from "./Card";

const NewsContent = () => {
  return (
    <div className="section px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {latestNews.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsContent;
