import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

const fetchUsers = async () => {
  try {
    const response = await API.get("/users");
    console.log("Fetched users in api.js:", response.data); // Check the response data here
    return response.data; // This should be the data you're expecting
  } catch (error) {
    console.log("Failed to fetch users:", error.message);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await API.post("/users", userData); // Send user data
    return response.data; // Return created user data
  } catch (error) {
    console.error(
      "Failed to create user:",
      error.response?.data || error.message
    );
    throw error; // Ensure the caller knows the request failed
  }
};

export { fetchUsers, createUser };
