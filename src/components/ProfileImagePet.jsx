import Image from "next/image";
import clsx from "clsx";

import { MdOutlinePhotoCamera } from "react-icons/md";

export default function ProfileImagePet({ image }) {
  return (
    <div
      className={clsx("shadow-md rounded-lg", {
        "bg-white": !image,
      })}
    >
      {image ? (
        <>
          <div className="bg-gradient-to-r from-gray-900 to-transparent rounded-lg absolute w-full h-full z-[1]"></div>
          <Image
            src={image}
            alt="user"
            className="shadow-md relative rounded-lg bg-sky-500/40"
            width={1000}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </>
      ) : (
        <div className="h-96 text-congress-700 flex flex-col items-center justify-center gap-3">
          <MdOutlinePhotoCamera className="h-20 w-20" />
          <span className="text-congress-700 text-lg font-roboto font-bold">
            Imagen de perfil.
          </span>
        </div>
      )}
    </div>
  );
}
