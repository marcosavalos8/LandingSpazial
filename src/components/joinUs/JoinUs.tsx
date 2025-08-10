"use client";
import { motion } from "framer-motion";
import SharedButton from "../shared/SharedButton";

const generateDistributedRandomColors = () => {
  const colors = [];
  const hueStep = 360 / 9;

  for (let i = 0; i < 9; i++) {
    const hue = Math.floor(i * hueStep + Math.random() * hueStep);
    colors.push(`hsl(${hue}, 70%, 70%)`);
  }

  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  return colors;
};

const randomColorsLeft = generateDistributedRandomColors();
const randomColorsRight = generateDistributedRandomColors();

// Acomodo por filas
const rows = [[0], [1, 2], [3, 4], [5], [6, 7], [8]];

// Variants para la animación
const blockVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, type: "spring", stiffness: 120 },
  }),
};

// Función para el ancho de cada bloque
const getWidth = (row: number[], indexInRow: number) => {
  if (row.length === 1) {
    if (indexInRow === 0 && row[0] === 0) return "141px";
    if (row[0] === 5) return "406px";
    if (row[0] === 8) return "343px";
  }
  return "175px";
};

export default function JoinUs() {
  return (
    <section className="w-full py-10 flex flex-col items-center">
      <div className="flex w-full items-center justify-between gap-8">
        {/* Columna izquierda */}
        <div className="hidden md:flex flex-col justify-center gap-4 items-start">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-4 w-full ${
                rowIndex === 0 ? "justify-center" : "justify-start"
              }`}
            >
              {row.map((colorIndex, i) => (
                <motion.div
                  key={colorIndex}
                  className="rounded-lg"
                  style={{
                    backgroundColor: randomColorsLeft[colorIndex],
                    height: "72px",
                    width: getWidth(row, i),
                  }}
                  variants={blockVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={rowIndex + i}
                />
              ))}
            </div>
          ))}
        </div>

        {/*  Texto central */}
        <div className="flex flex-col items-center justify-center text-center px-4 max-w-xl">
          <h2 className="text-5xl font-bold text-[#2C2A2A] dark:text-slate-200">
            Join Us
          </h2>
          <p className="mt-2 text-[#2C2A2A] dark:text-slate-300 font-medium text-2xl">
            Send us your resume and we’ll get in touch with you
          </p>
          <div className="mt-8">
            <SharedButton text="Send here" href="#" color="verdePastel" />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="hidden md:flex flex-col justify-center gap-4 items-end">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-4 w-full ${
                rowIndex === 0 ? "justify-center" : "justify-end"
              }`}
            >
              {row.map((colorIndex, i) => (
                <motion.div
                  key={colorIndex}
                  className="rounded-lg"
                  style={{
                    backgroundColor: randomColorsRight[colorIndex],
                    height: "72px",
                    width: getWidth(row, i),
                  }}
                  variants={blockVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={rowIndex + i}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
