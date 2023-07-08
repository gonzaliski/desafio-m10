import { atom, selector } from "recoil";

export const shoppingCartState = atom({
  key: "shoppingCart",
  default: [] as shoppingCartItem[],
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
