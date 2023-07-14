import { SortFilter } from "components/Filters/SortFilter";
import { Layout } from "components/Layout/Layout";
import { ProductsByGenre } from "components/product/ProductsByGenre";
import { LongSection } from "ui/boxes";
import { FiltersContainer, SearchLayout } from "..";
import { MdTextBold } from "ui/texts";

export default function MenProducts() {
  return (
    <Layout>
      <LongSection>
        <MdTextBold>Resultados para hombre</MdTextBold>
        <SearchLayout>
          <FiltersContainer>
            <SortFilter />
          </FiltersContainer>
          <ProductsByGenre genre={"men"} />
        </SearchLayout>
      </LongSection>
    </Layout>
  );
}
