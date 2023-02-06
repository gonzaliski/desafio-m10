import { Layout } from "components/Layout/Layout";
import { ProductCard } from "components/products/ProductCard";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PageSection, ProductsSection, VerticalBox } from "ui/boxes";
import { MainButton } from "ui/buttons";
import { Input } from "ui/inputs";
import { DarkHeading, LightSubtitle } from "ui/texts";

export default function Home() {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const query = e.target.query.value;
    router.push({ pathname: "/search", query: { q: query } });
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
        <LightSubtitle>Productos Destacados</LightSubtitle>
        <div className="featured__list-container"></div>
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
