import { DetailCarousel } from "components/Carousel/DetailCarousel";
import { useSetRecoilState } from "recoil";
import { shoppingCartState } from "recoil/atoms";
import styled from "styled-components";
import { MainButton } from "ui/buttons";
import { MdText, Subtitle, ThinSubtitle } from "ui/texts";
import { SizeSelector } from "./SizeSelector";

export const ProductCardDetail = ({
  product,
}: {
  product: ProductCardDetailProps;
}) => {
  const setNewItem = useSetRecoilState(shoppingCartState);
  const handleSizeSelection = (size: string) => {
    console.log(size);
  };
  const addToCart = () => {
    setNewItem((prevItems) => [
      ...prevItems,
      {
        id: product.id,
        image: product.images[0],
        title: product.title,
        price: product.price,
      },
    ]);
  };
  return (
    <ProductDetail>
      {/* <CarouselWrapper> */}
      <DetailCarousel images={product.images}></DetailCarousel>
      {/* </CarouselWrapper> */}
      <ProductInformation>
        <ThinSubtitle>{product.title}</ThinSubtitle>
        <Subtitle>${product.price}</Subtitle>
        <SizeSelector onChange={handleSizeSelection}></SizeSelector>
        <MainButton onClick={addToCart}>Agregar al carrito</MainButton>
        <ThinSubtitle>Descripcion</ThinSubtitle>
        <MdText>{product.description}</MdText>
      </ProductInformation>
    </ProductDetail>
  );
};

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;
  padding: 0 5% 0 5%;
  .product-img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 550px) {
    align-items: flex-start;
    flex-direction: row;
    .product-img {
      min-height: 250px;
      min-width: 250px;
    }
  }
  @media (min-width: 768px) {
    .product-img {
      max-height: 500px;
      max-width: 500px;
    }
  }
  @media (min-width: 1024px) {
    max-width: 65%;
  }
`;
// const CarouselWrapper = styled.div`
//   display: flex;
//   place-content: center;
//   width: 100%;
// `;

const ProductInformation = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 90%;
  @media (min-width: 550px) {
    max-width: 40%;
  }
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
