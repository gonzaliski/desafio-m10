import { addProductToCart, getShoppingCart } from "lib/api";
import { atom, selector } from "recoil";

export const shoppingCartState = atom({
  key: "shoppingCart",
  default: [] as shoppingCartItem[],
});

export const shoppingCartSelector = selector({
  key: "shoppingCartSelector",
  get: ({ get }) => {
    const shoppingCart = get(shoppingCartState);
    return shoppingCart;
  },
  set: ({ set }, newItem) => {
    set(shoppingCartState, newItem);
  },
});

export const favouriteItemsState = atom({
  key: "favouriteItems",
  default: [] as favouriteItems[],
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
