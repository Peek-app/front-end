import clsx from "clsx";

import { MdOutlinePhotoCamera } from "react-icons/md";

export default function ProfileImagePet({ image }) {
  return (
    <div
      className={clsx("shadow-md rounded-lg", {
        "bg-white": !image,
      })}
    >
      {image && (
        <>
          <div className="bg-gradient-to-r from-gray-900 to-transparent rounded-lg absolute w-full h-full z-[1]"></div>
          <div className="shadow-md relative rounded-lg bg-sky-500/40 sm:h-[450px]">
            <img
              src={image}
              className="w-full h-full object-cover sm:object-left md:object-center rounded-lg"
            />
          </div>
        </>
      )}
    </div>
  );
}
