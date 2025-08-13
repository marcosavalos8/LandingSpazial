"use client";
import React from "react";

const VideoTop = () => {
  return (
    <div className="">
      <div className="relative w-full h-[50vh]">
        {/* Video */}
        <video
          src="/videos/joinUs.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Texto y botón encima */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-12 text-white">
          <h2 className="text-4xl font-light mb-2">
            <span className="font-bold"> The Future</span> Is In Your Mind
          </h2>
          <h2 className="text-4xl font-light mb-8">
            And Its Application <span className="font-bold">In Spazial</span>
          </h2>

          <button
            onClick={() => {
              const element = document.getElementById("video-bottom");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-12 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-pink-500 transition"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTop;
