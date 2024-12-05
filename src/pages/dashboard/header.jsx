import { useState } from "react";

import { BsBell, BsChevronDown } from "react-icons/bs";

import Avatar from "@/components/Avatar";
import Submenu from "@/components/Submenu";

export default function Header() {
  const [showDataUser, setShowDataUser] = useState(false);
  return (
    <header className="grid grid-cols-12 gap-4 h-[80px] shadow-lg items-center">
      <div className="col-start-9 text-congress-950 text-[25px] text-right grid justify-items-end">
        <BsBell />
      </div>
      <button
        onClick={() => {
          setShowDataUser(!showDataUser);
        }}
        className="col-start-10 col-span-3 flex items-center gap-4 text-secondary-600 font-roboto font-[700] "
      >
        <Avatar />
        <span>Nombre del usuario</span>
        <BsChevronDown />
      </button>
      {showDataUser && <Submenu />}
    </header>
  );
}
