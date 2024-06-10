import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || "",
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    set({ token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: "" });
  }
}));

export default useAuthStore;
