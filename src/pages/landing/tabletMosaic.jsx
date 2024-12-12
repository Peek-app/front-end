import Image from "next/image";
import clsx from "clsx";

export default function TabletMosaic({ className }) {
  return (
    <main className={clsx("px-32 pt-2 pb-20", className)}>
      <section>
        <h2 className="text-congress-950 font-bold text-2xl py-10">
          ¡Organiza la salud de tu compañero de <br /> manera
          <span className="font-bold text-orange-600"> fácil y divertida</span>!
        </h2>
      </section>
      <section className="h-mosaic grid grid-cols-2 grid-rows-6 gap-4">
        {/* Columna 1, Fila 1-2 */}
        <article className="relative col-start-1 row-start-1 row-span-2">
          <Image
            src="/petMosaic1.png"
            alt="mascota mosaico 1"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="text-center p-5">
              <span className="font-bold">1</span> Crea una{" "}
              <span className="font-bold">Cuenta</span>
            </p>
          </div>
        </article>

        {/* Columna 1, Fila 3 */}
        <article className="bg-congress-950 text-white col-start-1 row-start-3 row-span-1 rounded-3xl flex items-center justify-center p-2">
          <p>
            Te Conectaremos Con Los <span>Mejores Especialistas</span>
          </p>
        </article>

        {/* Columna 1, Fila 4-6 */}
        <article className="relative col-start-1 row-start-4 row-span-3">
          <Image
            src="/petMosaic2.png"
            alt="mascota mosaico 2"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="p-5">
              <span className="font-bold">3</span> Conecta Con Un{" "}
              <span className="font-bold">Veterinario</span>
            </p>
          </div>
        </article>

        {/* Columna 2, Fila 1 */}
        <article className="bg-orange-500 col-start-2 row-start-1 row-span-1 rounded-3xl flex items-center justify-center">
          <p>
            <span className="font-bold">2</span> Agrega A Tu{" "}
            <span className="font-bold">Mascota</span>
          </p>
        </article>

        {/* Columna 2, Fila 2-3 */}
        <article className="relative col-start-2 row-start-2 row-span-2">
          <Image
            src="/petMosaic3.png"
            alt="mascota mosaico 3"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="text-center p-4">
              Gestiona Su Salud <span className="font-bold">Comparte</span> Sus
              Logros
            </p>
          </div>
        </article>

        {/* Columna 2, Fila 4-5 */}
        <article className="relative col-start-2 row-start-4 row-span-2">
          <Image
            src="/petMosaic4.jpg"
            alt="mascota mosaico 4"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="p-5">
              <span className="font-bold">4</span> Agenda Una{" "}
              <span className="font-bold">Cita</span>
            </p>
          </div>
        </article>

        {/* Columna 2, Fila 6 */}
        <article className="bg-congress-200 text-congress-950 col-start-2 row-start-6 row-span-1 rounded-2xl flex items-center justify-center">
          <p className="text-congress-950 p-3">
            Tu Plataforma Integral Para El Cuidado, Seguimiento{" "}
            <span className="font-bold">Y Bienestar De Tu Mascota</span>
          </p>
        </article>
      </section>
    </main>
  );
}
