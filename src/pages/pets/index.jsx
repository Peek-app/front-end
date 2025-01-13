import { useState } from "react";

import AddPet from "./addPet";
import ShowAllPets from "./showAllPets";

export default function Pets() {
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const refreshPets = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <ShowAllPets
        refresh={refresh}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <AddPet onPetAdded={refreshPets} />
    </>
  );
}
