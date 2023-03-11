import { Typography } from "@material-tailwind/react";
import React from "react";
import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";

const Event = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Typography variant="h2">There is No Event here</Typography>
      </div>
      <Footer />
    </>
  );
};

export default Event;
