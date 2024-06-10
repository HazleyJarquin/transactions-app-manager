// src/services/authLogin.service.ts
import axios, { AxiosInstance } from "axios";
import { ILoginResponse } from "@/types/ILoginResponse";
import { LoginCredentials } from "@/types/LoginCredentials";

export const fetchLogin = async (
  axiosInstance: AxiosInstance,
  credentials: LoginCredentials
): Promise<ILoginResponse | null> => {
  try {
    const response = await axiosInstance.post<ILoginResponse>(
      "/token",
      credentials
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.map((e: any) => e.message).join(", ") ||
        error.message;

      alert(errorMessage);
      return null;
    } else {
      const errorMessage = "An unexpected error occurred";
      console.error(errorMessage);
      alert(errorMessage);
      return null;
    }
  }
};
