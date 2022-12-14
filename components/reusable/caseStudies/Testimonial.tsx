import React from "react";
import Heading from "../Heading";
import Image from "next/image";

function Testimonial({ list }: { list: any[] }) {
  return (
    <div>
      {list.map((el: any) => (
        <div
          key={el.by}
          className="cont max-w-5xl mx-auto space-y-8 text-center w-10/12"
        >
          <Heading>Testimonial</Heading>
          <div className="relative">
            <span className="italic relative">
              <svg
                className="absolute top-0 left-0 transform -translate-x-6 md:-translate-x-8 -translate-y-4 h-5 w-5 md:h-6 md:w-6 text-accent"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              {el.content}
              <svg
                className="absolute bottom-0 right-0 transform translate-x-10 -translate-y-1 h-5 w-5 md:h-6 md:w-6 text-accent rotate-180"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </span>
          </div>

          <div className="flex items-center justify-center gap-7">
            <div>
              <Image
                alt={el.by + " Reviewing Debox"}
                className="rounded-full shadow-md"
                height={150}
                width={150}
                src={el.img}
              />
            </div>
            <div className="relative">
              <h6 className="font-bold text-left sm:text-center">{el.by}</h6>
              <h6 className="text-left">{el.designation}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonial;
