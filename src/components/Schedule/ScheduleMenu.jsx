import React from "react";

const days = [
  {
    name: "Sunday",
    code: 0,
  },
  {
    name: "Monday",
    code: 1,
  },
  {
    name: "Tuesday",
    code: 2,
  },
  {
    name: "Wednesday",
    code: 3,
  },
  {
    name: "Thursday",
    code: 4,
  },
];

const ScheduleMenu = () => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 ">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center text-gray-500 dark:text-gray-400">
        {days.map((day) => (
          <li className="mr-2" key={day.code}>
            <a
              href="#"
              className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {day.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleMenu;
