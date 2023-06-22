import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { useRecoilValue, useRecoilState } from "recoil";
import { shoppingCartState } from "recoil/atoms";
import styled from "styled-components";
import { HorizontalBox, VerticalBox } from "ui/boxes";
import { MainButton } from "ui/buttons";
import { LgTextThin, LgTextBold, SmText, MdText, MdTextBold } from "ui/texts";
import { removeItemAtIndex } from "utils";

export const ShoppingCart = () => {
  const shoppingCartItems = useRecoilValue(shoppingCartState);
  let totalPrice = shoppingCartItems.reduce(
    (accum, curr) => accum + curr.price,

    0
  );
  return (
    <>
      <MdText>{shoppingCartItems.length} productos</MdText>
      <ShoppingCartContainer gap="25px" align="stretch">
        <VerticalBox>
          {shoppingCartItems.map((item: shoppingCartItem) => (
            <ShoppingCartItem key={item.id} product={item} />
          ))}
        </VerticalBox>
        <VerticalBox gap="20px">
          <CartInformation total={totalPrice}></CartInformation>
          <MainButton>COMPRAR</MainButton>
        </VerticalBox>
      </ShoppingCartContainer>
    </>
  );
};

const CartInformation = ({ total }: { total: number }) => {
  return (
    <CartInformationContainer align="stretch" gap={"10px"}>
      <HorizontalBox>
        <MdText>Subtotal</MdText>
        <MdTextBold>{total}</MdTextBold>
      </HorizontalBox>
      <HorizontalBox>
        <MdText>Envío</MdText>
        <MdTextBold>$130</MdTextBold>
      </HorizontalBox>
      <HorizontalBox>
        <MdTextBold>Total</MdTextBold>
        <MdTextBold>{total + 130}</MdTextBold>
      </HorizontalBox>
    </CartInformationContainer>
  );
};

const CartInformationContainer = styled(VerticalBox)`
  min-width: 300px;
`;

const ShoppingCartItem = ({ product }: { product: shoppingCartItem }) => {
  const [shoppingCartItems, setShoppingCartItems] =
    useRecoilState(shoppingCartState);
  const index = shoppingCartItems.findIndex((item) => item === product);
  const handleDelete = () => {
    const newList = removeItemAtIndex(shoppingCartItems, index);
    setShoppingCartItems(newList);
  };
  return (
    <ItemContainer>
      <Image
        src={product.image}
        alt={"product-image"}
        width={100}
        height={100}
      ></Image>
      <ProductDetail align="flex-start" gap="10px">
        <LgTextThin>{product.title}</LgTextThin>
        <MdText>Cantidad: 1</MdText>
        <SmText>talle:42</SmText>
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

const ShoppingCartContainer = styled(VerticalBox)`
  @media (min-width: 768px) {
    justify-content: center;
    width: 100%;
    flex-direction: row;
  }
`;

const ItemContainer = styled(HorizontalBox)`
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2%;
  @media (min-width: 1024px) {
    min-width: 550px;
    max-width: 600px;
  }
`;
const ProductDetail = styled(VerticalBox)`
  flex: 0 1 30%;
  @media (min-width: 768px) {
    flex: 0 1 50%;
  }
`;
const ProductPrice = styled(VerticalBox)`
  align-items: flex-start;
  align-self: flex-end;
  width: 100px;
  gap: 4px;
`;
const DeleteContainer = styled.div`
  cursor: pointer;
  display: flex;
  place-items: center;
  font-size: x-large;
  padding: 10px;
  height: 30%;
`;
