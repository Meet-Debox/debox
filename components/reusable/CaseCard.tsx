import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import TransBtn from "../reusable/TransBtn";
function CaseCard({
  industry,
  client,
  title,
  img,
  idx,
  route,
  tags,
}: {
  industry: string;
  client: string;
  title: string;
  route: string;
  img: StaticImageData[];
  idx: number;
  tags: string[];
}) {
  return (
    <div
      data-aos="fade-up"
      className={` space-y-8 place-self-center ${idx % 3 === 1 ? "" : ""}`}
      key={client}
    >
      <div className="relative">
        <div className="h-82 w-[20rem] mx-auto">
          <Image
            className="w-full h-full z-10"
            objectFit="contain"
            src={img[0]}
          />
        </div>
        <div
          className={`absolute -top-10 max-h-60 max-w-xs ${
            idx % 2 === 0 ? "right-0" : "left-0"
          }`}
        >
          <Image height={300} width={350} src={img[1]} />
        </div>
      </div>

      <div className="w-11/12 mx-auto space-y-8">
        <h5>{client}</h5>
        <Link href={route}>
          <h4 className="font-heading font-bold cursor-pointer">
            <span className="text-highlight">{title}</span>
          </h4>
        </Link>
        <div className="space-x-4">
          <Link href={"/case-studies?category=" + industry}>
            <TransBtn size="sm">{industry}</TransBtn>
          </Link>
          {tags.map((tag) => (
            <TransBtn key={tag} size="sm">
              {tag}
            </TransBtn>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
