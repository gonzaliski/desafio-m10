import { SignInForm } from "components/Forms";
import { Layout } from "components/Layout/Layout";
import { PageSection } from "ui/boxes";

export default function Ingresar() {
  return (
    <Layout>
      <PageSection sm>
        <SignInForm></SignInForm>
      </PageSection>
    </Layout>
  );
}
