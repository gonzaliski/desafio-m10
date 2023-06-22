import { FavouriteButton } from "components/FavouriteButton";
import { useMe } from "lib/hooks";
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import { HorizontalBox, VerticalBox } from "ui/boxes";
import { MdText, MdTextBold } from "ui/texts";
export const ProductCard = ({ id, title, price, imgUrl }: ProductCardProps) => {
  const auth = useMe();

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
        <FavouriteButton />
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
        <TitleContainer>
          <PriceTitle>{title}</PriceTitle>
        </TitleContainer>
        <MdTextBold>${price}</MdTextBold>
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
    z-index: 4;
    position: absolute;
    right: 5%;
    top: 5%;
  }
`;
const PriceTitle = styled(MdText)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
`;
const TitleContainer = styled(HorizontalBox)`
  height: 40px;
  overflow: hidden;
  display: inline-block;
  width: calc(100%);
`;
