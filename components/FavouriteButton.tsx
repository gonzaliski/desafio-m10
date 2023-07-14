import { deleteFavourite, setNewFavourite } from "lib/api";
import { useMe } from "lib/hooks";
import Router from "next/router";
import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { favouriteItemsState } from "recoil/atoms";
import styled from "styled-components";

export const FavouriteButton = ({ product }: { product: favouriteItems }) => {
  const [favourites, setFavourite] = useRecoilState(favouriteItemsState);
  // const setFavourite = useSetRecoilValue(favouriteItemsStateUpdated);
  const auth = useMe();

  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = async () => {
    let shouldShowSuccess = !isFavourite;
    if (!auth) {
      Router.push("/ingresar");
    }
    setIsFavourite(!isFavourite);
    //elimina de favoritos
    if (!shouldShowSuccess) {
      toast.info("Producto eliminado de favoritos", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      await deleteFavourite(product.id);

      // setFavourite(
      //   favourites.filter((fav: favouriteItems) => fav.id !== product.id)
      // );
      return;
    }

    await setNewFavourite(product);
    // setFavourite(product);
    toast.success("Producto agregado a favoritos", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  // const isAlreadyFav = favourites.find(
  //   (f: favouriteItems) => f.id == product.id
  // );

  useEffect(() => {
    if (product.isAlreadyFavourite) {
      setIsFavourite(true);
    }
    // if (isUserLogged() && isAlreadyFav) {
    //   setIsFavourite(true);
    // }
  }, [product.isAlreadyFavourite]);
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
