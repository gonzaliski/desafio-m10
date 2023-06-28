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
import { BrandsCarousel } from "components/Carousel/BrandsCarousel";
import { Subtitle } from "ui/texts";

export default function Home({
  featuredProducts,
  brands,
}: {
  featuredProducts: ProductCardProps[];
  brands: Brand[];
}) {
  return (
    <Layout>
      <VerticalBox>
        <MainCarousel images={[Puma, Fila, Puma]} />
      </VerticalBox>
      <VerticalBox gap="70px">
        <Subtitle>Buscá tus marcas favoritas</Subtitle>
        <BrandsCarousel brands={brands} />
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
  const brandsRes = await fetch(url + "/api/media");
  const productRes = await fetch(url + "/api/featured-products");
  const products = await productRes.json();
  const brands = await brandsRes.json();
  return { props: { featuredProducts: products, brands } };
};
