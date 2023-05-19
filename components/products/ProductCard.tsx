import { getUserAddress, isUserLogged } from "lib";
import { generateOrder } from "lib/api";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import { VerticalBox } from "ui/boxes";
import { MainButton, TertiaryButton } from "ui/buttons";
import { BodyText, LargeTextThin, Subtitle } from "ui/texts";
export const ProductCard = ({
  id,
  title,
  desc,
  price,
  imgUrl,
  purchasable,
  detail,
}: ProductCardProps) => {
  const handleBuy = async () => {
    if (!isUserLogged()) Router.push("/ingresar");
    const address = getUserAddress();
    const productData = { title, desc, price, imgUrl };
    const { url } = await generateOrder(id, address, productData);
    console.log(url);

    Router.push(url);
  };
  return (
    <CardContainer purchasable={purchasable} detail={detail}>
      {imgUrl && (
        <ImageWrapper>
          <Image
            src={imgUrl || ""}
            alt={"imagen"}
            height={200}
            width={250}
            className="product-img"
          ></Image>
        </ImageWrapper>
      )}
      <VerticalBox gap={"10px"} style={{ padding: "15px", maxWidth: "400px" }}>
        <Subtitle>{title}</Subtitle>
        <LargeTextThin>${price}</LargeTextThin>
        {!purchasable && (
          <TertiaryButton size="70%" onClick={() => Router.push("/item/" + id)}>
            Ver detalle
          </TertiaryButton>
        )}
        {purchasable && <MainButton onClick={handleBuy}>Comprar</MainButton>}
        {purchasable && <BodyText>{desc}</BodyText>}
      </VerticalBox>
    </CardContainer>
  );
};

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

type CardContainerProps = {
  purchasable?: boolean;
  detail?: boolean;
};

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
  padding: 0px 0px 15px 0px;
  max-width: ${({ purchasable }) => (purchasable ? "70%" : "280px")};
  height: 100%;
  border-radius: 10px;
  background-color: white;
  .product-img {
    min-width: 100%;
    object-fit: ${({ detail }) => (detail == true ? "scale-down" : "cover")};
  }
  @media (min-width: 768px) {
    width: ${({ detail }) => (detail == true ? "" : "300px")};
    .product-img {
      width: ${({ detail }) => (detail == true ? "50%" : "")};
    }
  }
`;
