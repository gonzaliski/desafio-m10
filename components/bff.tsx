import { useFavourites } from "hooks/useFavourite";
import { LightSubtitle } from "ui/texts";
import { ProductCard } from "./product/ProductCard";
import { ProductsContainer, VerticalBox } from "ui/boxes";
import styled from "styled-components";

export default function FeaturedProducts({
  products,
}: {
  products: ProductCardProps[];
}) {
  const favourites = useFavourites();
  const favouritesIds = favourites.map((f: favouriteItems) => f.id);
  const isInFavouritesList = (id: string) => {
    return favouritesIds.includes(id);
  };
  return (
    <>
      <FeaturedTitle>Productos Destacados</FeaturedTitle>
      <ProductsContainer>
        <VerticalBox className="results-container">
          {products?.map((p: ProductCardProps) => {
            return (
              <ProductCard
                key={p?.id}
                id={p?.id}
                title={p?.title}
                price={p?.price}
                imageUrl={p?.imageUrl}
                stock={p?.stock}
                isAlreadyFavourite={isInFavouritesList(p.id)}
              />
            );
          })}
        </VerticalBox>
      </ProductsContainer>
    </>
  );
}
const FeaturedTitle = styled(LightSubtitle)`
  text-align: center;
  @media (min-width: 768px) {
    text-align: unset;
  }
`;
