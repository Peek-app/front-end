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

    console.log("API response:", data);

    if (!response.ok) {
      const errorMessage = data.message || "Error creating pet.";
      throw new Error(errorMessage);
    }

    if (!data.data || !data.data.pet || !data.data.pet._id) {
      throw new Error("Response does not contain pet ID.");
    }

    return data.data.pet;
  } catch (error) {
    console.error("Error createPet:", error.message);
    throw error;
  }
}
