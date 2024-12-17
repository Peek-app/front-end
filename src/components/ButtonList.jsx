import Link from "next/link";

import buttonListPets from "../../public/buttonListPets.json";

console.log(buttonListPets[0].buttonList);

export default function ButtonList() {
  return (
    <>
      {buttonListPets[0].buttonList.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.to}
            className="w-full sm:w-32 h-12 bg-white p-4 rounded-full flex justify-center sm:justify-normal items-center gap-2"
          >
            <span className="text-neutral-700 text-xs">{item.text}</span>
            <img
              className="w-[24px] h-[24px]"
              alt={item.text}
              src={item.icon}
            />
          </Link>
        );
      })}
    </>
  );
}
