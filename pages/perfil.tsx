import { ProfileForm } from "components/Forms";
import { Layout } from "components/Layout/Layout";
import { PageSection, VerticalBox } from "ui/boxes";
import { TertiaryButton } from "ui/buttons";
import { Input } from "ui/inputs";
import { Label, Subtitle } from "ui/texts";

export default function Perfil() {
  return (
    <>
      <Layout>
        <PageSection>
          <ProfileForm></ProfileForm>
        </PageSection>
      </Layout>
    </>
  );
}
