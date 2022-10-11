import React from "react";
import Image, { StaticImageData } from "next/image";
import TransBtn from "../TransBtn";

function Hero({
  bannerImg,
  industry,
  title,
  logoImg,
}: {
  bannerImg: StaticImageData;
  industry: string;
  logoImg: StaticImageData;
  title: string;
}) {
  return (
    <>
      <div className="h-screen">
        {/* <img src={post.img[1]} alt="" srcset="" /> */}
        <Image layout="fill" className="h-screen w-screen" src={bannerImg} />
      </div>
      <div className="max-w-7xl mx-auto grid place-items-center">
        <div className="font-size pt-8 max-w-2xl z-10 bg-white md:px-20 -mt-60 mx-auto text-center pb-8 md:pb-20">
          <TransBtn size="sm">{industry}</TransBtn>
          <h4 className="font-heading font-bold mt-8 mb-20 text-xl md:text-3xl">
            {title}
          </h4>
          <div className="space-y-3">
            <p className="text-sm uppercase font-bold">Client</p>
            <Image height={140} width={150} src={logoImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
