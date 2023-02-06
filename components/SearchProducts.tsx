import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import { ProductCard } from "./products/ProductCard";

export const SearchProducts = () => {
  const router = useRouter();
  console.log(router.query.search);

  const products = useProducts(router.query.search as string);
  console.log(products?.results);

  return (
    <>
      {products?.results.map((p: any) => (
        <ProductCard
          id={p.objectID}
          title={p.title}
          desc={p.description}
          price={p.price}
          imgUrl={p.images[0]}
        />
      ))}
    </>
  );
};
