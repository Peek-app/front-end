import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { MdOutlineMedicalServices } from "react-icons/md";

import ProfileImagePet from "@/components/ProfileImagePet";
import Calendar from "@/components/Calendar";
import ButtonList from "@/components/ButtonList";
import EventHighlight from "@/components/EventHighlight";
import PetName from "@/components/PetName";
import DashboardLayout from "@/Layouts/DashboardLayout";

import { getPet } from "../api/services/pets/crudPet";

export default function Mascotas() {
  const [pet, setPet] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    getPet(id)
      .then((data) => {
        setPet(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(pet, "pet");
  return (
    <DashboardLayout>
      <div className="pl-24 pr-3 bg-gray-100">
        <PetName name={pet.name} />
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <div className="w-full md:w-[40%]">
            <div className="flex flex-col gap-8">
              <div className="w-full relative ">
                <ProfileImagePet image={pet.picture} />
              </div>
              <div className="w-full bg-white shadow-md rounded-2xl p-9 text-black">
                <Calendar />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 md:w-[60%]">
            <div className="flex flex-wrap lg:flex-nowrap  gap-8">
              <div className="w-full lg:w-[65%] flex gap-8 flex-col">
                <div className="min-h-20 bg-unset sm:bg-congress-100 rounded-2xl flex items-center justify-center gap-6 flex-wrap sm:flex-nowrap">
                  <ButtonList />
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-8 justify-between">
                  <EventHighlight title="Carnet" icon />
                  <EventHighlight
                    title="Vacunas"
                    percentage="0%"
                    subtitle="puestas"
                    gradient
                  />
                  <EventHighlight
                    title="Última visita"
                    percentage="0"
                    subtitle="días"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[35%] bg-white shadow-md rounded-2xl p-9 ">
                Actividad
              </div>
            </div>
            <div className="w-full bg-white shadow-md rounded-2xl p-9 ">
              <div className="flex flex-col items-center justify-center gap-3">
                <MdOutlineMedicalServices className="w-20 h-20 text-congress-700" />
                <span className="text-congress-700 text-lg font-roboto font-bold">
                  Historial Médico.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
