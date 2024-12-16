import { useEffect, useState } from "react";
import clsx from "clsx";
import { getAllPets } from "@/pages/api/services/pets/getAllPets";

export default function ShowAllPets({ refresh }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPets() {
      try {
        const data = await getAllPets();
        setPets(Array.isArray(data) ? data : []);
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
    <article className="p-4">
      {pets.length === 0 ? (
        <section
          className={clsx("bg-gray-200 rounded-2xl p-6 text-center text-white")}
        >
          Aun no tienes mascotas agregadas
        </section>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pets.map((pet) => (
            <div
              key={pet._id}
              className="bg-cover bg-center rounded-2xl p-6 text-white"
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
