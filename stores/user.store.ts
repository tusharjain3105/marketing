import { create } from "zustand";

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface UserStore {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useUserStore;
