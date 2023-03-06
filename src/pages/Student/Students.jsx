import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

const Students = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <Card className="my-5 p-5">
          <div className="flex flex-row justify-between ">
            <Typography for="underline_select" class="sr-only">
              Option Select
            </Typography>
            <select
              id="underline_select"
              class="block py-2.5 px-0  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>One</option>
              <option value="US">Two</option>
              <option value="CA">Three</option>
              <option value="FR">Four</option>
              <option value="DE">Five</option>
            </select>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <Card className="p-3">
            <Typography variant="h2">Hello world</Typography>
            <CardBody>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus facilis, doloremque incidunt quo molestias commodi?
                Porro consequatur incidunt nam perferendis!
              </Typography>
            </CardBody>
          </Card>
          <Card className="p-3">
            <Typography variant="h2">Hello world</Typography>
            <CardBody>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus facilis, doloremque incidunt quo molestias commodi?
                Porro consequatur incidunt nam perferendis!
              </Typography>
            </CardBody>
          </Card>
          <Card className="p-3">
            <Typography variant="h2">Hello world</Typography>
            <CardBody>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus facilis, doloremque incidunt quo molestias commodi?
                Porro consequatur incidunt nam perferendis!
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Students;
