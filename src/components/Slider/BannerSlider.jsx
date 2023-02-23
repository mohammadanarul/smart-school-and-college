import { Typography } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";

const BannerSlider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="text-center">
            <Typography variant="h1">Welcome to our School</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              soluta, porro cum dolor sunt corporis dolore corrupti. Quos quis
              ipsum ad ducimus deserunt nulla pariatur laudantium ullam soluta
              quasi, quia nam sit vero quam quisquam, illo suscipit magnam
              possimus officia! Soluta possimus dolores odio saepe temporibus
              omnis suscipit eos reiciendis.
            </Typography>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="text-center">
            <Typography variant="h1">Our School opportunity</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              soluta, porro cum dolor sunt corporis dolore corrupti. Quos quis
              ipsum ad ducimus deserunt nulla pariatur laudantium ullam soluta
              quasi, quia nam sit vero quam quisquam, illo suscipit magnam
              possimus officia! Soluta possimus dolores odio saepe temporibus
              omnis suscipit eos reiciendis.
            </Typography>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="text-center">
            <Typography variant="h1">Now Admit our School</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              soluta, porro cum dolor sunt corporis dolore corrupti. Quos quis
              ipsum ad ducimus deserunt nulla pariatur laudantium ullam soluta
              quasi, quia nam sit vero quam quisquam, illo suscipit magnam
              possimus officia! Soluta possimus dolores odio saepe temporibus
              omnis suscipit eos reiciendis.
            </Typography>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
