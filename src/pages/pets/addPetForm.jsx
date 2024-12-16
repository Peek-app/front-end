import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPet } from "@/pages/api/services/pets/createPet";
import * as yup from "yup";
import { toast } from "sonner";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  birthday: yup.date().required("Birthday is required"),
  typeAnimal: yup.string().required("Type of animal is required"),
  breed: yup.string().required("Breed is required"),
  picture: yup.string().required("Picture URL is required"),
});

export default function AddPetForm({ onClose, onPetAdded }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createPet(data);
      toast.success("Mascota creada con éxito");
      onPetAdded();
      onClose();
    } catch (error) {
      toast.error(`Error creando mascota: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={clsx(
        "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      )}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          Close
        </button>
        <h2 className="text-2xl mb-4">Agrega a tu mascota</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className={clsx(
                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 text-black",
                {
                  "border-red-500": errors.name,
                }
              )}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Birthday
            </label>
            <input
              type="date"
              {...register("birthday")}
              className={clsx(
                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 text-black",
                {
                  "border-red-500": errors.birthday,
                }
              )}
            />
            {errors.birthday && (
              <span className="text-red-500">{errors.birthday.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Type of Animal
            </label>
            <input
              type="text"
              {...register("typeAnimal")}
              className={clsx(
                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 text-black",
                {
                  "border-red-500": errors.typeAnimal,
                }
              )}
            />
            {errors.typeAnimal && (
              <span className="text-red-500">{errors.typeAnimal.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Breed
            </label>
            <input
              type="text"
              {...register("breed")}
              className={clsx(
                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 text-black",
                {
                  "border-red-500": errors.breed,
                }
              )}
            />
            {errors.breed && (
              <span className="text-red-500">{errors.breed.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Picture URL
            </label>
            <input
              type="text"
              {...register("picture")}
              className={clsx(
                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 text-black",
                {
                  "border-red-500": errors.picture,
                }
              )}
            />
            {errors.picture && (
              <span className="text-red-500">{errors.picture.message}</span>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={clsx(
                "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                {
                  "opacity-50 cursor-not-allowed": loading,
                }
              )}
              disabled={loading}
            >
              {loading ? "Cargando..." : "Agregar Mascota"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
