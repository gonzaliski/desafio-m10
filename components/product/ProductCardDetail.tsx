import Image from "next/image";
import styled from "styled-components";
import { MainButton } from "ui/buttons";
import { BodyText, Subtitle, ThinSubtitle } from "ui/texts";
import { SizeSelector } from "./SizeSelector";

export const ProductCardDetail = ({
  product,
}: {
  product: ProductCardDetailProps;
}) => {
  return (
    <ProductDetail>
      {/* <CarrouselWrapper> */}
      <Image
        src={product.imageUrl || ""}
        alt={"imagen"}
        height={400}
        width={400}
        className="product-img"
        priority
      ></Image>
      {/* </CarrouselWrapper> */}
      <MainButton>Agregar al carrito</MainButton>
      <ProductInformation>
        <ThinSubtitle>{product.title}</ThinSubtitle>
        <Subtitle>${product.price}</Subtitle>
        <SizeSelector></SizeSelector>
        <BodyText>{product.description}</BodyText>
      </ProductInformation>
    </ProductDetail>
  );
};

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: scroll;
  padding: 0 5% 0 5%;
  .product-img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 550px) {
    flex-direction: row;

    .product-img {
      min-height: 300px;
      min-width: 300px;
    }
    @media (min-width: 768px) {
      .product-img {
        max-height: 500px;
        max-width: 500px;
      }
    }
  }
`;
// const CarrouselWrapper = styled.div`
//   display: flex;
//   place-content: center;
//   width: 100%;
// `;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 90%;
`;
