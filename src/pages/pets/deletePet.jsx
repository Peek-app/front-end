import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";

import { deletePet } from "../api/services/pets/crudPet";

import { MdClose } from "react-icons/md";
import PrimaryButton from "@/components/PrimaryButton";

export default function DelePet({ handleDeletePet, name }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { id } = router.query;

  async function erase() {
    try {
      setLoading(true);
      const deleteFriend = await deletePet(id);
      if (deleteFriend) {
        setLoading(false);
        toast.success("Mascota eliminada con éxito");
        router.push("/");
      }
    } catch (error) {
      console.error("login", error);
      setLoading(false);
    }
  }
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-96 relative">
        <button onClick={handleDeletePet} className="absolute top-2 right-2">
          <MdClose className="text-2xl m-auto text-congress-950" />
        </button>
        <h2 className="text-congress-950 text-3xl leading-10 mb-8">
          ¿Estás seguro de querer eliminar a{" "}
          <span className="text-orange-500">{name}</span>?
        </h2>
        <PrimaryButton
          label="Eliminar Mascota"
          isSubmitting={loading}
          onClick={erase}
        />
      </div>
    </section>
  );
}
