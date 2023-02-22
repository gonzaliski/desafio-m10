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
      detail={true}
    ></ProductCard>
  );
};
