const api = process.env.NEXT_PUBLIC_API_URL;

//Obtener mascota unica
export async function getPet(id) {
  const token = localStorage.getItem("access-token");

  if (!token) {
    throw new Error("No access token found");
  }

  const response = await fetch(`${api}/pets/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Pet not found");
    } else if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      throw new Error("Server error");
    }
  }

  const data = await response.json();
  return data.data.pet;
}

//Editar mascota unica
export async function editPet(id, petData) {
  const token = localStorage.getItem("access-token");
  if (!token) {
    throw new Error("No access token found");
  }

  const response = await fetch(`${api}/pets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(petData),
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Pet not found");
    } else if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      throw new Error("Server error");
    }
  }

  const data = await response.json();
  return data;
}

//Eliminar mascota unica
export async function deletePet(id) {
  const token = localStorage.getItem("access-token");
  if (!token) {
    throw new Error("No access token found");
  }

  const response = await fetch(`${api}/pets/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Pet not found");
    } else if (response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      throw new Error("Server error");
    }
  }

  return { message: "Pet deleted successfully" };
}
