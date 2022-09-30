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
      <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-accent group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
        {children}
      </span>
    </div>
  );
}

export default Button;
