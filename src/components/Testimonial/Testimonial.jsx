import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { reviews } from "../../assets/front-data";

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Navigation, EffectCoverflow, Pagination, Autoplay]}
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        navigation
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper h-auto"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="candice wu"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      {item.name}
                    </Typography>
                    {/* <div className="5 flex items-center gap-0">
                      <StarIcon className="h-5 w-5 text-yellow-700" /> 
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                      <StarIcon className="h-5 w-5 text-yellow-700" />
                    </div> */}
                  </div>
                  <Typography color="blue-gray">
                    Frontend Lead @ Google
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I found solution to all my design needs from Creative
                  Tim. I use them as a freelancer in my hobby projects for fun!
                  And its really affordable, very humble guys !!!&quot;
                </Typography>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
