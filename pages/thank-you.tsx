import { Layout } from "components/Layout/Layout";
import { PageSection } from "ui/boxes";
import { DarkHeading } from "ui/texts";
export default function ThankYou() {
  return (
    <Layout>
      <PageSection sm>
        <DarkHeading position={"center"}>Gracias por tu compra!</DarkHeading>
      </PageSection>
    </Layout>
  );
}
