import { loginUser } from "./users/User";

export async function handleLogin(email, password, setUser) {
  try {
    const userData = await loginUser(email, password);
    if (!userData) {
      throw new Error("User data not found");
    }
    localStorage.setItem("access-token", userData.token);
    setUser(userData);
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
