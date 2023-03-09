import { Typography } from "@material-tailwind/react";
import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <div className="text-center">
      <Typography variant="h2">{children}</Typography>
    </div>
  );
};

export default SectionHeading;
