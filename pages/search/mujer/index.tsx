import { SortFilter } from "components/Filters/SortFilter";
import { Layout } from "components/Layout/Layout";
import { ProductsByGenre } from "components/product/ProductsByGenre";
import { LongSection } from "ui/boxes";
import { MdTextBold } from "ui/texts";
import { FiltersContainer, SearchLayout } from "..";

export default function WomenProducts() {
  return (
    <Layout>
      <LongSection>
        <MdTextBold>Resultados para mujer</MdTextBold>
        <SearchLayout>
          <FiltersContainer>
            <SortFilter />
          </FiltersContainer>
          <ProductsByGenre genre={"female"} />
        </SearchLayout>
      </LongSection>
    </Layout>
  );
}
