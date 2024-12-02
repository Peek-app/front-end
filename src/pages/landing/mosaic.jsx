import Image from "next/image";

export default function Mosaic() {
  return (
    <main>
      <section>
        <h2>
          L plataforma que te permite <span>gestionar</span> la salud de tu
          componañero de manera <span>fácil y divertida</span>
        </h2>
      </section>
      <section className="grid grid-cols-1 grid-rows-1 gap-4 lg:grid-cols-4 lg:grid-rows-4">
        <article className="lg:col-span-1 lg:row-span-3">
          <Image
            src="/petMosaic1.png"
            alt="mascota mosaico 1"
            layout="fill"
            objectFit="cover"
            className="h-full object-cover"
          />
          <p>
            <span>1</span> Crea una <span>Cuenta</span>
          </p>
        </article>
        <article className="bg-orange-500 lg:col-span-1 lg:row-span-1">
          <p>
            <span>2</span> Agrega A Tu <span>Mascota</span>
          </p>
        </article>
        <article className="lg:col-span-1 lg:row-span-4">
          <Image
            src="/petMosaic2.png"
            alt="mascota mosaico 2"
            layout="fill"
            objectFit="cover"
            className="h-full object-cover"
          />
          <p>
            <span>3</span> Conecta Con Un <span>Veterinario</span>
          </p>
        </article>
        <article className="lg:col-span-1 lg:row-span-3">
          <Image
            src="/petMosaic4.jpg"
            alt="mascota mosaico 4"
            layout="fill"
            objectFit="cover"
            className="h-full object-cover"
          />
          <p>
            <span>4</span> Agenda Una <span>Cita</span>
          </p>
        </article>
        <article className="text-congress-950 lg:col-span-1 lg:row-span-1">
          <p>
            Te Conectaramos Con Los <span>Mejores Especialistas</span>
          </p>
        </article>
        <article className="lg:col-span-1 lg:row-span-3">
          <Image
            src="/petMosaic3.png"
            alt="mascota mosaico 3"
            layout="fill"
            objectFit="cover"
            className="h-full object-cover"
          />
          <p>
            Gestiona Su Salud <span>Comparte</span> Sus Logros
          </p>
        </article>
        <article className="text-congress-950 lg:col-span-1 lg:row-span-1">
          <p>
            Tu Plataforma Integral Para El Cuidado, Seguimiento{" "}
            <span>Y Bienestar De Tu Mascota</span>
          </p>
        </article>
      </section>
    </main>
  );
}
