import { Layout } from "components/Layout/Layout";
import { ProductCard } from "components/ProductCard";
import { useProduct } from "lib/hooks";
import { useRouter } from "next/router";
import { PageSection } from "ui/boxes";

export default function Item() {
  const router = useRouter();
  const { itemId } = router.query;
  const product = useProduct(itemId);

  return (
    <Layout>
      <PageSection>
        <ProductCard
          id={product.id}
          title={product.title}
          desc={product.desc}
          price={product.price}
          purchasable={true}
        ></ProductCard>
      </PageSection>
    </Layout>
  );
}
