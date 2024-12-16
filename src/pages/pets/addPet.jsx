import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

import AddPetForm from "./addPetForm";

export default function addPets() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-center">
      <article onClick={openModal} className="cursor-pointer">
        <FaPlusCircle className="text-4xl" />
      </article>
      {isModalOpen && <AddPetForm onClose={closeModal} />}
    </div>
  );
}
