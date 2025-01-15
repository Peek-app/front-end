import DashboardOwner from "@/Layouts/DashboardOwner";
import { useAccount, setAccount } from "@/context/AccountContext";

export default function Dashboard() {
  const { account } = useAccount();
  return <DashboardOwner></DashboardOwner>;
}
