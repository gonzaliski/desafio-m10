import { Layout } from "components/Layout/Layout";
import { SearchProducts } from "components/SearchProducts";
import { useState } from "react";
import { ProductsSection } from "ui/boxes";
import { LargeTextThin, Subtitle } from "ui/texts";
export default function Search() {
  const [resultsQuantity, setResultsQuantity] = useState(0);
  return (
    <Layout>
      <ProductsSection>
        <Subtitle>Resultados</Subtitle>
        <LargeTextThin>{resultsQuantity} resultados </LargeTextThin>
        <div className="featured__list-container">
          <SearchProducts count={setResultsQuantity} />
        </div>
      </ProductsSection>
    </Layout>
  );
}
