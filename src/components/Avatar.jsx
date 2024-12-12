import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src="/default_user.jpg"
      alt="user"
      className=" rounded-full shadow-md"
      width={40}
      height={40}
    />
  );
}
