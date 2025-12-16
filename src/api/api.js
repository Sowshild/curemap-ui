const BASE_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("authToken");

export const loginUser = async (formData) => {
  try {
    const res = await fetch("https://curemap-api.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data; 
  } catch (error) {
    console.error("Error in loginUser:", error);
    return { message: error.message };
  }
};


export const registerUser = async (formData) => {
  try {
    const res = await fetch("https://curemap-api.onrender.com/register", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data; 
  } catch (error) {
    console.error("Error in registerUser:", error);
    return { message: error.message };
  }
};

export const checkSymptoms = async (symptoms) => {
  const token = localStorage.getItem("token"); 
  try {
    const res = await fetch(`${BASE_URL}/result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({ symptoms }),
    });
    return await res.json();
  } catch (err) {
    console.error("Symptom Check Error:", err);
    return { message: "Failed to check symptoms" };
  }
};

export const getHospitals = async () => {
  try {
    const res = await fetch(`${BASE_URL}/doctors`);
    return await res.json();
  } catch (err) {
    console.error("Get Hospitals Error:", err);
    return [];
  }
};

export const getDashboardHistory = async () => {
  const token = localStorage.getItem("token"); 
  try {
    const res = await fetch(`${BASE_URL}/dashboard`, {
      headers: { "Authorization": token },
    });
    return await res.json();
  } catch (err) {
    console.error("Dashboard History Error:", err);
    return { dates: [], history: [] };
  }
};