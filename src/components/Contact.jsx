import React from "react";
import TemplateContent from "./TemplateContent";

const Contact = () => {
  const content = {
    title: "Contact",
    text1: "Let’s bring your brand to the next level",
    text2:
      "Together, let's elevate your brand to new heights by unleashing its full potential and captivating your target audience.",
    buttonText: "GET IN TOUCH",
    image: "/whatwedo/Vector2.svg",
  };

  return (
    <div>
      <TemplateContent content={content} />
    </div>
  );
};

export default Contact;
