import { MdCalendarToday } from "react-icons/md";

export default function Calendar() {
  return (
    <div>
      <div className=" text-congress-700 flex flex-col items-center justify-center gap-3">
        <MdCalendarToday className="h-8 w-8" />
        <span className="text-neutral-700 text-xs">Próximas Citas</span>
      </div>
    </div>
  );
}
