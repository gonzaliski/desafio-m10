import { useMe } from "lib/hooks";
import Router from "next/router";
import { useState } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState } from "recoil";
import { favouriteItemsState } from "recoil/atoms";
import styled from "styled-components";

export const FavouriteButton = ({ product }: { product: favouriteItems }) => {
  const setNewFavourite = useSetRecoilState(favouriteItemsState);
  const auth = useMe();

  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    let shouldShowSuccess = !isFavourite;
    if (!auth) {
      Router.push("/ingresar");
    }
    setIsFavourite(!isFavourite);
    if (!shouldShowSuccess) {
      toast.info("Producto eliminado de favoritos", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setNewFavourite((prev) => [...prev, product]);
    toast.success("Producto agregado a favoritos", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  return (
    <>
      <ToastContainer />
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
    </>
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
