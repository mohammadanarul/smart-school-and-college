import React from "react";
import SectionHeading from "../Utils/SectionHeading";
import ToperCard from "./TopperCard";

const toper = [
  {
    title: "Topper Of the School",
    name: "Assaduzzaman Khondoker",
    img: "https://www.ssgmce.ac.in/team-xtreme/teamstruct/AnasKhan.jpg",
    class: "Ten",
  },
  {
    title: "Best Player Of the All Game",
    name: "Anita Khan",
    img: "https://i.pinimg.com/736x/d0/7a/f6/d07af684a67cd52d2f10acd6208db98f.jpg",
    class: "Nine",
  },
  {
    title: "Best Researcher ",
    name: "Siddukur Rahman",
    img: "https://i.pinimg.com/736x/76/d6/24/76d6246b12ced2da89610c40b8e85090.jpg",
    class: "Intermediate",
  },
];

const Topper = () => {
  return (
    <div>
      <div className="container mx-auto">
        <SectionHeading>Topper Of The Year 2023</SectionHeading>
        <div className="py-20 grid grid-cols-3 gap-6">
          {toper.map((student, idx) => (
            <ToperCard student={student} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topper;
