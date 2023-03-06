const slide = [
  {
    id: 1,
    name: "Welcome To Our School",
    image: "http://localhost:5173/images/undraw_back_to_school_inwc.svg",
  },
  {
    id: 2,
    name: "Our School Building ",
    image: "http://localhost:5173/images/building.svg",
  },
  {
    id: 3,
    name: "Library Room",
    image: "http://localhost:5173/images/undraw_bookshelves_re_lxoy.svg",
  },
];
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import "./styles.css";

// import required modules
import { Button, Typography } from "@material-tailwind/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function BannerSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper bg-rose-100"
      >
        {slide.map((item) => (
          <SwiperSlide>
            <div className="container mx-auto">
              <div className="flex items-center h-50 py-5">
                <div>
                  <Typography variant="h2">{item.name}</Typography>
                  <Typography variant="paragraph" className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia ex cum, error atque aspernatur magnam dolores nesciunt
                    et numquam nobis! Minus, magnam ab, natus voluptatibus
                    perspiciatis vero veniam accusamus a iure reprehenderit ex
                    dignissimos debitis sint fuga deserunt soluta qui hic
                    corrupti eos iusto sed totam doloremque aspernatur. Cumque,
                    praesentium?
                  </Typography>
                  <Button className="flex items-center mt-3">
                    View More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </div>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
