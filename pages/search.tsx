import { Layout } from "components/Layout/Layout";
import { SearchProducts } from "components/SearchProducts";
import { useState } from "react";
import { LongSection } from "ui/boxes";
import { LgTextThin, Subtitle } from "ui/texts";
export default function Search() {
  const [resultsQuantity, setResultsQuantity] = useState(0);
  return (
    <Layout>
      <LongSection>
        <Subtitle>Resultados</Subtitle>
        <LgTextThin>{resultsQuantity} resultados </LgTextThin>
        <div className="featured__list-container">
          <SearchProducts count={setResultsQuantity} />
        </div>
      </LongSection>
    </Layout>
  );
}
