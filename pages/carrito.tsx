import { Layout } from "components/Layout/Layout";
import { ShoppingCart } from "components/shopping-cart/ShoppingCart";
import { PageSection } from "ui/boxes";
import { Subtitle } from "ui/texts";

export default function Carrito() {
  return (
    <>
      <Layout>
        <PageSection align={"center"} justify={"flex-start"} gap="45px">
          <Subtitle>Carrito</Subtitle>
          <ShoppingCart></ShoppingCart>
        </PageSection>
      </Layout>
    </>
  );
}
