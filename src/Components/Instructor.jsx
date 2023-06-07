import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Card } from "flowbite-react";
import img from "../assets/instructor.jpg";
const Instructor = () => {
  return (
    <div className="my-28">
      <h2 className="text-5xl text-center pb-10">Our Popular Instructors</h2>
      <div className="p-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={img}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Noteworthy technology acquisitions 2021</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </p>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={img}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Noteworthy technology acquisitions 2021</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </p>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={img}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Noteworthy technology acquisitions 2021</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </p>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={img}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Noteworthy technology acquisitions 2021</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </p>
            </Card>
          </SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Instructor;
