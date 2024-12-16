import { MdOutlineMedicalServices } from "react-icons/md";

import ProfileImagePet from "@/components/ProfileImagePet";
import Calendar from "@/components/Calendar";
import ButtonList from "@/components/ButtonList";
import EventHighlight from "@/components/EventHighlight";
import PetName from "@/components/PetName";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Mascotas() {
  return (
    <DashboardLayout>
      <div className="pl-24 pr-3 bg-gray-100">
        <PetName name="Nombre de mascota" />
        <div className="grid grid-cols-10 gap-8">
          <div className="col-span-10 lg:col-span-3 items">
            <div className="flex flex-col gap-8">
              <div className="w-full relative ">
                <ProfileImagePet />
              </div>
              <div className="w-full bg-white shadow-md rounded-lg p-9 text-black">
                <Calendar />
              </div>
            </div>
          </div>
          <div className="col-span-10 lg:col-span-7">
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 lg:col-span-8 flex flex-col w-full gap-8">
                    <div className="min-h-20 bg-congress-100 rounded-full flex items-center justify-center gap-6">
                      <ButtonList />
                    </div>
                    <div className="flex gap-8 justify-between">
                      <EventHighlight />
                      <EventHighlight />
                      <EventHighlight />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4 bg-white rounded-3xl shadow-md w-full">
                    s
                  </div>
                </div>
              </div>
              <div className="w-full bg-white shadow-md rounded-lg p-9 ">
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
      </div>
    </DashboardLayout>
  );
}
