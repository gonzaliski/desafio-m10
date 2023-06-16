import useSWR from "swr";
import { LightSubtitle } from "ui/texts";
import { ProductCard } from "./product/ProductCard";
import { GetServerSideProps } from "next";
import { fetchAPI } from "lib/api";
const fetcher = (a: any, b: any) => fetch(a, b).then((res) => res.json());

export default function FeaturedProducts({
  products,
}: {
  products: ProductCardProps[];
}) {
  // const { data } = useSWR("/api/featured-products", fetcher);
  return (
    <>
      <LightSubtitle>Productos Destacados</LightSubtitle>
      <div className="featured__list-container">
        {products?.map((p: any) => {
          return (
            <ProductCard
              key={p?.objectID}
              id={p?.objectID}
              title={p?.title}
              desc={p?.description}
              price={p?.price}
              imgUrl={p?.imageUrl}
            />
          );
        })}
      </div>
    </>
  );
}
