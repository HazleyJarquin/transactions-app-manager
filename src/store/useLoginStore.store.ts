import { persist } from "zustand/middleware";

import { createWithEqualityFn } from "zustand/traditional";

interface LoginState {
  id: string | null;
  setId: (id: string) => void;
  password: string | null;
  setPassword: (password: string) => void;
  access: string | null;
  setAccess: (access: string) => void;
}

export const useLoginStore = createWithEqualityFn(
  persist<LoginState>(
    (set) => ({
      id: null,
      setId: (id: string) => set({ id }),
      password: null,
      setPassword: (password: string) => set({ password }),
      access: null,
      setAccess: (access: string) => set({ access }),
    }),
    { name: "auth-token" }
  )
);
