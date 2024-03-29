import { DetailCarousel } from "components/Carousel/DetailCarousel";
import { FavouriteButton } from "components/FavouriteButton";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { shoppingCartSelector, shoppingCartState } from "recoil/atoms";
import styled from "styled-components";
import { HorizontalBox } from "ui/boxes";
import { MainButton } from "ui/buttons";
import { MdText, Subtitle, ThinSubtitle } from "ui/texts";
import { SizeSelector } from "./SizeSelector";
import { findProductById } from "utils";
import { Stock } from "./Stock";
import { useFavourites } from "hooks/useFavourite";
import { addProductToCart } from "lib/api";

export const ProductCardDetail = ({
  product,
}: {
  product: ProductCardDetailProps;
}) => {
  const favourites = useFavourites();
  const [selectedSize, setSelectedSize] = useState("");
  const [inShoppingCart, setInShoppingCart] = useState(false);
  const shoppingCartItems = useRecoilValue(shoppingCartState);
  const setNewItem = useSetRecoilState(shoppingCartSelector);
  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };
  const addToCart = async () => {
    const newProduct = {
      id: product.id,
      imgUrl: product.images[0],
      size: selectedSize,
      title: product.title,
      price: product.price,
    };
    try {
      await addProductToCart(newProduct);
      setNewItem([...shoppingCartItems, newProduct]);
      toast.success("Producto agregado al carrito", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (e) {
      console.error(e);
      toast.error("Ha ocurrido un problema en el sistema", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };
  const favouritesIds = favourites.map((f: favouriteItems) => f.id);
  const isInFavouritesList = (id: string) => {
    return favouritesIds.includes(id);
  };
  useEffect(() => {
    if (findProductById(shoppingCartItems, product.id)) {
      setInShoppingCart(true);
    } else {
      setInShoppingCart(false);
    }
  }, [shoppingCartItems]);
  return (
    <ProductDetail>
      <DetailCarousel images={product?.images}></DetailCarousel>
      <ProductInformation>
        <ThinSubtitle>{product?.title}</ThinSubtitle>
        <Stock available={product?.stock} />
        <Subtitle>${product?.price}</Subtitle>
        <SizeSelector
          onChange={handleSizeSelection}
          available={product?.sizesAvailable}
        ></SizeSelector>
        <HorizontalBox gap="20px">
          <MainButton
            onClick={addToCart}
            disabled={!product?.stock || selectedSize == "" || inShoppingCart}
          >
            Agregar al carrito
          </MainButton>
          <ToastContainer />
          <FavouriteButton
            product={{
              id: product?.id,
              image: product?.images[0],
              title: product?.title,
              price: product?.price,
              isAlreadyFavourite: isInFavouritesList(product?.id),
            }}
          />
        </HorizontalBox>
        <ThinSubtitle>Descripcion</ThinSubtitle>
        <MdText>{product?.description}</MdText>
      </ProductInformation>
    </ProductDetail>
  );
};

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;
  padding: 0 5% 0 5%;
  .product-img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 550px) {
    align-items: flex-start;
    flex-direction: row;
    .product-img {
      min-height: 250px;
      min-width: 250px;
    }
  }
  @media (min-width: 768px) {
    .product-img {
      max-height: 500px;
      max-width: 500px;
    }
  }
  @media (min-width: 1024px) {
    max-width: 65%;
  }
`;

const ProductInformation = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 90%;
  @media (min-width: 550px) {
    max-width: 40%;
  }
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
