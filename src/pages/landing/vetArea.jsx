import ButtonJoinNow from "@/components/ButtonJoinNow";
import { FaPlusCircle } from "react-icons/fa";

export default function VetArea() {
  return (
    <main className="bg-white grid grid-cols-1 lg:grid-cols-12 gap-4 py-10">
      <section className="lg:col-start-2 lg:col-span-5 p-10">
        <div>
          <h2 className="text-congress-950 text-5xl">
            ¿Eres <span className="text-orange-500 font-bold">veterinario</span>
            ?
          </h2>
        </div>
        <div className="text-congress-950 flex flex-col justify-center items-start space-y-8 h-full">
          <p className="text-2xl text-left">
            Forma parte de la comunidad de profesionales de{" "}
            <span className="font-bold">peek</span>, miles de usuarios te están
            buscando
          </p>
          <ButtonJoinNow>¡Únete ahora!</ButtonJoinNow>
        </div>
      </section>
      <section className="hidden md:block lg:col-start-7 lg:col-span-5 border-2 border-congress-950 rounded-3xl text-congress-950 px-24 py-16 space-y-8">
        <div className="text-4xl font-bold inline-flex items-center">
          <FaPlusCircle className="mr-3" />
          Haz crecer tu práctica veterinaria
        </div>

        <div>
          <h5 className="text-2xl">¿Cómo empezar?</h5>
          <p className="text-xl">
            Regístrate fácilmente con datos básicos. Verificaremos tu
            experiencia para garantizar que formas parte de los mejores
            profesionales en el cuidado animal.
          </p>
        </div>
        <div>
          <h5 className="text-2xl">¿Qué obtienes?</h5>
          <p className="text-xl">
            Gestiona citas e historiales clínicos con precisión. Con nuestra
            plataforma, aumenta tu alcance al ser recomendado y puntuado por tus
            clientes satisfechos. ¡Conecta con más dueños responsables!
          </p>
        </div>
      </section>
    </main>
  );
}
