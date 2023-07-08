import { deleteFavourite } from "lib/api";
import Image from "next/image";
import Router from "next/router";
import { Suspense } from "react";
import { MdDelete } from "react-icons/md";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { favouriteItemsStateUpdated } from "recoil/atoms";
import styled from "styled-components";
import { HorizontalBox, VerticalBox } from "ui/boxes";
import { LgTextBold, LgTextThin, MdText, SmText } from "ui/texts";
import { ProductDetail, ProductPrice } from "./shopping-cart/styles";

export const Favourites = () => {
  const favourites = useRecoilValue(favouriteItemsStateUpdated);
  const setFavourites = useSetRecoilState(favouriteItemsStateUpdated);
  // const favoriteItemsValue = useRecoilValue(favouriteItemsStateUpdated);
  const handleDelete = async (selectedItem: favouriteItems) => {
    await deleteFavourite(selectedItem.id);
    const newList = favourites.filter(
      (item: favouriteItems) => item.id !== selectedItem.id
    );
    console.log(newList);

    setFavourites(newList);
  };

  return (
    <VerticalBox gap="20px">
      <Suspense fallback={<div>Loading...</div>}>
        {favourites.length == 0 ? (
          <MdText>No has agregado productos a favoritos</MdText>
        ) : (
          favourites.map((item: favouriteItems) => (
            <FavouriteItem gap="10px" key={item.id}>
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
      </Suspense>
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
