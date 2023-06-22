import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LgTextBold } from "ui/texts";
import { ProductCard } from "./product/ProductCard";

export const SearchProducts = (props: any) => {
  const router = useRouter();
  const products = useProducts(router.query.search as string);
  console.log(products);

  useEffect(() => {
    props.count(products?.results.length);
  }, [products?.results]);
  return (
    <>
      {products?.results.length !== 0 ? (
        products?.results.map((p: any) => (
          <ProductCard
            id={p.id}
            title={p.title}
            price={p.price}
            imgUrl={p.imageUrl}
          />
        ))
      ) : (
        <LgTextBold>No hay resultados</LgTextBold>
      )}
    </>
  );
};
