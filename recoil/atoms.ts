import { atom, selector } from "recoil";

export const shoppingCartState = atom({
  key: "shoppingCart",
  default: [] as shoppingCartItem[],
});
export const favouriteItemsState = atom({
  key: "favouriteItems",
  default: [] as favouriteItems[],
});
export const shoppingCartSelector = selector({
  key: "shoppingCartState",
  get: ({ get }) => {
    const items = get(shoppingCartState);
    return items;
  },
});
