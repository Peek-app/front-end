const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { toast } from "sonner";

export async function createAccountVet(
  endpoint,
  { email, password, professionalId }
) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, professionalId }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || "Ocurrió un error inesperado.";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error("Error en createAccount:", error.message);
    throw error;
  }
}
