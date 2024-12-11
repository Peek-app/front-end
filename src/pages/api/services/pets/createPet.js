const api = process.env.NEXT_PUBLIC_API_URL;

export async function createPet(petData) {
  try {
    const token = localStorage.getItem("access-token");
    if (!token) {
      throw new Error("No access token found");
    }

    const response = await fetch(`${api}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(petData),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || "Error creating pet.";
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error("Error createPet:", error.message);
    throw error;
  }
}
