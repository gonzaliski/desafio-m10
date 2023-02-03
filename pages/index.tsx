import { Layout } from "components/Layout/Layout";
import { ProductCard } from "components/ProductCard";
import { products } from "lib/products";
import { useRouter } from "next/router";
import styled from "styled-components";
import { PageSection, VerticalBox } from "ui/boxes";
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
      <FeaturedSection>
        <LightSubtitle>Productos Destacados</LightSubtitle>
        <div className="featured__list-container">
          {products.map((p) => (
            <ProductCard
              id={p.id}
              title={p.title}
              desc={p.desc}
              price={p.price}
            />
          ))}
        </div>
      </FeaturedSection>
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

const FeaturedSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  align-items: center;
  text-align: center;
  justify-content: center;
  height: auto;
  width: 100vw;
  gap: 20px;
  padding: 40px 0;

  .featured__list-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
`;
