// src/hooks/useAccounts.ts
import { useQuery } from "react-query";
import { Account } from "@/types/Account";

import { fetchAccounts } from "@/services/getAccount.service";
import useAxiosInstance from "@/lib/axiosConfig";

export const useAccounts = () => {
  const axiosInstance = useAxiosInstance();

  return useQuery<Account[], Error>("accounts", () =>
    fetchAccounts(axiosInstance)
  );
};
