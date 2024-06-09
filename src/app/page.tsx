// src/app/page.tsx
"use client";

import { useTheme } from "next-themes";
import { NewButton, NewCard, ToggleButton } from "hazley-ui";
import "hazley-ui/dist/style.css";
import { Account } from "@/types/Account";
import axiosInstance from "@/lib/axiosConfig";
import { useEffect, useState } from "react";

export default function Home() {
  const { setTheme } = useTheme();
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axiosInstance.get<{ results: Account[] }>(
          "/accounts/?page_size=100"
        );
        setAccounts(response.data.results);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <>
      <ToggleButton
        darkButtonText="oscuro"
        lightButtonText="claro"
        setTheme={setTheme}
        systemButtonText="sistema"
      />
      <NewCard />

      <h1>Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>
    </>
  );
}
