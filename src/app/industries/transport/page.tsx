import Highways from "./highways";
import Railways from "./railways";
import Ports from "./ports";

export default function Transport() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <a className="text-xl font-bold">Transport</a>

      {/* Contenedor horizontal para los dos componentes */}
      <div className="flex w-full justify-between gap-8">
        <Highways />
        <Railways />
        <Ports />
      </div>
    </div>
  );
}
