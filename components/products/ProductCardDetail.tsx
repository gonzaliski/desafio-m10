import { useProduct } from "lib/hooks";
import { ProductCard } from "./ProductCard";

export const ProductCardDetail = ({ id }: ProductCardDetailProps) => {
  const product = useProduct(id);
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
