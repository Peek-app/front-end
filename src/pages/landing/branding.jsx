import Image from "next/image";
import ButtonJoinNow from "@/components/ButtonJoinNow";

export default function Branding() {
  return (
    <article className="relative w-full h-96">
      <Image
        src="/ImagenBranding.png"
        alt="perro en caja"
        layout="fill"
        objectFit="cover"
        className="h-full object-cover"
      />
      <section className="absolute top-0 left-0 w-full h-full grid grid-cols-12 pl-8">
        <div className="col-span-12 md:col-span-3  p-4">
          <h1 className="text-[#1a202c] text-128px font-black">peek</h1>
          <h5 className="text-[#1a202c] text-2xl font-black">
            Cuida a tu <span className="text-orange-500">componañero</span>{" "}
            <br /> como se merece
          </h5>
          <div className="py-6">
            <ButtonJoinNow>
              <span className="material-symbols-outlined pr-2">&#xe91d;</span>
              ¡Únete ahora!
            </ButtonJoinNow>
          </div>
        </div>
      </section>
    </article>
  );
}
