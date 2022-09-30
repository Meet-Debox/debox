import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  disabled?: boolean;
};

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <div
      onClick={disabled ? () => {} : onClick}
      className="relative inline-block group focus:outline-none focus:ring cursor-pointer w-fit"
    >
      <span className="relative inline-block px-4 text-[0.6rem] font-bold tracking-widest text-black uppercase border-[0.8px] border-current group-active:text-opacity-75 duration-300 transition-colors hover:bg-black hover:text-white">
        {children}
      </span>
    </div>
  );
}

export default Button;
