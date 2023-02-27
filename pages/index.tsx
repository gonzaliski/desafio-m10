import FeaturedProducts from "components/bff";
import { Layout } from "components/Layout/Layout";
import Router from "next/router";
import styled from "styled-components";
import { PageSection, ProductsSection, VerticalBox } from "ui/boxes";
import { MainButton } from "ui/buttons";
import { Input } from "ui/inputs";
import { DarkHeading } from "ui/texts";

export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const query = e.target.query.value;
    if (query) Router.push({ pathname: "/search", query: { search: query } });
  };
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
      <ProductsSection color="var(--primary-color)">
        <FeaturedProducts></FeaturedProducts>
      </ProductsSection>
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
