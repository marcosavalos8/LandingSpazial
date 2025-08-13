import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type ButtonColor = "azulPastel" | "verdePastel";

interface SharedButtonProps {
  text: string;
  href: string;
  color?: ButtonColor;
  className?: string;
}

const colorMap: Record<ButtonColor, { bg: string; hover: string }> = {
  azulPastel: { bg: "#90BFEF", hover: "#90BFEF" },
  verdePastel: { bg: "#ABF37D", hover: "#ABF37D" },
};

const SharedButton = ({
  text,
  href,
  color = "azulPastel",
  className = "",
}: SharedButtonProps) => {
  const { bg, hover } = colorMap[color];

  return (
    <a
      /*  href={href} */
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 font-medium
        text-black rounded-full
        transition-all duration-300 text-xl hover:scale-105 ease-in
        cursor-pointer
        bg-[${bg}] hover:bg-[${hover}]/90
        ${className}
      `}
      style={{
        backgroundColor: bg,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = `${hover}E6`)
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bg)}
      onClick={() => {
        const element = document.getElementById("video-bottom");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {text}
      <BsArrowUpRightCircleFill />
    </a>
  );
};

export default SharedButton;
