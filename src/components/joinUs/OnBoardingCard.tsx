"use client";

import React from "react";
import Image from "next/image";
import OnBoardingButton from "./OnBoardingButton";

const getImageGridClasses = (count: number): string => {
  switch (count) {
    case 1:
      return "grid-cols-1 grid-rows-1";
    case 2:
      return "grid-cols-1 md:grid-cols-2";
    case 4:
      return "grid-cols-2 grid-rows-3";
    default:
      return "grid-cols-1";
  }
};

interface OnBoardingCardProps {
  images: string[];
  isImageRight?: boolean;
  title: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  buttonText: string;
  buttonLink: string;
}

const OnBoardingCard = ({
  images,
  isImageRight = false,
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  buttonText,
  buttonLink,
}: OnBoardingCardProps) => {
  const imageCount = images.length;
  if (imageCount !== 1 && imageCount !== 2 && imageCount !== 4) {
    console.warn("El componente es´ta creado para ser tipo 1, 2 y 4 imagenes");
  }

  const imageGridClasses = getImageGridClasses(imageCount);

  const containerClasses = `
    flex flex-col md:flex-row gap-12 md:gap-16
    ${!isImageRight ? "md:flex-row-reverse" : ""}
  `;

  return (
    <div className={containerClasses}>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 text-lg dark:text-slate-300">
          {paragraph1}
        </p>
        {paragraph2 && (
          <p className="text-gray-600 mb-4 text-lg dark:text-slate-300">
            {paragraph2}
          </p>
        )}
        {paragraph3 && (
          <p className="text-gray-600 mb-4 text-lg dark:text-slate-300">
            {paragraph3}
          </p>
        )}
        <OnBoardingButton
          text={buttonText}
          href={buttonLink}
          className="mt-6"
        />
      </div>

      <div className="w-full lg:w-1/2">
        {imageCount > 0 && (
          <div className={`grid h-full ${imageGridClasses} gap-4`}>
            {images.slice(0, 4).map((src, index) => {
              let spanClass = "";
              if (imageCount === 4) {
                if (index === 0 || index === 2) {
                  spanClass = "row-span-2";
                }
              }

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg shadow-lg ${spanClass}`}
                >
                  <Image
                    src={src}
                    alt={`${title} image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnBoardingCard;
