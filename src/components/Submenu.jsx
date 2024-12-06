import { BsChevronUp } from "react-icons/bs";

export default function Submenu() {
  return (
    <div className="flex gap-2 flex-col p-4 absolute w-[234px] bg-white right-[28px] border border-gray-50 rounded-[5px] top-[70px] font-roboto">
      <BsChevronUp className="absolute top-[-15px] right-[37%] w-[20px] h-[20px] text-gray-50 " />
      <span className="text-[#404040]">Correo</span>
      <span className="text-[#404040] border-t-[1px] pt-1">
        Tipo de usuario / otra cosa
      </span>
    </div>
  );
}
