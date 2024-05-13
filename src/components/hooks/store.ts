"use client";
import { create } from "zustand";
import { FilteredUser } from "./types";

type Store = {
    authUser: FilteredUser | null;
    setAuthUser: (user: FilteredUser | null) => void;
    reset: () => void;
};

const useStore = create<Store>((set) => ({
    authUser: null,
    setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
    reset: () => set({ authUser: null }),
}));

export default useStore;
