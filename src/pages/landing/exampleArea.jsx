import Image from "next/image";

export default function ExampleArea() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8 bg-congress-950">
      <section className="lg:col-start-2 lg:col-span-4">
        <h2>Crea El Perfil Digital De Tus Compañeros</h2>
        <div>
          <div>
            <h3>
              Toda la información que necesitas y <span>más</span>
            </h3>
          </div>
          <div>
            <h4>En un sólo lugar</h4>
            <p>
              Vacunas, historial clínico, alergias, cuidados especiales. etc.
            </p>
          </div>
          <div>
            <h4>Perfil social</h4>
            <p>Muestra a todos a tu compañero, comparte sus logros</p>
          </div>
          <div>
            <h4>Veterinarios</h4>
            <p>Encuentra a un veterinario y programa una cita.</p>
          </div>
        </div>
      </section>
      <section className="lg:col-start-7 lg:col-span-6">
        <Image
          src="/ExampleCards.png"
          alt="perro en caja"
          layout="fill"
          objectFit="cover"
          className="h-full object-cover"
        />
      </section>
    </main>
  );
}
