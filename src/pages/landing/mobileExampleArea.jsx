import clsx from "clsx";
import Image from "next/image";
import { MdOutlinePets } from "react-icons/md";

export default function MobileExampleArea({ className }) {
  return (
    <main
      className={clsx(
        "h-landingExampleArea grid grid-cols-1 py-10 bg-gradient-landing text-white",
        className
      )}
    >
      <div>
        <h2 className="text-3xl text-center font-bold text-orange-500 px-8">
          Crea El Perfil Digital De Tus Compañeros
        </h2>
      </div>
      <div className="relative w-full h-96">
        <Image
          src="/ExampleCards2.png"
          alt="Ejemplo de cards"
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
      </div>
      <section className="flex flex-col justify-between h-full px-8">
        <div className="text-2xl font-bold pb-4">
          <h3>
            Toda la información que necesitas y{" "}
            <span className="text-congress-300">más</span>
          </h3>
        </div>
        <div className="font-bold pb-4">
          <h4 className="text-2xl inline-flex items-center">
            <MdOutlinePets className="mr-3" />
            En un sólo lugar
          </h4>
          <p className="text-lg">
            Vacunas, historial clínico, alergias, cuidados especiales. etc.
          </p>
        </div>
        <div className="font-bold">
          <h4 className="text-2xl inline-flex items-center">
            <MdOutlinePets className="mr-3" />
            Perfil social
          </h4>
          <p className="text-lg">
            Muestra a todos a tu compañero, comparte sus logros
          </p>
        </div>
      </section>
    </main>
  );
}
