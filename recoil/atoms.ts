import { isUserLogged } from "lib";
import { getFavourites } from "lib/api";
import { atom, selector } from "recoil";

export const shoppingCartState = atom({
  key: "shoppingCart",
  default: [] as shoppingCartItem[],
});
export const favouriteItemsSelector = selector({
  key: "favouriteItemsSelector",
  get: async () => {
    if (isUserLogged()) {
      return await getFavourites();
    }
    return [];
  },
});
export const favouriteItemsState = atom({
  key: "favouriteItems",
  default: [],
});

export const favouriteItemsStateUpdated = selector({
  key: "favouriteItemsStateUpdated",
  get: ({ get }) => {
    const favourites = get(favouriteItemsState);
    return favourites;
  },
  set: ({ set }, newValue) => {
    set(favouriteItemsState, newValue);
  },
});
