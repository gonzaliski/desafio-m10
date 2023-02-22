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
    const { address } = getUserAddress();
    const { url } = await generateOrder(id, address);
    Router.push(url);
  };
  return (
    <CardContainer purchasable={purchasable} detail={detail}>
      {imgUrl && (
        <Image
          src={imgUrl || ""}
          alt={"imagen"}
          height={200}
          width={250}
          className="product-img"
        ></Image>
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
  max-height: ${({ purchasable }) => (purchasable ? "80%" : "380px")};
  max-width: ${({ purchasable }) => (purchasable ? "70%" : "280px")};
  height: 100%;
  border-radius: 10px;
  background-color: white;
  overflow: auto;
  .product-img {
    width: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: ${({ detail }) => (detail == true ? "row" : "column")};
    width: ${(detail) => (detail ? "600px" : "300px")};
    .product-img {
      width: ${(detail) => (detail ? "initial" : "50%")};
    }
  }
`;
