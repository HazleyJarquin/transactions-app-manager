// src/services/accountService.ts
import axiosInstance from "@/lib/axiosConfig";
import { Account } from "@/types/Account";

export const fetchAccounts = async (): Promise<Account[]> => {
  const response = await axiosInstance.get<{ results: Account[] }>(
    "/accounts/?page_size=100"
  );
  return response.data.results;
};
