import React from "react";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading";

function TimelineInfo({
  timelineImg,
  timeline,
  projInfo,
}: {
  timelineImg: StaticImageData;
  timeline: string;
  projInfo: string;
}) {
  return (
    <section className="relative cont bg-light">
      <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start overflow-clip mx-auto w-10/12">
        <div className="relative sm:py-16 lg:py-0 lg:order-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-0"
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
            <div className="relative overflow-hidden max-h-96">
              {/* <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        /> */}
              <Image
                objectPosition={"bottom bottom"}
                objectFit="contain"
                className="h-full w-full absolute inset-0 top-0 left-0 max-h-96"
                src={timelineImg}
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 ">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20 text-justify space-y-20 ">
            <div className="space-y-4">
              <Heading>Project Timeline</Heading>
              <p>{timeline}</p>
            </div>
            <div className="space-y-4">
              <Heading>Project Info</Heading>
              <p>{projInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineInfo;
