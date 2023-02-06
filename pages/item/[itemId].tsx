import { Layout } from "components/Layout/Layout";
import { ProductCardDetail } from "components/products/ProductCardDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageSection } from "ui/boxes";

export default function Item() {
  const router = useRouter();

  const [productId, setProductId] = useState("");
  useEffect(() => {
    if (router.query.itemId) {
      setProductId(router.query.itemId as string);
    }
  }, [router.query]);

  return (
    <Layout>
      <PageSection alignCenter>
        <ProductCardDetail id={productId} />
      </PageSection>
    </Layout>
  );
}
