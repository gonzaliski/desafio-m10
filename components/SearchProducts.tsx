import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LargeTextBold } from "ui/texts";
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
            id={p.objectID}
            title={p.title}
            desc={p.description}
            price={p.price}
            imgUrl={p.imageUrl}
          />
        ))
      ) : (
        <LargeTextBold>No hay resultados</LargeTextBold>
      )}
    </>
  );
};
