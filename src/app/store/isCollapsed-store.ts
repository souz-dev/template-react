import { create } from "zustand";

interface IIsCollapsed {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const UseIsCollapsed = create<IIsCollapsed>((set) => ({
  isCollapsed: false,

  setIsCollapsed: (collapsed) => set({ isCollapsed: collapsed }),
}));

export default UseIsCollapsed;
