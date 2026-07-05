import api from "../../../lib/api";

export async function register(data) {
    const response = await api.post("/auth/register", data);
    return response.data;
}

export async function login(data) {
    const response = await api.post(
        "/auth/login",
        data,
        {
            withCredentials: true,
        }
    );

    return response.data;
}
