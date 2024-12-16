import { useEffect, useState } from "react";
import clsx from "clsx";
import { getAllPets } from "@/pages/api/services/pets/getAllPets";

export default function ShowAllPets({ refresh }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPets() {
      setLoading(true);
      try {
        const petsData = await getAllPets();
        setPets(Array.isArray(petsData) ? petsData : []);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, [refresh]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      {pets.length === 0 ? (
        <section
          className={clsx("bg-gray-200 rounded-2xl p-6 text-center text-white")}
        >
          Aun no tienes mascotas agregadas
        </section>
      ) : (
        <section className="flex flex-wrap sm:flex-nowrap gap-7">
          {pets.map((pet) => (
            <div
              key={pet._id}
              className="bg-cover bg-center rounded-2xl p-6 text-white w-full md:min-w-64 min-h-56"
              style={{ backgroundImage: `url(${pet.picture})` }}
            >
              <h2 className="text-xl font-bold">{pet.name}</h2>
              <p>{pet.typeAnimal}</p>
            </div>
          ))}
        </section>
      )}
    </article>
  );
}
