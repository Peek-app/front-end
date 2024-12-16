import { useState } from "react";
import AddPet from "./addPet";
import ShowAllPets from "./showAllPets";

export default function Pets() {
  const [refresh, setRefresh] = useState(false);

  const refreshPets = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <main className="flex flex-col md:flex-row flex-wrap justify-center p-4">
      <div className="w-full md:w-1/3 p-2 flex items-stretch">
        <ShowAllPets refresh={refresh} />
      </div>
      <div className="w-full md:w-1/3 p-2 flex items-stretch">
        <AddPet onPetAdded={refreshPets} />
      </div>
    </main>
  );
}
