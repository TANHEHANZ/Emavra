import { create } from "zustand";

const useContextImg = create((set) => ({
  img: [],
  setImg: (img) => set({ img }),
}));

export default useContextImg;
