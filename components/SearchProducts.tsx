import { useProducts } from "lib/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LgTextBold } from "ui/texts";
import { ProductCard } from "./product/ProductCard";
import { useFavourites } from "hooks/useFavourite";
import { HorizontalBox, ProductsContainer, VerticalBox } from "ui/boxes";
import styled from "styled-components";

export const SearchProducts = ({
  count,
}: {
  count: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const router = useRouter();
  const { search, offset, rule } = router.query;
  const products = useProducts(
    search as string,
    offset as string,
    rule as string
  );
  const favourites = useFavourites();
  const favouritesIds = favourites.map((f: favouriteItems) => f.id);
  const isInFavouritesList = (id: string) => {
    return favouritesIds.includes(id);
  };
  useEffect(() => {
    count(products?.results.length);
  }, [products?.results]);
  return (
    <ProductsContainer>
      <VerticalBox className="results-container">
        {products?.results.length !== 0 ? (
          products?.results.map((p: any) => (
            <ProductCard
              key={p.id}
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
      </VerticalBox>
    </ProductsContainer>
  );
};
