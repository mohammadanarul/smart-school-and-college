import React from "react";
import BenefitsItem from "./BenefitsItem";

const data = [
  {
    title: "Fast Support",
  },
  {
    title: "What we do",
  },
  {
    title: "Creative Ideas",
  },
];

const Benefits = () => {
  return (
    <div className="lg:container mx-auto my-10">
      <div className="benefitsArea grid grid-cols-3 gap-4">
        {data.map((item) => (
          <BenefitsItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
