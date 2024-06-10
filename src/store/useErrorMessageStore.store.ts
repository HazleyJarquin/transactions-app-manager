import { createWithEqualityFn } from "zustand/traditional";

interface ErrorState {
  errorMessages: string[];
  setErrorMessages: (errorMessages: string[]) => void;
}

export const useErrorMessageStore = createWithEqualityFn<ErrorState>((set) => ({
  errorMessages: [],
  setErrorMessages: (errorMessages: string[]) => set({ errorMessages }),
}));
