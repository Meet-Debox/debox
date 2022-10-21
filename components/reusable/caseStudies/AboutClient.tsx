import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading";

function AboutClient({
  sideImg,
  aboutJsx,
}: {
  sideImg: StaticImageData;
  aboutJsx: () => React.ReactNode;
}) {
  return (
    <section className="relative cont">
      <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 lg:place-items-center">
        <div className="relative sm:py-16 lg:py-0 lg:order-2 overflow-clip">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 xl:left-auto lg:top-0"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-primary"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-10">
            <div className="relative overflow-hidden max-h-[28rem] flex items-center">
              <Image
                height={855}
                width={812}
                objectFit="contain"
                className="h-full w-full absolute inset-0 top-0 left-0"
                src={sideImg}
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="pt-12 sm:pt-16 lg:pt-10">
            <Heading>About the Client</Heading>
            <div className="mt-6 text-black space-y-6 text-justify">
              {aboutJsx()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutClient;
