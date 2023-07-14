import { useShoppingCart } from "hooks/useShoppingCart";
import { getUserAddress, isUserLogged } from "lib";
import { deleteItemFromCart, generateOrder } from "lib/api";
import Image from "next/image";
import Router from "next/router";
import { MdDelete } from "react-icons/md";
import { useRecoilState } from "recoil";
import { shoppingCartSelector } from "recoil/atoms";
import { HorizontalBox, VerticalBox } from "ui/boxes";
import { MainButton } from "ui/buttons";
import { LgTextBold, LgTextThin, MdText, MdTextBold, SmText } from "ui/texts";
import { removeItemAtIndex } from "utils";
import {
  CartInformationContainer,
  DeleteContainer,
  ItemContainer,
  KeepBuying,
  ProductDetail,
  ProductPrice,
  ShoppingCartContainer,
} from "./styles";

export const ShoppingCart = () => {
  const shoppingCartItems = useShoppingCart();
  let cartIsEmpty = shoppingCartItems.length == 0;
  let totalPrice = shoppingCartItems.reduce(
    (accum, curr) => accum + curr.price,
    0
  );
  const handleBuy = async () => {
    if (!isUserLogged()) Router.push("/ingresar");
    const address = getUserAddress();
    const { url } = await generateOrder(address, shoppingCartItems);
    Router.push(url);
  };
  return (
    <>
      <MdText>{shoppingCartItems.length} productos</MdText>
      {!cartIsEmpty ? (
        <ShoppingCartContainer gap="25px" align="stretch">
          <VerticalBox>
            <KeepBuying href="/" align="flex-start">
              Seguir comprando
            </KeepBuying>
            {shoppingCartItems.map((item: shoppingCartItem) => (
              <ShoppingCartItem key={item.id} product={item} />
            ))}
          </VerticalBox>
          <VerticalBox gap="20px">
            <CartInformation total={totalPrice}></CartInformation>
            <MainButton onClick={handleBuy}>COMPRAR</MainButton>
          </VerticalBox>
        </ShoppingCartContainer>
      ) : (
        <VerticalBox>
          <KeepBuying href="/">Volver a la tienda</KeepBuying>
          <LgTextBold>No tienes ningun producto en el carrito</LgTextBold>
        </VerticalBox>
      )}
    </>
  );
};

const CartInformation = ({ total }: { total: number }) => {
  const precioEnvio = 0;

  return (
    <CartInformationContainer align="stretch" gap={"10px"}>
      <HorizontalBox>
        <MdText>Subtotal</MdText>
        <MdTextBold>{total}</MdTextBold>
      </HorizontalBox>
      <HorizontalBox>
        <MdText>Envío</MdText>
        <MdTextBold>{precioEnvio}</MdTextBold>
      </HorizontalBox>
      <HorizontalBox>
        <MdTextBold>Total</MdTextBold>
        <MdTextBold>{total + precioEnvio}</MdTextBold>
      </HorizontalBox>
    </CartInformationContainer>
  );
};

const ShoppingCartItem = ({ product }: { product: shoppingCartItem }) => {
  const [shoppingCartItems, setShoppingCartItems] =
    useRecoilState(shoppingCartSelector);
  const index = shoppingCartItems.findIndex(
    (item: shoppingCartItem) => item === product
  );
  const handleDelete = async () => {
    const newList = removeItemAtIndex(shoppingCartItems, index);
    await deleteItemFromCart(product.id);
    setShoppingCartItems(newList);
  };
  return (
    <ItemContainer>
      <Image
        src={product.imgUrl}
        alt={"product-image"}
        width={100}
        height={100}
      ></Image>
      <ProductDetail align="flex-start" gap="10px">
        <LgTextThin>{product.title}</LgTextThin>
        <MdText>Cantidad: 1</MdText>
        <SmText>{product.size}</SmText>
      </ProductDetail>
      <ProductPrice>
        <MdText>Total</MdText>
        <LgTextBold>$ {product.price}</LgTextBold>
      </ProductPrice>
      <DeleteContainer onClick={handleDelete}>
        <MdDelete className="icon"></MdDelete>
      </DeleteContainer>
    </ItemContainer>
  );
};
