import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  size?: string;
  onClick?: (e?: any) => void;
  disabled?: boolean;
  active?: boolean;
};

function Button({
  size = "md",
  children,
  onClick,
  disabled,
  active = false,
}: ButtonProps) {
  return (
    <div
      onClick={disabled ? () => {} : onClick}
      className="relative inline-block group focus:outline-none focus:ring cursor-pointer w-fit"
    >
      <span
        className={`${size === "sm" && "px-4 text-[0.6rem] border-[0.8px]"}
        ${size === "md" && "px-5 py-3 text-md border-2"}
        relative inline-block font-bold tracking-widest text-black uppercase border-current group-active:text-opacity-75 duration-200 transition-colors hover:bg-gray-300 hover:text-black ${
          active && "!bg-black !text-white"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default Button;
