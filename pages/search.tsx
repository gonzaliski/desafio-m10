import { Layout } from "components/Layout/Layout";
import { SearchProducts } from "components/SearchProducts";
import { ProductsSection } from "ui/boxes";
import { Subtitle } from "ui/texts";
export default function Search() {
  return (
    <Layout>
      <ProductsSection>
        <Subtitle>Resultados</Subtitle>
        <div className="featured__list-container">
          <SearchProducts />
          {/* {products.map((p: any) => (
            <ProductCard
              id={p.objectID}
              title={p.Name}
              desc={p.Description}
              price={p.Unit_cost}
            />
          ))} */}
        </div>
      </ProductsSection>
    </Layout>
  );
}
