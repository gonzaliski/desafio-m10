import { Layout } from "components/Layout/Layout";
import { ShoppingCart } from "components/shopping-cart/ShoppingCart";
import { BsCart } from "react-icons/bs";
import { HorizontalBox, PageSection } from "ui/boxes";
import { Subtitle } from "ui/texts";

export default function Carrito() {
  return (
    <>
      <Layout>
        <PageSection align={"center"} justify={"flex-start"} gap="45px">
          <HorizontalBox align="center" gap="10px">
            <BsCart className="icon"></BsCart>
            <Subtitle>Carrito</Subtitle>
          </HorizontalBox>
          <ShoppingCart></ShoppingCart>
        </PageSection>
      </Layout>
    </>
  );
}
