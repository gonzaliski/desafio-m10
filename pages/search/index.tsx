import { SortFilter } from "components/Filters/SortFilter";
import { Layout } from "components/Layout/Layout";
import { SearchProducts } from "components/SearchProducts";
import { useState } from "react";
import styled from "styled-components";
import { VerticalBox, LongSection } from "ui/boxes";
import { MdTextBold, SmText } from "ui/texts";
export default function Search() {
  const [resultsQuantity, setResultsQuantity] = useState(0);
  return (
    <Layout>
      <ResultsContainer>
        <MdTextBold>Resultados</MdTextBold>
        <SmText>{resultsQuantity} resultados </SmText>
      </ResultsContainer>
      <LongSection>
        <SearchLayout>
          {resultsQuantity !== 0 && (
            <FiltersContainer>
              <SortFilter />
            </FiltersContainer>
          )}
          <SearchProducts count={setResultsQuantity} />
        </SearchLayout>
      </LongSection>
    </Layout>
  );
}

export const ResultsContainer = styled(VerticalBox)`
  align-self: center;
  margin-top: 20px;
  width: min-content;
`;

export const SearchLayout = styled(VerticalBox)`
  width: 100%;
  gap: 5rem;
  @media (min-width: 800px) {
    gap: 2rem;
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
  }
  .search {
  }
`;

export const FiltersContainer = styled(VerticalBox)`
  flex: 1 1 40;
`;
