import { Typography } from "@material-tailwind/react";
import { Card, Carousel } from "flowbite-react";
import React from "react";

const Testimonial = () => {
  return (
    <div className="">
      <div className="h-96 mb-5">
        <div className="testimonial-heading lg:container mx-auto">
          <Typography variant="h2" className="text-center">
            Testimonial
          </Typography>
        </div>
        <Carousel slide={true} className="lg:container mx-auto">
          <div className=" flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Card
              horizontal={true}
              imgSrc="http://localhost:5173/images/alia.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Card
              horizontal={true}
              imgSrc="http://localhost:5173/images/rashmika.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Card
              horizontal={true}
              imgSrc="http://localhost:5173/images/anushka.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
