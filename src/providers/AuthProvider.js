import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const publicRoutes = ["/", "/login", "/create-account", "/landing"];

export default function AuthProvider({ children }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem("access-token", session.accessToken);
    }
  }, [session]);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (!token && !publicRoutes.includes(router.pathname)) {
      router.push("/dashboard");
    }
  }, [router]);

  return children;
}
