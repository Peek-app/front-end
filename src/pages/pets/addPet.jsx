import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import AddPetForm from "./addPetForm";

export default function addPets({ onPetAdded }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white flex items-center justify-center rounded-2xl h-24 lg:h-56 p-8 shadow-md">
      <article onClick={openModal} className="cursor-pointer">
        <FaPlusCircle className="text-6xl text-congress-950" />
      </article>
      {isModalOpen && (
        <AddPetForm onClose={closeModal} onPetAdded={onPetAdded} />
      )}
    </div>
  );
}
