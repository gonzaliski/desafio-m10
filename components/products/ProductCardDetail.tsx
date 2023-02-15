import { getAllProductIDs } from "lib/api";
import { useProduct } from "lib/hooks";
import { GetStaticPropsContext } from "next";
import { ProductCard } from "./ProductCard";

export const ProductCardDetail = ({ product }: any) => {
  return (
    <ProductCard
      id={product?.objectID}
      title={product?.title}
      desc={product?.description}
      price={product?.price}
      imgUrl={product?.images[0]}
      purchasable={true}
    ></ProductCard>
  );
};

export async function getStaticPaths() {
  const res = await getAllProductIDs();
  const paths = res.map((item: any) => {
    return { params: { productId: item.toString() } };
  });
  console.log("soy los paths", paths);
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context?.params?.productId;
  console.log("soy los id", id);
  const product = await useProduct(id as string);
  console.log("PRODUCTO ", product);
  return {
    props: { product },
    revalidate: 3600,
  };
}
