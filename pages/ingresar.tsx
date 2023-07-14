import { SignInForm } from "components/forms/LoginForm";
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
