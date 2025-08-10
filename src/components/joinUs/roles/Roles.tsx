"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { roles, RoleType } from "@/data/roles";

const Roles = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [listHeight, setListHeight] = useState(0); // Estado para guardar la altura de la lista
  const listRef = useRef<HTMLDivElement>(null); // Ref para medir el contenedor de la lista

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + roles.length) % roles.length);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % roles.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevSlide();
      else if (event.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    const measureHeight = () => {
      if (listRef.current) {
        setListHeight(listRef.current.offsetHeight);
      }
    };
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, [roles]);

  const getPositionStyle = (index: number) => {
    const offset = index - activeIndex;
    const total = roles.length;
    let position = offset;
    if (offset > total / 2) position -= total;
    else if (offset < -total / 2) position += total;

    // Ajustar datos dependiendo de como se quiera la apariencia del slider
    const isVisible = Math.abs(position) <= 3;
    const translateX = position * 45;
    const scale = position === 0 ? 1 : 0.8;
    const rotateY = position * 4;
    const translateY = Math.abs(position) * -14;

    return {
      transform: `perspective(1000px) translateX(${translateX}%) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex: total - Math.abs(position),
      opacity: isVisible ? 1 : 0,
      transition: "all 0.4s ease-in-out",
    };
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-16 overflow-hidden text-black">
      <div ref={listRef} className="hidden lg:flex flex-col gap-4 items-start">
        {roles.map((role: RoleType, index: number) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center cursor-pointer gap-3 px-4 py-2 border rounded-full text-left text-sm transition-all duration-300 ${
              activeIndex === index
                ? `border-transparent shadow-lg text-black font-semibold ${role.color}`
                : "bg-white dark:bg-slate-700 border-gray-300 text-gray-700 dark:text-slate-200 dark:hover:bg-slate-800 hover:bg-gray-200"
            }`}
          >
            <LiaArrowCircleRightSolid size={20} className="flex-shrink-0" />
            <span>{role.title}</span>
          </button>
        ))}
      </div>

      {/* Columna Derecha */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="relative w-full"
          style={{ height: listHeight > 0 ? `${listHeight}px` : "450px" }}
        >
          {roles.map((role: RoleType, index: number) => (
            <motion.div
              key={index}
              className="absolute w-48 sm:w-56 md:w-64 h-full top-0 left-0 right-0 bottom-0 m-auto cursor-pointer"
              style={getPositionStyle(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div
                  className={`
      absolute bottom-4 left-4 right-4 
      rounded-xl p-3 text-center
      font-semibold text-white
      backdrop-blur-sm transition-all duration-300
      ${
        activeIndex === index
          ? "opacity-100 bg-black/30"
          : "opacity-50 bg-black/60"
      }
    `}
                >
                  {role.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;
