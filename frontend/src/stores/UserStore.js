import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  // usar persist nos ayuda a mantener la data aun cuando se reinicia la pagina :)
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set(() => ({ user: user })),
    }),
    {
      name: "user-token",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserStore;
