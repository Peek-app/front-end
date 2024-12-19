import { useEffect, useState } from "react";
import { MdPets } from "react-icons/md";
import clsx from "clsx";
import Link from "next/link";

import { getAllPets } from "@/pages/api/services/pets/getAllPets";

export default function ShowAllPets({ refresh, isLoading, setIsLoading }) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      setIsLoading(true);
      try {
        const petsData = await getAllPets();
        setPets(Array.isArray(petsData) ? petsData : []);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPets();
  }, [refresh, setIsLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <MdPets className="text-white text-6xl animate-bounce" />
      </div>
    );
  }

  return (
    <>
      {pets.length === 0 ? (
        <section
          className={clsx(
            "bg-white shadow-md rounded-2xl p-8 text-center text-white h-24 lg:h-56 flex justify-center items-center"
          )}
        >
          <h2 className="text-xl font-bold text-congress-950">
            {" "}
            Aun no tienes mascotas agregadas
          </h2>
        </section>
      ) : (
        <>
          {pets.map((pet) => (
            <Link
              href={`pets/${pet._id}`}
              key={pet._id}
              className="bg-cover bg-center rounded-2xl h-24 lg:h-56 p-8 shadow-md"
              style={{ backgroundImage: `url(${pet.picture})` }}
            >
              <h2 className="text-xl font-bold">{pet.name}</h2>
              <p>{pet.typeAnimal}</p>
            </Link>
          ))}
        </>
      )}
    </>
  );
}
