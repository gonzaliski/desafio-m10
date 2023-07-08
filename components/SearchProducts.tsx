import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LgTextBold } from "ui/texts";
import { ProductCard } from "./product/ProductCard";
import { useFavourites } from "hooks/useFavourite";

export const SearchProducts = (props: any) => {
  const router = useRouter();
  const products = useProducts(router.query.search as string);
  const favourites = useFavourites();
  const favouritesIds = favourites.map((f: favouriteItems) => f.id);
  const isInFavouritesList = (id: string) => {
    return favouritesIds.includes(id);
  };
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
            imageUrl={p.imageUrl}
            stock={p.stock}
            isAlreadyFavourite={isInFavouritesList(p.id)}
          />
        ))
      ) : (
        <LgTextBold>No hay resultados</LgTextBold>
      )}
    </>
  );
};
