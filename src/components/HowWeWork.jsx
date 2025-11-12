import React from "react";
import TemplateContent from "./TemplateContent";

const HowWeWork = () => {
  const content = {
    title: "How we work",
    text1: "We help our clients succeed with innovative strategies.",
    text2:
      "Through careful analysis, creative thinking, and a deep understanding of their goals, we empower businesses to surpass expectations and thrive in today's dynamic and competitive landscape.",
    buttonText: "OUR SERVICES",
    image: "/whatwedo/Vector4.svg",
  };

  return (
    <div>
      <TemplateContent content={content} />
    </div>
  );
};

export default HowWeWork;
