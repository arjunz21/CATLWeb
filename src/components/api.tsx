import axios from "axios";

const api = axios.create({
  baseURL: '/api',
  headers: { accept: 'application/json', },
  withCredentials: true,
  timeout: 5000,
});

export async function makeRequest(url: any, options: any) {
  try {
    const res = await api(url, options);
    return res.data;
  } catch (error: any) {
    return await Promise.reject(error?.response?.data?.message ?? "Error");
  }
}

export default api;
