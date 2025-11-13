// Banner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/NNtPCHL/electricity-bill.jpg"
              alt="Electricity"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl font-bold mb-3">Pay Your Bills Easily</h2>
              <p>Manage all your utility payments from one place.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/5MkXhMm/water-bill.jpg"
              alt="Water"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl font-bold mb-3">Track Your Bills Instantly</h2>
              <p>Stay updated with your latest electricity, gas, and water bills.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/fXVVtb2/internet-bill.jpg"
              alt="Internet"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl font-bold mb-3">Save Time, Go Digital</h2>
              <p>Make your monthly payments securely online anytime, anywhere.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
