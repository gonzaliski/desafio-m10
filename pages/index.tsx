import { Layout } from "components/Layout/Layout";
import FeaturedProducts from "components/bff";
import { sync } from "lib/api";
import Image from "next/image";
import Router from "next/router";
import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import styled from "styled-components";
import { LongSection, PageSection, VerticalBox } from "ui/boxes";
import { DarkHeading, LightHeading } from "ui/texts";
import Puma from "../public/puma.jpg";

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
      <PageSection>
        <VerticalBox>
          <CarouselWrapper>
            <Image src={Puma} alt={"puma"} className="img"></Image>
          </CarouselWrapper>
          <LightHeading position={"center"}>El mejor Ecommerce</LightHeading>
        </VerticalBox>
      </PageSection>
      <LongSection color="var(--primary-color)">
        <FeaturedProducts products={featuredProducts}></FeaturedProducts>
      </LongSection>
    </Layout>
  );
}

const CarouselWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
  .img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
  @media (min-width: 768px) {
  }
`;

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
