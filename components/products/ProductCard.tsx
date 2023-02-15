import { getUserAddress } from "lib";
import { generateOrder } from "lib/api";
import Image from "next/image";
import Router, { useRouter } from "next/router";
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
}: ProductCardProps) => {
  const router = useRouter();
  const handleBuy = async () => {
    const { address } = getUserAddress();
    const { url } = await generateOrder(id, address);
    Router.push(url);
  };
  return (
    <CardContainer purchasable={purchasable}>
      {imgUrl && (
        <Image
          src={imgUrl || ""}
          alt={"imagen"}
          height={200}
          width={250}
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

interface CardContainerProps {
  purchasable?: boolean;
}

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
  @media (min-width: 768px) {
    flex-direction: ${(purchasable) => (purchasable ? "column" : "row")};
  }
`;
