import Image from "next/image";
import ButtonJoinNow from "@/components/ButtonJoinNow";
import { MdOutlinePets } from "react-icons/md";

export default function Branding() {
  return (
    <article className="relative w-full h-48 md:h-96">
      <Image
        src="/ImagenBranding.png"
        alt="perro en caja"
        layout="fill"
        objectFit="cover"
        className="h-full object-cover"
      />
      <section className="absolute top-0 left-0 w-full h-full grid grid-cols-12 pt-3 pl-8 md:pl-8">
        <div className="col-span-12 md:col-span-3 md:p-4">
          <h1 className="text-congress-950 text-5xl md:text-128px font-black">
            peek
          </h1>
          <h5 className="text-congress-950 text-base md:text-2xl font-black py-2 md:py-6">
            Cuida a tu <span className="text-orange-500">componañero</span>{" "}
            <br /> como se merece
          </h5>
          <div className="md:py-4">
            <ButtonJoinNow>
              <span className="pr-2">
                <MdOutlinePets />
              </span>
              ¡Únete ahora!
            </ButtonJoinNow>
          </div>
        </div>
      </section>
    </article>
  );
}
