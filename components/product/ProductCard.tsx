import Image from "next/image";
import Router from "next/router";
import { BsHeart } from "react-icons/bs";
import styled from "styled-components";
import { VerticalBox } from "ui/boxes";
import { MediumText, MediumTextBold } from "ui/texts";
export const ProductCard = ({ id, title, price, imgUrl }: ProductCardProps) => {
  // const handleBuy = async () => {
  //   if (!isUserLogged()) Router.push("/ingresar");
  //   const address = getUserAddress();
  //   const productData = { title, desc, price, imgUrl };
  //   const { url } = await generateOrder(id, address, productData);
  //   Router.push(url);
  // };
  return (
    <CardContainer onClick={() => Router.push("/item/" + id)}>
      <div className="favourite-container">
        <BsHeart className="favourite-icon" />
      </div>
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
      <VerticalBox
        gap={"10px"}
        style={{ padding: "15px", maxWidth: "400px" }}
        align="flex-start"
      >
        <MediumText>{title}</MediumText>
        <MediumTextBold>${price}</MediumTextBold>
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
  box-shadow: 2px 6px 45px -11px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 2px 6px 45px -11px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 2px 6px 45px -11px rgba(0, 0, 0, 0.33);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 15px;
  padding: 0px 0px 15px 0px;
  width: 280px;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  .product-img {
    object-fit: "cover";
  }
  .favourite-container {
    z-index: 900;
    position: absolute;
    right: 5%;
    top: 5%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid black;
  }
  .favourite-icon {
    font-size: large;
  }
`;
