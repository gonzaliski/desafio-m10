import { Layout } from "components/Layout/Layout";
import { ProductCardDetail } from "components/product/ProductCardDetail";
import { getAllProductIDs, getProductByID } from "lib/api";
import { GetStaticPropsContext } from "next";
import { LongSection } from "ui/boxes";

export default function Item({ product }: { product: ProductCardDetailProps }) {
  return (
    <Layout>
      <LongSection>
        <ProductCardDetail product={product} />
      </LongSection>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await getAllProductIDs();
  const paths = res.map((item: any) => {
    return { params: { itemId: item.toString() } };
  });
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context?.params?.itemId;
  const product = await getProductByID(id as string);
  return {
    props: { product },
    revalidate: 3600,
  };
}
