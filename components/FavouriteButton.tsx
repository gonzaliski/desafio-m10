import { useMe } from "lib/hooks";
import Router from "next/router";
import { useState } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import styled from "styled-components";

export const FavouriteButton = () => {
  const auth = useMe();

  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    if (!auth) {
      Router.push("/ingresar");
    }
    console.log("me gusta");
    setIsFavourite(!isFavourite);
  };
  return (
    <FavouriteContainer
      className="favourite-container"
      onClick={(e) => {
        e.stopPropagation();
        handleFavourite();
      }}
    >
      {isFavourite ? (
        <BsHeartFill className="favourite-icon" />
      ) : (
        <BsHeart className="favourite-icon" />
      )}
    </FavouriteContainer>
  );
};
const FavouriteContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  .favourite-icon {
    font-size: large;
  }
`;
