import { MdCalendarToday } from "react-icons/md";

export default function Calendar() {
  return (
    <div>
      <div className=" text-congress-700 flex flex-col items-center justify-center gap-3">
        <MdCalendarToday className="h-20 w-20" />
        <span className="text-congress-700 text-lg font-roboto font-bold">
          Próximas Citas
        </span>
      </div>
    </div>
  );
}
