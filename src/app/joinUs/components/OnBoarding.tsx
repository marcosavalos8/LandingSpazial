"use client";
import React from "react";
import OnBoardingCard from "./OnBoardingCard";

const professionalsData = {
  title: "Professionals",
  paragraph1:
    "If you have experience, you will go through an onboarding process at our company where we will introduce you to our culture, your team, and our products so you can gain a comprehensive understanding of what we do.",
  paragraph2:
    "Your contribution, based on your knowledge and experience, is essential to our teams and the future of our products.",
  paragraph3:
    "Practical innovation lies in your mind, your knowledge, and your experience.",
  buttonText: "Apply Now",
  buttonLink: "/professionals-apply",
  images: ["/onBoard/imagen1.png", "/onBoard/officeScene.png"],
  isImageRight: false,
};

const internshipsData = {
  title: "Internships",
  paragraph1:
    "You'll have a mentor who will guide and train you, both within the field you've applied to and in the professional environment, under a practical experience model where your ideas contribute to developing your mind and fostering teamwork.",
  buttonText: "Apply Now",
  buttonLink: "/internships-apply",
  images: [
    "/onBoard/imagen1.png",
    "/onBoard/imagen2.png",
    "/onBoard/imagen3.png",
    "/onBoard/imagen4.png",
  ],
  isImageRight: true,
};

const OnBoarding = () => {
  return (
    <div className="py-8">
      <h1 className="text-left font-bold text-[40px] mb-6 dark:text-white text-[#2C2A2A]">
        Onboarding Process
      </h1>
      <div className="mx-auto flex flex-col gap-24 mb-8">
        {/* Professionals */}
        <OnBoardingCard
          title={professionalsData.title}
          paragraph1={professionalsData.paragraph1}
          paragraph2={professionalsData.paragraph2}
          paragraph3={professionalsData.paragraph3}
          buttonText={professionalsData.buttonText}
          buttonLink={professionalsData.buttonLink}
          images={professionalsData.images}
          isImageRight={professionalsData.isImageRight}
        />

        {/*  Internships */}
        <OnBoardingCard
          title={internshipsData.title}
          paragraph1={internshipsData.paragraph1}
          buttonText={internshipsData.buttonText}
          buttonLink={internshipsData.buttonLink}
          images={internshipsData.images}
          isImageRight={internshipsData.isImageRight}
        />
      </div>
    </div>
  );
};

export default OnBoarding;
