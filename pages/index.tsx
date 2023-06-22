import { MainCarousel } from "components/Carousel/MainCarousel";
import { Layout } from "components/Layout/Layout";
import FeaturedProducts from "components/bff";
import { sync } from "lib/api";
import Router from "next/router";
import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import { LongSection, VerticalBox } from "ui/boxes";
import Puma from "../public/puma.jpg";
import Fila from "../public/fila.jpg";

export default function Home({
  featuredProducts,
}: {
  featuredProducts: ProductCardProps[];
}) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const query = e.target.query.value;
    if (query) Router.push({ pathname: "/search", query: { search: query } });
  };
  useEffect(() => {
    const syncProds = async () => {
      try {
        await sync();
      } catch (e) {
        console.error("failed to get products");
      }
    };
    syncProds();
  }, []);
  return (
    <Layout>
      <VerticalBox>
        <MainCarousel images={[Puma, Fila, Puma]} />
      </VerticalBox>
      <LongSection color="var(--primary-color)">
        <FeaturedProducts products={featuredProducts}></FeaturedProducts>
      </LongSection>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  featuredProducts: ProductCardProps;
}> = async () => {
  let url;
  if (process.env.NODE_ENV == "development") {
    url = process.env.LOCAL_API;
  } else {
    url = process.env.PROD_API;
  }

  const res = await fetch(url + "/api/featured-products");
  const products = await res.json();
  return { props: { featuredProducts: products } };
};
