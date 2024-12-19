import Link from "next/link";

export default function RoundedFilledButton({ children, text, destination }) {
  return (
    <Link
      href={destination}
      className=" text-white bg-orange-500 rounded-3xl shadow-md px-8 py-2 flex items-center text-base border border-orange-500"
    >
      {children}
      <p>{text}</p>
    </Link>
  );
}
