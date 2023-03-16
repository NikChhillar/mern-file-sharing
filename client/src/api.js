import axios from "axios";

const API_URI = "http://localhost:5000";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URI}/upload`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Something went wrong while api calling ", error.message);
  }
};
