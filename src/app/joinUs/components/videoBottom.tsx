"use client";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const VideoBottom = ({ id }: { id?: string }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [puesto, setPuesto] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Por favor adjunta tu CV en PDF.");
      return;
    }

    setLoading(true);
    setSuccessMsg("");

    try {
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("email", email);
      formData.append("puesto", puesto);
      formData.append("file", file);

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccessMsg("✅ Tu formulario se envió correctamente.");
        // Reseteo de estados
        setNombre("");
        setEmail("");
        setPuesto("");
        setFile(null);
      } else {
        alert("❌ Error al enviar el formulario.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id={id}>
      <div className="relative w-full min-h-screen">
        <video
          src="/videos/people.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-center p-12 text-white overflow-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-md w-full shadow-lg p-8 rounded-lg text-black z-20"
          >
            <h2 className="text-center text-lg font-bold mb-2">
              Mándanos tu curriculum y nos pondremos en contacto contigo
            </h2>

            {/* Nombre */}
            <label className="block text-sm font-semibold mb-1">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg bg-gray-200 placeholder-gray-400 focus:outline-none"
              required
            />

            {/* Email */}
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg bg-gray-200 placeholder-gray-400 focus:outline-none"
              required
            />

            {/* Puesto */}
            <label className="block text-sm font-semibold mb-1">
              A qué aplicas
            </label>
            <select
              value={puesto}
              onChange={(e) => setPuesto(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg bg-gray-200 text-gray-500 focus:outline-none"
              required
            >
              <option value="">Selecciona una opción</option>
              <option>Digital Marketing</option>
              <option>Business Consulting</option>
              <option>Product Management</option>
              <option>Presales</option>
              <option>Artificial Intelligence Specialist</option>
              <option>Mobile Solutions Specialist</option>
              <option>Frontend Implementation</option>
              <option>Backend Implementation</option>
            </select>

            {/* Adjuntar CV */}
            <label className="block text-sm font-semibold mb-2">
              Adjuntar curriculum (PDF)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
              <div className="flex justify-center mb-2">
                <FaCloudUploadAlt className="text-blue-500 text-4xl" />
              </div>
              <p className="text-sm text-gray-800 mb-4">
                Selecciona tu archivo PDF
              </p>
              <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <FaPlus className="text-xs" />
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
              {file && (
                <p className="mt-2 text-sm text-green-600">📄 {file.name}</p>
              )}
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 mx-auto bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition block"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>

            {/* Mensaje de éxito */}
            {successMsg && (
              <p className="mt-4 text-green-600 text-center">{successMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoBottom;
