import { Typography } from "@material-tailwind/react";
import React from "react";

const NoMatch = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-full">
        <div className="h-100">
          <Typography variant="h1">404</Typography>
          <Typography variant="lead">Page Not Found</Typography>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
