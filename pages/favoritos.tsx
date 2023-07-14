import { Favourites } from "components/Favourites";
import { Layout } from "components/Layout/Layout";
import { PageSection } from "ui/boxes";
import { Subtitle } from "ui/texts";

export default function Favoritos() {
  return (
    <>
      <Layout>
        <PageSection align={"center"} justify={"flex-start"} gap="45px">
          <Subtitle>Favoritos</Subtitle>
          <Favourites />
        </PageSection>
      </Layout>
    </>
  );
}
