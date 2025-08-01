import Electricity from "./electricity";
import Oil_gas from "./oil&gas";

export default function Energy() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <a className="text-xl font-bold">energy</a>

      {/* Contenedor horizontal para los dos componentes */}
      <div className="flex w-full justify-between gap-8">
        <Electricity />
        <Oil_gas />
      </div>
    </div>
  );
}
