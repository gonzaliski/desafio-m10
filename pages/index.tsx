import FeaturedProducts from "components/bff";
import { Layout } from "components/Layout/Layout";
import { sync } from "lib/api";
import Router from "next/router";
import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import styled from "styled-components";
import { PageSection, LongSection, VerticalBox } from "ui/boxes";
import { MainButton } from "ui/buttons";
import { Input } from "ui/inputs";
import { DarkHeading } from "ui/texts";

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
          <DarkHeading position={"center"}>El mejor Ecommerce</DarkHeading>
          <QueryForm onSubmit={handleSubmit}>
            <Input
              placeholder="encontrá tu producto ideal"
              name="query"
            ></Input>
            <MainButton>Buscar</MainButton>
          </QueryForm>
        </VerticalBox>
      </PageSection>
      <LongSection color="var(--primary-color)">
        <FeaturedProducts products={featuredProducts}></FeaturedProducts>
      </LongSection>
    </Layout>
  );
}

const QueryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 65vw;
  align-items: center;
  margin: 0 auto;
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
