import React from "react";
import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";
import SectionHeading from "../../components/Utils/SectionHeading";

const EBook = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <SectionHeading>This is E-Book page</SectionHeading>
      </div>
      <Footer />
    </>
  );
};

export default EBook;
