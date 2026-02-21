import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // FastAPI backend URL

// --- Summarize lab report ---
export const summarizeReport = async (reportData) => {
  const response = await axios.post(`${API_BASE_URL}/summarize`, reportData);
  return response.data;
};

// --- Ask Dr. Constant ---
export const askDoctor = async (questionData) => {
  const response = await axios.post(`${API_BASE_URL}/ask-doctor`, questionData);
  return response.data;
};
