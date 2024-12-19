import Pets from "../pets";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { MdPets } from "react-icons/md";

export default function DashboardOwner() {
  return (
    <DashboardLayout>
      <div className="bg-gray-100 ml-20 p-8 grid gap-4 grid-cols-1 lg:grid-cols-12 ">
        <div className="grid grid-cols-subgrid gap-4 md:grid-cols-2  lg:col-span-3 xl:col-span-2 lg:grid-cols-1 ">
          <div className="h-44 lg:h-96 bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-congress-950">PERFIL USER bonito</h2>
          </div>
          <div className="min-h-16 lg:h-80 bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-congress-950">Proximas citas</h2>
          </div>
        </div>
        <div className="grid grid-cols-subgrid gap-4 md:grid-cols-2  lg:col-span-9 xl:col-span-10 lg:grid-cols-3 lg:content-center">
          <div className="md:col-span-2 lg:col-span-3  lg:row-span-1 text-3xl font-urbanist max-w-md text-congress-950 mb-5">
            <h2 className="text-orange-500">
              <span>Te damos la Bienvenida</span>{" "}
              <span className="text-congress-950">
                ¡Comienza a administrar tu perfil!
              </span>
            </h2>
            <div className="text-congress-950 flex gap-2 mt-5">
              <MdPets className="bg-white rounded-full text-4xl p-2" />
              <span>Mis mascotas</span>
            </div>
          </div>
          <Pets />
        </div>
      </div>
    </DashboardLayout>
  );
}
