import clsx from "clsx";

import { MdEventNote } from "react-icons/md";

export default function EventHighlight({
  title,
  subtitle,
  percentage,
  icon,
  gradient,
}) {
  return (
    <div
      className={clsx(
        "h-32 rounded-3xl w-full sm:w-44 bg-congress-100 flex flex-col items-center  justify-center font-roboto p-6",
        {
          "bg-gradient-landing text-congress-100": gradient,
        }
      )}
    >
      <p
        className={clsx("text-congress-950 flex items-center flex-col gap-6", {
          "text-slate-50": gradient,
        })}
      >
        {title}
        {icon && <MdEventNote className="text-gray-700 text-5xl " />}
      </p>
      <p
        className={clsx("text-5xl text-gray-700", {
          "text-slate-50": gradient,
        })}
      >
        {percentage}
      </p>
      <p
        className={clsx("text-congress-950", {
          "text-slate-50": gradient,
        })}
      >
        {subtitle}
      </p>
    </div>
  );
}
