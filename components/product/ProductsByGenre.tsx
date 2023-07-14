import { getProductsByGenre } from "lib/api";
import { useState, useEffect } from "react";
import { ProductsContainer, VerticalBox } from "ui/boxes";
import { ProductCard } from "./ProductCard";
import { useFavourites } from "hooks/useFavourite";

export const ProductsByGenre = ({ genre }: { genre: Genre }) => {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const favourites = useFavourites();
  const favouritesIds = favourites.map((f: favouriteItems) => f.id);
  const isInFavouritesList = (id: string) => {
    return favouritesIds.includes(id);
  };
  const fetchProducts = async () => {
    const productsRes = await getProductsByGenre(genre);
    setProducts(productsRes.results);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <ProductsContainer>
      <VerticalBox className="results-container">
        {products?.map((p: ProductData) => (
          <ProductCard
            id={p.id}
            title={p.title}
            price={p.price}
            imageUrl={p.imageUrl}
            stock={p.stock}
            isAlreadyFavourite={isInFavouritesList(p.id)}
          ></ProductCard>
        ))}
      </VerticalBox>
    </ProductsContainer>
  );
};
