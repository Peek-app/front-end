import { useState } from "react";
import clsx from "clsx";

import { BsGrid, BsCalendar4Week } from "react-icons/bs";
import {
  MdOutlineFindInPage,
  MdOutlinePets,
  MdOutlineSettings,
  MdHelpOutline,
} from "react-icons/md";

import sideBar from "../../../public/sideBar.json";

const iconMap = {
  BsGrid: BsGrid,
  BsCalendar4Week: BsCalendar4Week,
  MdOutlineFindInPage: MdOutlineFindInPage,
  MdOutlinePets: MdOutlinePets,
};

export default function SideBar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <aside
      className={clsx(
        "h-[100vh] fixed bg-gradient-landing pt-5 top-[0px] min-w-[80px] text-center transition-all duration-300 ease-in-out",
        {
          "pr-8 pl-8": hoveredIndex !== null,
        }
      )}
    >
      <div className="items-center h-screen flex flex-col justify-between">
        <div className="text-white">
          <h2 className="text-white font-urbanist font-bold text-[25px]">
            peek
          </h2>
          <nav className="pt-[155px]">
            <ul className="flex flex-col justify-center items-center gap-5">
              {sideBar[0].user.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <li
                    className="flex items-center justify-center gap-4 cursor-pointer w-full h-[40px]"
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-[24px] h-[24px]" />
                    ) : null}
                    {hoveredIndex === index && (
                      <span className="text-lg">{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="text-white pb-10 flex flex-col justify-center items-center gap-11">
          <MdOutlineSettings className="w-[24px] h-[24px]" />
          <MdHelpOutline className="w-[24px] h-[24px]" />
        </div>
      </div>
    </aside>
  );
}
