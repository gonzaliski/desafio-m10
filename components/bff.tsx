import { useFavourites } from "hooks/useFavourite";
import { LightSubtitle } from "ui/texts";
import { ProductCard } from "./product/ProductCard";

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
      <LightSubtitle>Productos Destacados</LightSubtitle>
      <div className="featured__list-container">
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
      </div>
    </>
  );
}
