import ButtonJoinNow from "./ButtonJoinNow";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-landing p-10 roboto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <section className="lg:col-span-7 space-y-8">
          <div>
            <h4 className="text-2xl font-bold">Peek</h4>
            <p className="font-semibold">
              Cuidando de tus mascotas con amor y tecnología
            </p>
          </div>
          <div>
            <p>
              En Peek, nos comprometemos a proteger la privacidad de nuestros
              usuarios. La información personal proporcionada será utilizada
              únicamente para mejorar nuestros servicios y nunca será compartida
              sin tu consentimiento, salvo en casos que lo requiera la ley. Para
              más información sobre cómo manejamos tus datos personales, te
              invitamos a leer nuestro Aviso de Privacidad completo.
            </p>
          </div>
          <div>
            <p>© 2024 Peek. Todos los derechos reservados.</p>
          </div>
        </section>
        <section className="lg:col-span-5 flex flex-col items-end justify-between">
          <div className="flex justify-end w-full pt-20">
            <ButtonJoinNow>¡Únete ahora!</ButtonJoinNow>
          </div>
          <div className="flex space-x-4 text-2xl mt-4 justify-end w-full">
            <FaInstagram />
            <FaFacebook />
          </div>
        </section>
      </div>
    </footer>
  );
}
