import { Button, Card, CardHeader } from "@material-tailwind/react";
import React from "react";

const BenefitsItem = ({ item }) => {
  return (
    <Card className="text-center py-5">
      <div className=" -mt-16">
        <CardHeader className=" rounded-full  w-36 h-36 m-auto p-5">
          <img src={item.img} alt={item.title} className="h-full w-full  " />
        </CardHeader>
      </div>
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Button className="mx-auto bg-rose-50 text-teal-800  hover:bg-teal-800 hover:text-rose-50 duration-300 flex items-center ">
        Read more
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Button>
    </Card>
  );
};

export default BenefitsItem;
