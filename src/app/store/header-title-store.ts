import { create } from "zustand";

interface TitleState {
  title: string;
  subtitle: string;
  setTitle: (title: string) => void;
  setSubtitle: (subtitle: string) => void;
}

const useTitleStore = create<TitleState>((set) => ({
  title: "",
  subtitle: "",
  setTitle: (title) => set({ title }),
  setSubtitle: (subtitle) => set({ subtitle }),
}));

export default useTitleStore;
