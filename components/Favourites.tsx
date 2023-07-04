import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { favouriteItemsState } from "recoil/atoms";
import styled from "styled-components";
import { HorizontalBox, VerticalBox } from "ui/boxes";
import { LgTextBold, LgTextThin, MdText, SmText } from "ui/texts";
import { ProductDetail, ProductPrice } from "./shopping-cart/styles";
import { MdDelete } from "react-icons/md";
import Router from "next/router";
import { removeItemAtIndex } from "utils";

export const Favourites = () => {
  const favouriteItems = useRecoilValue(favouriteItemsState);
  const [favouritesItems, setFavouritesItems] =
    useRecoilState(favouriteItemsState);
  const handleDelete = (selectedItem: favouriteItems) => {
    const index = favouritesItems.findIndex((item) => item === selectedItem);
    const newList = removeItemAtIndex(favouritesItems, index);
    setFavouritesItems(newList);
  };
  return (
    <VerticalBox gap="20px">
      {favouriteItems.length == 0 ? (
        <MdText>No has agregado productos a favoritos</MdText>
      ) : (
        favouriteItems.map((item) => (
          <FavouriteItem gap="10px">
            <Image
              src={item.image}
              alt={"product-image"}
              width={100}
              height={100}
            ></Image>
            <ProductDetailFavourite
              align="flex-start"
              gap="10px"
              onClick={() => Router.push("/items/" + item.id)}
            >
              <LgTextThin>{item.title}</LgTextThin>
              <MdText>Cantidad: 1</MdText>
              <SmText>talle:42</SmText>
            </ProductDetailFavourite>
            <ProductPriceFavourite>
              <MdDelete
                className="icon"
                onClick={() => handleDelete(item)}
              ></MdDelete>
              <div>
                <MdText>Total</MdText>
                <LgTextBold>{"$" + item.price}</LgTextBold>
              </div>
            </ProductPriceFavourite>
          </FavouriteItem>
        ))
      )}
    </VerticalBox>
  );
};

const FavouriteItem = styled(HorizontalBox)`
  border: 1px solid lightgray;
  border-radius: 10px;
  justify-content: center;
  padding: 10px 0 10px 0;
  .icon {
    margin: 1%;
    font-size: x-large;
    cursor: pointer;
    &:hover {
      filter: brightness("30%");
      transition: all ease-in-out 0.5s;
    }
  }
`;
const ProductDetailFavourite = styled(ProductDetail)`
  cursor: pointer;
  width: 300px;
`;
const ProductPriceFavourite = styled(ProductPrice)`
  justify-content: space-between;
  align-self: auto;
  align-items: center;
  width: min-content;
`;
