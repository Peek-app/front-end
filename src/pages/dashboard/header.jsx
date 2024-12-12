import { useState } from "react";
import {
  PiBellLight,
  PiArrowDownLight,
  PiCaretDownLight,
} from "react-icons/pi";

import Avatar from "@/components/Avatar";
import Submenu from "@/components/Submenu";

export default function Header() {
  const [showDataUser, setShowDataUser] = useState(false);
  return (
    <header className=" bg-white  h-16">
      <div className="flex flex-row items-center justify-end gap-8 mr-10 h-full">
        <PiBellLight className="text-slate-900 size-8" />
        <div className="flex flex-row justify-between items-center gap-4 text-orange-500">
          <Avatar />
          <p className="">Hola, User</p>
          <PiCaretDownLight className="text size-6" />
        </div>
      </div>
    </header>
  );
}
