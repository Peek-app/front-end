const api = process.env.NEXT_PUBLIC_API_URL;

export async function getAllPets() {
  try {
    const token = localStorage.getItem("access-token");
    if (!token) {
      throw new Error("No access token found");
    }

    const response = await fetch(`${api}/pets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || "Error fetching pets.";
      throw new Error(errorMessage);
    }

    return data.data.pets;
  } catch (error) {
    console.error("Error getAllPets:", error.message);
    throw error;
  }
}
