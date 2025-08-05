import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface OnBoardingButtonProps {
  text: string;
  href: string;
  className?: string;
}

const OnBoardingButton = ({
  text,
  href,
  className = "",
}: OnBoardingButtonProps) => {
  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 font-medium
        bg-[#90BFEF] text-black rounded-full
        transition-all duration-300 text-xl hover:scale-105 ease-in
        hover:bg-[#90BFEF]/90 cursor-pointer
        ${className}
      `}
    >
      {text}
      <BsArrowUpRightCircleFill />
    </a>
  );
};

export default OnBoardingButton;
