import Image from "next/image";
import { useAccount } from "@/context/AccountContext";

export default function Avatar() {
  const { account } = useAccount();
  return (
    /*
    <Image
      src={account.profilePic}
      alt="user"
      className=" rounded-full shadow-md"
      width={40}
      height={40}
    />*/
    <img
      src={account.profilePic}
      alt=""
      className=" size-10 rounded-full shadow-md"
    />
  );
}
