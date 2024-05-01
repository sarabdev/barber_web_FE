import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAllCookies, getCookie } from "../../../components/Common/Cookies";
import { setUser } from "../../localstate/Localstate";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getCookie("access_token");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await axiosInstance.get("/auth/me");
    setUser(response?.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    clearAllCookies();
    throw error;
  }
});
