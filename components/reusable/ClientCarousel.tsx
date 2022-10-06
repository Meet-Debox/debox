import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import I1 from "../../public/Logo/01.jpg";
import I2 from "../../public/Logo/02.jpg";
import I3 from "../../public/Logo/03.jpg";
import I4 from "../../public/Logo/04.jpg";
import I5 from "../../public/Logo/05.jpg";
import I6 from "../../public/Logo/06.jpg";
import I7 from "../../public/Logo/07.jpg";
import I8 from "../../public/Logo/08.jpg";
import I9 from "../../public/Logo/09.jpg";
import I10 from "../../public/Logo/10.jpg";
import I11 from "../../public/Logo/11.jpg";
import I12 from "../../public/Logo/12.jpg";
import I13 from "../../public/Logo/13.jpg";
import I14 from "../../public/Logo/14.jpg";
import I15 from "../../public/Logo/15.jpg";
import I16 from "../../public/Logo/16.jpg";
import I17 from "../../public/Logo/17.jpg";
import I18 from "../../public/Logo/18.jpg";
import I19 from "../../public/Logo/19.jpg";
import I20 from "../../public/Logo/20.jpg";
import I21 from "../../public/Logo/21.jpg";
import I22 from "../../public/Logo/22.jpg";
import I23 from "../../public/Logo/23.jpg";
import I24 from "../../public/Logo/24.jpg";
import I25 from "../../public/Logo/25.jpg";
import I26 from "../../public/Logo/26.jpg";
import I27 from "../../public/Logo/27.jpg";
import I28 from "../../public/Logo/28.jpg";
import I29 from "../../public/Logo/29.jpg";
import I30 from "../../public/Logo/30.jpg";
import I31 from "../../public/Logo/31.jpg";
import I32 from "../../public/Logo/32.jpg";
import I33 from "../../public/Logo/33.jpg";
import I34 from "../../public/Logo/34.jpg";
// import I0 from "../../public/Logo/34.jpg";
import { EffectFade, Navigation, Autoplay } from "swiper";

const clients = [
  I1,
  I2,
  I3,
  I4,
  I5,
  I6,
  I7,
  I8,
  I9,
  I10,
  I11,
  I12,
  I13,
  I14,
  I15,
  I16,
  I17,
  I18,
  I19,
  I20,
  I21,
  I22,
  I23,
  I24,
  I25,
  I26,
  I27,
  I28,
  I29,
  I30,
  I31,
  I32,
  I33,
  I34,
];

function ClientCarousel() {
  return (
    <div className="cont text-center mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        speed={7000}
        grabCursor
        freeMode={true}
        autoplay={{
          delay: 1,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay]}
        breakpoints={{
          510: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          750: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          900: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
        }}
        className=""
      >
        {clients.map((img: any) => (
          <SwiperSlide
            key={img}
            className="self-center flex justify-center items-center"
          >
            <div className="w-40 p-4">
              <Image
                src={img}
                className="h-full w-full aspect-w-3 aspect-h-1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientCarousel;
