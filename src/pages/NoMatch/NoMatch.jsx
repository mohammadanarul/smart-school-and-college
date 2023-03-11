import React from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";

const NoMatch = () => {
  return (
    <>
      <Navigation />
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <div className="flex justify-center items-center">
            <img
              src="https://education.maharashtra.gov.in/images/school-icon.png"
              alt=""
            />
          </div>
          <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </h3>
          <p className="text-gray-600">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <NavLink
            to="/"
            className="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
          >
            Go back
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoMatch;
