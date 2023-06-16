import useSWR from "swr";
import useSWRImmutable from "swr";
import { fetchAPI } from "./api";

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);
  const res = data ? data : null;
  return res;
}

export function useProducts(query: string | undefined, offset = 20) {
  const { data, error } = useSWRImmutable(
    `/search?search=${query}&limit=20&offset=${offset}`,
    fetchAPI
  );
  const res = data ? data : null;
  return res;
}

export function useProduct(productId: string) {
  const { data, error } = useSWRImmutable(
    "/products?productId=" + productId,
    fetchAPI
  );
  const res = data ? data : null;
  return res;
}
