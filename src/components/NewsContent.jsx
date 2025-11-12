import { latestNews } from "@/lib/constant";
import React from "react";
import Card from "./Card";

const NewsContent = () => {
  return (
    <div className="section">
      <div className="grid grid-cols-3 gap-8">
        {latestNews.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsContent;
