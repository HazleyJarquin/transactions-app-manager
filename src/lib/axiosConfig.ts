// src/hooks/useAxiosInstance.ts
import { useLoginStore } from "@/store/useLoginStore.store";
import axios from "axios";

const useAxiosInstance = () => {
  const { id, password } = useLoginStore();
  const token = Buffer.from(`${id}:${password}`, "utf8").toString("base64");

  const axiosInstance = axios.create({
    baseURL: "https://sandbox.belvo.com/api",
    headers: {
      accept: "application/json",
      authorization: `Basic ${token}`,
    },
  });

  return axiosInstance;
};

export default useAxiosInstance;
