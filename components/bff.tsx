import useSWR from "swr";
import { LightSubtitle } from "ui/texts";
import { ProductCard } from "./products/ProductCard";
const fetcher = (a: any, b: any) => fetch(a, b).then((res) => res.json());

export default function FeaturedProducts() {
  const { data } = useSWR("/api/featured-products", fetcher);
  return (
    <>
      <LightSubtitle>Productos Destacados</LightSubtitle>
      <div className="featured__list-container">
        {data?.map((p: any) => {
          return (
            <ProductCard
              id={p?.objectID}
              title={p?.title}
              desc={p?.description}
              price={p?.price}
              imgUrl={p?.images[0]}
              purchasable={false}
              detail={false}
            />
          );
        })}
      </div>
    </>
  );
}
