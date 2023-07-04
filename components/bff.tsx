import { LightSubtitle } from "ui/texts";
import { ProductCard } from "./product/ProductCard";

export default function FeaturedProducts({
  products,
}: {
  products: ProductCardProps[];
}) {
  return (
    <>
      <LightSubtitle>Productos Destacados</LightSubtitle>
      <div className="featured__list-container">
        {products?.map((p: any) => {
          return (
            <ProductCard
              key={p?.id}
              id={p?.id}
              title={p?.title}
              price={p?.price}
              imgUrl={p?.imageUrl}
              stock={p?.stock}
            />
          );
        })}
      </div>
    </>
  );
}
