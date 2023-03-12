import { Typography } from "@material-tailwind/react";
import React from "react";
import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";

const Routine = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Typography variant="h2">All Routine is Here</Typography>
      </div>
      <Footer />
    </>
  );
};

export default Routine;
