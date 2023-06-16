import { getUserAddress, isUserLogged } from "lib";
import { generateOrder } from "lib/api";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import { VerticalBox } from "ui/boxes";
import { TertiaryButton } from "ui/buttons";
import { LargeTextThin, Subtitle } from "ui/texts";
export const ProductCard = ({
  id,
  title,
  desc,
  price,
  imgUrl,
}: ProductCardProps) => {
  const handleBuy = async () => {
    if (!isUserLogged()) Router.push("/ingresar");
    const address = getUserAddress();
    const productData = { title, desc, price, imgUrl };
    const { url } = await generateOrder(id, address, productData);
    Router.push(url);
  };
  return (
    <CardContainer>
      {imgUrl && (
        <ImageWrapper>
          <Image
            src={imgUrl || ""}
            alt={"imagen"}
            height={250}
            width={250}
            className="product-img"
            priority
          ></Image>
        </ImageWrapper>
      )}
      <VerticalBox gap={"10px"} style={{ padding: "15px", maxWidth: "400px" }}>
        <Subtitle>{title}</Subtitle>
        <LargeTextThin>${price}</LargeTextThin>
        <TertiaryButton size="70%" onClick={() => Router.push("/item/" + id)}>
          Ver detalle
        </TertiaryButton>
      </VerticalBox>
    </CardContainer>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  place-content: center;
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
  padding: 0px 0px 15px 0px;
  max-width: "280px";
  height: 100%;
  border-radius: 10px;
  background-color: white;
  .product-img {
    object-fit: "cover";
  }
`;
