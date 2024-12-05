const api = process.env.NEXT_PUBLIC_API_URL;

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${api}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || "Error.";
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error("Error createAccount:", error.message);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${api}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Error logging in");
    }

    const data = await response.json();
    const token = data?.data || false;
    return token;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
