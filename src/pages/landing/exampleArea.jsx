import Image from "next/image";
import { MdOutlinePets } from "react-icons/md";

export default function ExampleArea() {
  return (
    <main className="h-landingExampleArea grid grid-cols-1 py-20 lg:grid-cols-12 lg:gap-8 bg-gradient-landing text-white">
      <section className="lg:col-start-2 lg:col-span-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-5xl font-bold text-orange-500">
            Crea El Perfil Digital De Tus Compañeros
          </h2>
        </div>
        <div className="text-3xl font-bold pr-28">
          <h3>
            Toda la información que necesitas y{" "}
            <span className="text-congress-300">más</span>
          </h3>
        </div>

        <div className="font-bold pr-28">
          <h4 className="text-3xl inline-flex items-center">
            <MdOutlinePets className="mr-3" />
            En un sólo lugar
          </h4>
          <p className="text-lg">
            Vacunas, historial clínico, alergias, cuidados especiales. etc.
          </p>
        </div>
        <div className="font-bold pr-28">
          <h4 className="text-3xl inline-flex items-center">
            <MdOutlinePets className="mr-3" />
            Perfil social
          </h4>
          <p className="text-lg">
            Muestra a todos a tu compañero, comparte sus logros
          </p>
        </div>
      </section>
      <section className="lg:col-start-7 lg:col-span-5 relative h-full">
        <Image
          src="/ExampleCards.png"
          alt="perro en caja"
          width={800}
          height={600}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          className="absolute inset-0 w-full h-full object-contain"
          priority
        />
      </section>
    </main>
  );
}
