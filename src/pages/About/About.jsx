import { Typography } from "@material-tailwind/react";
import React from "react";

import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Typography variant="h2">This is About Page</Typography>
      </div>
      <Footer />
    </>
  );
};

export default About;
