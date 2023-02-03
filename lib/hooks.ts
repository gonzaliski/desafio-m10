import useSWR from "swr";
import { fetchAPI } from "./api";
import { products } from "./products";

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);
  const res = data ? data : null;
  return res;
}

export function useProduct(productId: number) {
  const data = products.find((p) => p.id == productId);
  return data || products[0];
}
