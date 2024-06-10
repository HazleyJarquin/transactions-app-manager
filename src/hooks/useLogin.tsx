// src/hooks/useLogin.ts
import { useMutation } from "react-query";
import { LoginCredentials } from "@/types/LoginCredentials";
import { ILoginResponse } from "@/types/ILoginResponse";
import useAxiosInstance from "@/lib/axiosConfig";
import { fetchLogin } from "@/services/authLogin.service";

export const useLogin = () => {
  const axiosInstance = useAxiosInstance();

  const login = async (
    credentials: LoginCredentials
  ): Promise<ILoginResponse | null> => {
    return fetchLogin(axiosInstance, credentials);
  };

  return useMutation<ILoginResponse | null, Error, LoginCredentials>(login);
};
