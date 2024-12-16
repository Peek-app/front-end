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
    <div className="bg-white rounded-lg p-20 flex items-center justify-center max-w-64">
      <article onClick={openModal} className="cursor-pointer">
        <FaPlusCircle className="text-6xl text-congress-950" />
      </article>
      {isModalOpen && (
        <AddPetForm onClose={closeModal} onPetAdded={onPetAdded} />
      )}
    </div>
  );
}
