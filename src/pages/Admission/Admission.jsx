import { Button, Checkbox, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";


const Admission = () => {
  const [admit, setAdmit] = useState(true);
  const navigate = useNavigate();
  return (

    <>
      <Navigation />

      <div className="container mx-auto">
        <Typography variant="h2">Admission Rules and Regulation</Typography>
        <div className="grid grid-cols-2 gap-4">
          <div className="py-5">
            <Typography variant="h3" className="border-bottom-1 border">
              Requirement Rules
            </Typography>
            <ul className="list-disc">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ul>
          </div>
          <div className="py-5">
            <Typography variant="h3" className="border border-bottom-10 ">
              Optional Rules
            </Typography>
            <ul>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ul>
          </div>
        </div>

        <div className="admission-area my-5">
          <Checkbox

            className="focus:border-teal-600 target:border-teal-600 focus:outline-0 border-spacing-0"

            onChange={() => setAdmit(!admit)}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to this Rules & Regulations
              </Typography>
            }

            containerProps={{ className: "-ml-2.5" }}

          />
          <br />

          <Button
            className="bg-teal-500"
            disabled={admit ? true : false}
            onClick={() => navigate("/admission/admission-form")}
          >
            Admit Now
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admission;
