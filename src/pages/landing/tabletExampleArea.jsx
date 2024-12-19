import clsx from "clsx";
import Image from "next/image";
import { MdOutlinePets } from "react-icons/md";

export default function TabletExampleArea({ className }) {
  return (
    <main
      className={clsx("py-20 bg-gradient-landing text-white p-16", className)}
    >
      <section className="space-y-10">
        <div>
          <h2 className="text-4xl font-bold text-orange-500">
            Crea El Perfil Digital De Tus Compañeros
          </h2>
        </div>
        <div className="text-2xl font-bold pr-28">
          <h3>
            Toda la información que necesitas y{" "}
            <span className="text-congress-300">más</span>
          </h3>
        </div>
        <article className="flex flex-row space-x-8">
          <div className="font-bold pr-4">
            <h4 className="text-2xl inline-flex items-center">
              <MdOutlinePets className="mr-3" />
              En un sólo lugar
            </h4>
            <p className="text-base">
              Vacunas, historial clínico, alergias, cuidados especiales. etc.
            </p>
          </div>
          <div className="font-bold pr-4">
            <h4 className="text-2xl inline-flex items-center">
              <MdOutlinePets className="mr-3" />
              Perfil social
            </h4>
            <p className="text-base">
              Muestra a todos a tu compañero, comparte sus logros
            </p>
          </div>
        </article>
      </section>
      <section className="relative w-full h-96 mt-8">
        <Image
          src="/ExampleCards.png"
          alt="perro en caja"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          className="object-contain"
          priority
        />
      </section>
    </main>
  );
}
