import React from "react";
import BenefitsItem from "./BenefitsItem";

const data = [
  {
    title: "School Bus",
    img: "http://localhost:5173/images/school-bus.svg",
  },
  {
    title: "School Hostel",
    img: "http://localhost:5173/images/hostel.svg",
  },
  {
    title: "Research Lab",
    img: "http://localhost:5173/images/lab.svg",
  },
];

const Benefits = () => {
  return (
    <div className="lg:container mx-auto my-20">
      <div className="benefitsArea grid grid-cols-3 gap-4">
        {data.map((item) => (
          <BenefitsItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
