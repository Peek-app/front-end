import Link from "next/link";

export default function RoundedButton({ children, text, destination }) {
  return (
    <Link
      href={destination}
      className="bg-transparent text-orange-500  rounded-3xl shadow-md px-8 py-2 flex items-center text-base border border-orange-500"
    >
      {children}
      <p>{text}</p>
    </Link>
  );
}
