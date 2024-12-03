import { RxPerson, RxHamburgerMenu } from "react-icons/rx";
import { MdOutlinePets } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-1 bg-[#ECEADE] px-8 py-5 md:grid-cols-2 lg:grid-cols-6">
      <div className="block lg:hidden">
        <button className="text-[#0E2139] text-xl">
          <RxHamburgerMenu />
        </button>
      </div>
      <div className="hidden flex-col justify-center md:flex">
        <p className="text-black">Peek Logo</p>
      </div>
      <div className="col-span-3 hidden justify-center gap-16 font-bold text-[#0E2139] lg:flex">
        <button>Veterinarios</button>
        <button>Conocenos</button>
        <button>Contacto</button>
      </div>
      <div className="col-span-2 hidden justify-center gap-4 lg:flex">
        <button className="rounded-full bg-[#FA7A26] px-6 py-3 flex gap-2 items-center">
          <MdOutlinePets />
          <p>!Únete ahora!</p>
        </button>
        <button className="rounded-full border border-[#FA7A26] px-6 py-3 text-[#FA7A26] flex gap-2 items-center">
          <RxPerson />
          <p>Inicia sesión</p>
        </button>
      </div>
    </nav>
  );
}
