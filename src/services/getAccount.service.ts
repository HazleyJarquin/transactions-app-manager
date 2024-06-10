// src/services/getAccount.service.ts
import axios, { AxiosInstance } from "axios";
import { Account } from "@/types/Account";

export const fetchAccounts = async (
  axiosInstance: AxiosInstance
): Promise<Account[]> => {
  const response = await axiosInstance.get<{ results: Account[] }>(
    "/accounts/?page_size=100"
  );
  return response.data.results;
};
