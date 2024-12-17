import { useState } from "react";
import { MdPets } from "react-icons/md";

import AddPet from "./addPet";
import ShowAllPets from "./showAllPets";

export default function Pets() {
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const refreshPets = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <main className="flex flex-col md:flex-row flex-wrap justify-center p-4 h-[100vh]">
      <div className="pl-24 pr-3 bg-gray-100 w-full">
        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-10 lg:col-span-3 items">
            <div className="flex flex-col gap-8">
              <div className="w-full bg-white shadow-md rounded-lg p-9 text-black">
                Datos de usuario
              </div>
              <div className="w-full bg-white shadow-md rounded-lg p-9 text-black">
                Próximas citas
              </div>
            </div>
          </div>
          <div className="col-span-10 lg:col-span-7">
            <h2 className="text-3xl font-urbanist max-w-md text-congress-950 mb-5">
              <span className="text-orange-500">Te damos la Bienvenida</span>{" "}
              ¡Comienza a administrar tu perfil!
            </h2>
            <h2 className="text-2xl font-urbanist max-w-md text-congress-950 mb-5">
              Mis mascotas
            </h2>
            <div className="flex flex-col gap-8">
              <ShowAllPets
                refresh={refresh}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              <AddPet onPetAdded={refreshPets} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
