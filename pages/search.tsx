import { Layout } from "components/Layout/Layout";
import { ProductCard } from "components/ProductCard";
import styled from "styled-components";
import { Subtitle } from "ui/texts";
import { products } from "lib/products";
export default function Search() {
  return (
    <Layout>
      <FeaturedSection>
        <Subtitle>Resultados</Subtitle>
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

const FeaturedSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--tertirary-color);
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
