import api from "../../../lib/api";

const API_URL = "http://127.0.0.1:8000/api/v1/auth";

export async function register(data) {
    const response = await api.post(`${API_URL}/register`, data);
    return response.data;
}