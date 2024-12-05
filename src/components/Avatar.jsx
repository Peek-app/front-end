import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      className="rounded-full shadow-md "
      src="/default_user.jpg"
      alt="user"
      width={40}
      height={40}
    />
  );
}
