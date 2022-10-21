import React from "react";
import Image, { StaticImageData } from "next/image";
import TransBtn from "../TransBtn";
import useMediaQuery from "../../../hooks/useMediaQuery";

function Hero({
  bannerImg,
  industry,
  title,
  logoImg,
}: {
  bannerImg: StaticImageData | string;
  industry: string;
  logoImg: StaticImageData | string;
  title: string;
}) {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <div className="min-h-[35rem] md:h-screen max-w-[1920px]">
        {/* <img src={post.img[1]} alt="" srcset="" /> */}
        <Image
          alt={title}
          priority
          layout={isDesktop ? "fill" : "intrinsic"}
          height={isDesktop ? undefined : "1800px"}
          width={isDesktop ? undefined : "2000px"}
          src={bannerImg}
        />
      </div>
      <div className="max-w-7xl mx-auto grid place-items-center w-10/12">
        <div className="font-size pt-8 max-w-2xl z-10 bg-white md:px-20 -mt-60 mx-auto text-center pb-8 md:pb-20">
          <TransBtn size="sm">{industry}</TransBtn>
          <h4 className="font-heading font-bold mt-8 mb-8 text-xl md:text-3xl">
            {title}
          </h4>
          <div className="space-y-3">
            <p className="text-base uppercase font-bold">Client</p>
            <Image alt="" height={200} width={200} src={logoImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
