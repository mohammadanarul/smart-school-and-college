import React from "react";
import BenefitsItem from "./BenefitsItem";

const data = [
  {
    title: "School Bus",

    img: "https://smart-school-and-college.vercel.app/images/school-bus.svg",
  },
  {
    title: "School Hostel",
    img: "https://smart-school-and-college.vercel.app/images/hostel.svg",
  },
  {
    title: "Research Lab",
    img: "http://localhost:5173images/lab.svg",
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
