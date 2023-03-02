import { Typography } from "@material-tailwind/react";
import React from "react";
import HrTab from "../../components/Tabs/HrTabs";

const teachers = [
  {
    id: 1,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 12,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 11,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 13,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 2,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 3,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 4,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 5,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 6,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 7,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 8,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 9,
    name: "Abid Hassan",
    designations: "Principal",
  },
  {
    id: 10,
    name: "Abid Hassan",
    designations: "Principal",
  },
];

const Teachers = () => {
  return (
    <div className="container mx-auto">
      <Typography variant="h2">All Teacher List of school</Typography>
      <HrTab item={teachers} />
      {/* <div className="grid grid-cols-4 gap-4">
        {teachers.map((person) => (
          <Teacher key={person.id} teacher={person}></Teacher>
        ))}
      </div> */}
    </div>
  );
};

export default Teachers;
