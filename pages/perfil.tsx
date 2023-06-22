import { ProfileForm } from "components/forms/ProfileForm";
import { Layout } from "components/Layout/Layout";
import { PageSection } from "ui/boxes";

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
