import { Card } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Admit = () => {
  const handleAdmit = () => {
    useNavigate("/admission");
  };
  return (
    <div className="lg:container mx-auto py-10">
      <Card>
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Now, You can Admit your Child to our School
        </h5>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Stay up to date and move work forward with Flowbite on iOS & Android.
          Download the app today.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-lg bg-teal-500 px-4 py-2.5 text-white hover:bg-rose-600  focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
          >
            <svg
              fill="none"
              stroke="currentColor"
              className="mr-3 h-7 w-7"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              ></path>
            </svg>
            <div className="text-left">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Existing Student
              </div>
            </div>
          </a>
          <Link
            to="/admission"
            className=" bg-rose-600 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-white hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
          >
            <svg
              fill="none"
              className="mr-3 h-7 w-7"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            <div className="text-left">
              <div className="-mt-1 font-sans text-sm font-semibold">
                Admission Now
              </div>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Admit;
