import { Card, CardHeader, Typography } from "@material-tailwind/react";
import React, { useLayoutEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../../assets/front-data";

import { Footer } from "../../components/FooterArea/FooterArea";
import { Navigation as NavigationBar } from "../../components/Navbar/Navigation";


const Notice = () => {
  const [notice, setNotice] = useState({});
  useLayoutEffect(() => {
    setNotice(reviews[0]);
  }, []);
  console.log(notice);
  return (
    <>
      <NavigationBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-3">
            <Typography variant="h2">{notice.name}</Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              obcaecati debitis molestiae expedita illo accusamus quia deleniti,
              praesentium nihil quaerat inventore est voluptate incidunt?
              Ratione cum numquam maiores adipisci fugit quis porro cumque vero
              voluptate, velit possimus veritatis itaque atque molestias quos
              fuga non ex incidunt necessitatibus id nulla beatae quam?
              Aspernatur exercitationem enim nesciunt at praesentium alias quo
              minus nisi! Minima deleniti eaque eveniet recusandae perferendis
              excepturi, nisi illo distinctio. Quaerat quibusdam, reiciendis
              nulla nam, consequatur voluptate dignissimos laboriosam ut fugit
              totam cupiditate fugiat nisi facere nesciunt dolore a earum harum
              ab? Repudiandae accusamus natus ratione. Sit, veritatis fugit.
            </p>
          </div>
          <div>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              pagination={true}
              loop={true}
              direction={"vertical"}
              // breakpoints={{
              //   640: {
              //     slidesPerView: 1,
              //     spaceBetween: 20,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //     spaceBetween: 20,
              //   },
              //   1024: {
              //     slidesPerView: 2,
              //     spaceBetween: 30,
              //   },
              // }}
              modules={[Pagination, Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              style={{ height: "80vh" }}
            >
              {reviews.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  onClick={() => setNotice(item)}
                  className="cursor-pointer"
                >
                  <Card shadow={false} className="w-full p-4 ">
                    <CardHeader
                      color="transparent"
                      floated={false}
                      shadow={false}
                      className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                      <div className="">
                        <div className="">
                          <Typography variant="h5" color="blue-gray">
                            {item.name}
                          </Typography>
                        </div>
                        <Typography color="blue-gray">
                          Frontend Lead @ Google
                        </Typography>
                      </div>
                    </CardHeader>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notice;
