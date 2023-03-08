import React from "react";
import BenefitsItem from "./BenefitsItem";

const data = [
  {
    title: "School Bus",
  },
  {
    title: "School Hostel",
  },
  {
    title: "Research Lab",
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
