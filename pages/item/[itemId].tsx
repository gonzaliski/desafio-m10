import { Layout } from "components/Layout/Layout";
import { ProductCardDetail } from "components/products/ProductCardDetail";
import { getAllProductIDs, getProductByID } from "lib/api";
import { GetStaticPropsContext } from "next";
import { PageSection } from "ui/boxes";

export default function Item({ product }: any) {
  return (
    <Layout>
      <PageSection alignCenter>
        <ProductCardDetail product={product} />
      </PageSection>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await getAllProductIDs();
  const paths = res.map((item: any) => {
    return { params: { itemId: item.toString() } };
  });
  console.log("soy los paths", paths);
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log(context?.params);
  const id = context?.params?.itemId;
  const product = await getProductByID(id as string);
  return {
    props: { product },
    revalidate: 3600,
  };
}
