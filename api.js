import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const processData = async (payload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/process`, payload);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch data from the server."
    );
  }
};



