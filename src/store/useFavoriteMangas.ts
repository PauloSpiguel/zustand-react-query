import create from "zustand";
import { persist } from "zustand/middleware";

type State = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const useFavoriteMangas = create<State>(
  persist(
    (set, get) =>
      ({
        favorites: [],
        toggleFavorite: (id: number) => {
          const { favorites } = get();
          const shouldBeFavorite = favorites.includes(id);
          if (shouldBeFavorite) {
            const newFavorite = favorites.filter((favorite) => favorite !== id);
            set({ favorites: newFavorite });
          } else {
            set({ favorites: [...favorites, id] });
          }
        },
      } as State),
    {
      name: "useFavoriteMangas",
    }
  )
);
