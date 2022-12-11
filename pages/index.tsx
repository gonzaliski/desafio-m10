import { Layout } from "components/Layout";
import { ProductCard } from "components/ProductCard";
import styled from "styled-components";
import { PageSection } from "ui/boxes";
import {
  BorderButton,
  MainButton,
  SecondaryButton,
  TertiaryButton,
} from "ui/buttons";
import { Input } from "ui/inputs";
import {
  BodyText,
  BodyTextBold,
  DarkHeading,
  LargeTextBold,
  LargeTextThin,
  LightHeading,
  LightSubtitle,
} from "ui/texts";

export default function Home() {
  return (
    <Layout>
      <PageSection>
        <DarkHeading>El mejor Ecommerce</DarkHeading>
        <QueryForm>
          <Input placeholder="encontrá tu producto ideal"></Input>
          <MainButton>Buscar</MainButton>
        </QueryForm>
      </PageSection>
      <FeaturedSection>
        <LightSubtitle>Productos Destacados</LightSubtitle>
        <div className="featured__list-container">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
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
