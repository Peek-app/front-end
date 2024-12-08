import Landing from "@/pages/landing/index";
import Dashboard from "@/pages/dashboard/index";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access-token");
    setToken(storedToken);
  }, []);

  return <main>{token ? <Dashboard /> : <Landing />}</main>;
}
