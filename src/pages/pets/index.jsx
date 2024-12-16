import AddPet from "./addPet";
import ShowAllPets from "./showAllPets";

export default function Pets() {
  return (
    <main className="flex flex-col md:flex-row flex-wrap justify-center p-4">
      <div className="w-full md:w-1/3 p-2 flex items-stretch">
        <ShowAllPets />
      </div>
      <div className="w-full md:w-1/3 p-2 flex items-stretch">
        <AddPet />
      </div>
    </main>
  );
}
