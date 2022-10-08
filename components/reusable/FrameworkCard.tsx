import React from "react";
import Heading from "./Heading";

function FrameworkCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative block min-h-96">
      <span className="absolute inset-0 border-2 border-dashed border-darkBlue bg-darkBlue"></span>

      <div className="relative flex h-full transform items-start py-4 border-2 group-hover:bg-darkBlue group-hover:text-white border-black bg-white transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
        <div className="px-8 pb-8">
          {icon}

          <h4 className="font-heading font-bold py-4">{title}</h4>

          <div className="text-base">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default FrameworkCard;
