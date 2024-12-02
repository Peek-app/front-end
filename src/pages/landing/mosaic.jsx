import Image from "next/image";

export default function Mosaic() {
  return (
    <main className="bg-white px-32 py-2">
      <section>
        <h2 className="text-congress-950 text-3xl py-10">
          La plataforma que te permite{" "}
          <span className="font-bold">gestionar</span> la salud de tu <br />
          componañero de manera{" "}
          <span className="font-bold">fácil y divertida</span>
        </h2>
      </section>
      <section className="h-mosaic grid grid-cols-4 grid-rows-4 gap-4">
        {/* Columna 1, Fila 1-3 */}
        <article className="relative col-start-1 row-start-1 row-span-3">
          <Image
            src="/petMosaic1.png"
            alt="mascota mosaico 1"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="text-center p-5">
              <span className="font-bold">1</span> Crea una{" "}
              <span className="font-bold">Cuenta</span>
            </p>
          </div>
        </article>

        {/* Columna 1, Fila 4 */}
        <article className="bg-congress-950 text-white col-start-1 row-start-4 row-span-1 rounded-3xl flex items-center justify-center text-center">
          <p>
            Te Conectaremos Con Los <span>Mejores Especialistas</span>
          </p>
        </article>

        {/* Columna 2, Fila 1 */}
        <article className="bg-orange-500 col-start-2 row-start-1 row-span-1 rounded-3xl flex items-center justify-center">
          <p>
            <span className="font-bold">2</span> Agrega A Tu{" "}
            <span className="font-bold">Mascota</span>
          </p>
        </article>

        {/* Columna 2, Fila 2-4 */}
        <article className="relative col-start-2 row-start-2 row-span-3">
          <Image
            src="/petMosaic3.png"
            alt="mascota mosaico 3"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="text-center p-4">
              Gestiona Su Salud <span className="font-bold">Comparte</span> Sus
              Logros
            </p>
          </div>
        </article>

        {/* Columna 3, Fila 1-4 */}
        <article className="relative col-start-3 row-start-1 row-span-4">
          <Image
            src="/petMosaic2.png"
            alt="mascota mosaico 2"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="p-5">
              <span className="font-bold">3</span> Conecta Con Un{" "}
              <span className="font-bold">Veterinario</span>
            </p>
          </div>
        </article>

        {/* Columna 4, Fila 1-3 */}
        <article className="relative col-start-4 row-start-1 row-span-3">
          <Image
            src="/petMosaic4.jpg"
            alt="mascota mosaico 4"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <div className="relative z-10 p-4 text-congress-950">
            <p className="p-5">
              <span className="font-bold">4</span> Agenda Una{" "}
              <span className="font-bold">Cita</span>
            </p>
          </div>
        </article>

        {/* Columna 4, Fila 4 */}
        <article className="bg-congress-200 text-congress-950 col-start-4 row-start-4 row-span-1 rounded-2xl flex items-center justify-center">
          <p className="text-congress-950 p-3">
            Tu Plataforma Integral Para El Cuidado, Seguimiento{" "}
            <span className="font-bold">Y Bienestar De Tu Mascota</span>
          </p>
        </article>
      </section>
    </main>
  );
}
