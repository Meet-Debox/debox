import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import I1 from "../../public/Logo/01.webp";
import I2 from "../../public/Logo/02.webp";
import I3 from "../../public/Logo/03.webp";
import I4 from "../../public/Logo/04.webp";
import I5 from "../../public/Logo/05.webp";
import I6 from "../../public/Logo/06.webp";
import I7 from "../../public/Logo/07.webp";
import I8 from "../../public/Logo/08.webp";
import I9 from "../../public/Logo/09.webp";
import I10 from "../../public/Logo/10.webp";
import I11 from "../../public/Logo/11.webp";
import I12 from "../../public/Logo/12.webp";
import I13 from "../../public/Logo/13.webp";
import I14 from "../../public/Logo/14.webp";
import I15 from "../../public/Logo/15.webp";
import I16 from "../../public/Logo/16.webp";
import I17 from "../../public/Logo/17.webp";
import I18 from "../../public/Logo/18.webp";
import I19 from "../../public/Logo/19.webp";
import I20 from "../../public/Logo/20.webp";
import I21 from "../../public/Logo/21.webp";
import I22 from "../../public/Logo/22.webp";
import I23 from "../../public/Logo/23.webp";
import I24 from "../../public/Logo/24.webp";
import I25 from "../../public/Logo/25.webp";
import I26 from "../../public/Logo/26.webp";
import I27 from "../../public/Logo/27.webp";
import I28 from "../../public/Logo/28.webp";
import I29 from "../../public/Logo/29.webp";
import I30 from "../../public/Logo/30.webp";
import I31 from "../../public/Logo/31.webp";
import I32 from "../../public/Logo/32.webp";
import I33 from "../../public/Logo/33.webp";
import I34 from "../../public/Logo/34.webp";

import { EffectFade, Navigation, Autoplay } from "swiper";

const clients = [
  { img: I1, alt: "BDO Global Accounting" },
  { img: I2, alt: "Best Roadways" },
  { img: I3, alt: "Billy Manik" },
  { img: I4, alt: "Boom Online Lottery By Khel Group" },
  { img: I5, alt: "The CAI Store" },
  { img: I6, alt: "FoxyMoron" },
  { img: I7, alt: "Gits" },
  { img: I8, alt: "Grind Master" },
  { img: I9, alt: "inRadius" },
  { img: I10, alt: "Junos Pizza" },
  { img: I11, alt: "KMG Robust Agro Products" },
  { img: I12, alt: "Kalki Fashion" },
  { img: I13, alt: "Kay Kay Embroideries" },
  { img: I14, alt: "KhelPlay Rummy" },
  { img: I15, alt: "Landmark Group" },
  { img: I16, alt: "Lookwell Makeup" },
  { img: I17, alt: "Mad Over Donuts" },
  { img: I18, alt: "Naturals Ice Cream" },
  { img: I19, alt: "Nippo Batteries" },
  { img: I20, alt: "Novita Healthcare" },
  { img: I21, alt: "PNG Jewellers" },
  { img: I22, alt: "Parazelsus Logistics" },
  { img: I23, alt: "Peakscale" },
  { img: I24, alt: "Raw Pressery" },
  { img: I25, alt: "Sanjeev - We Power Solutions" },
  { img: I26, alt: "Schbang" },
  { img: I27, alt: "Scorpio" },
  { img: I28, alt: "Sila Real Estate" },
  { img: I29, alt: "SnugRest Matresses" },
  { img: I30, alt: "SoCheers Marketing Agency" },
  { img: I31, alt: "Social Kinnect Agency" },
  { img: I32, alt: "Sugal & Damani Lotteries" },
  { img: I33, alt: "Unwrapped Fashion" },
  { img: I34, alt: "Kumar's USA Restaurant" },
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
                src={img.img}
                alt={img.alt}
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
