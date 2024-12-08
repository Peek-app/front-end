import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return children;
}
