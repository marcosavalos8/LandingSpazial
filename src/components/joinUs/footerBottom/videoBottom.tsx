"use client";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const VideoBottom = () => {
  return (
    <div className="">
      <div className="relative w-full min-h-screen">
        {/* Video */}
        <video
          src="/videos/people.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* aqui meto el formulario */}
        <div className="absolute inset-0 flex justify-center items-center p-12 text-white overflow-auto">
          <div className="bg-white max-w-md w-full shadow-lg p-8 rounded-lg text-black z-20">
            <h2 className="text-center text-lg font-bold mb-2">
              Mándanos tu curriculum y nos pondremos en contacto contigo
            </h2>

            {/* Nombre */}
            <label className="block text-sm font-semibold mb-1">Nombre</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mb-4 p-3 rounded-lg bg-gray-200 placeholder-gray-400 focus:outline-none"
            />

            {/* Email */}
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mb-4 p-3 rounded-lg bg-gray-200 placeholder-gray-400 focus:outline-none"
            />

            {/* A qué aplicas */}
            <label className="block text-sm font-semibold mb-1">
              A que aplicas
            </label>
            <select className="w-full mb-4 p-3 rounded-lg bg-gray-200 text-gray-500 focus:outline-none">
              <option>selection</option>
              <option>Opción 1</option>
              <option>Opción 2</option>
            </select>

            {/* Adjuntar curriculum */}
            <label className="block text-sm font-semibold mb-2">
              Adjuntar curriculum
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
              {/* Icono de nube */}
              <div className="flex justify-center mb-2">
                <FaCloudUploadAlt className="text-blue-500 text-4xl" />
              </div>

              {/* Texto */}
              <p className="text-sm text-gray-800 mb-4">
                Browse and choose the files you want to upload from your
                computer
              </p>

              {/* Input personalizado */}
              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <FaPlus className="text-xs" />
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Botón enviar */}
            <button className="w-1/2 mx-auto bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition block">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBottom;
