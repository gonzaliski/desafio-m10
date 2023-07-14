import { yupResolver } from "@hookform/resolvers/yup";
import { isUserLogged } from "lib";
import { getToken, validateEmail } from "lib/api";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { VerticalBox } from "ui/boxes";
import { TertiaryButton } from "ui/buttons";
import { FormItems, StyledForm } from "ui/forms";
import { Input } from "ui/inputs";
import { Label, MdText, Subtitle, TinyMdText } from "ui/texts";
import { object, string } from "yup";

export const SignInForm = () => {
  const [showCodeForm, setShowCodeForm] = useState(false);
  useEffect(() => {
    if (isUserLogged()) Router.push("/");
  }, []);
  return (
    <>
      {showCodeForm ? (
        <CodeForm></CodeForm>
      ) : (
        <EmailForm nextStep={setShowCodeForm}></EmailForm>
      )}
    </>
  );
};

const emailSchema = object({
  email: string().email().required("Se necesita un email"),
});

const EmailForm = (props: any) => {
  const {
    register,
    handleSubmit,
    // clearErrors,
    // setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(emailSchema),
  });
  const onSubmit = async (data: any) => {
    console.log(data.email);
    await validateEmail(data.email);
    props.nextStep(true);
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormItems gap={"15px"}>
          <Subtitle>Ingresar</Subtitle>
          <MdText>
            Para poder agregar productos al carrito o modificar tu lista de
            favoritos es necesario que ingreses.
          </MdText>
          <Label>Email</Label>
          <Input type="email" id="email" {...register("email")} />
          {errors.email && (
            <TinyMdText>{errors.email.message as string}</TinyMdText>
          )}
          <TertiaryButton>Continuar</TertiaryButton>
        </FormItems>
      </StyledForm>
    </>
  );
};

const codeSchema = object({
  code: string().required("Ingrese el codigo para continuar"),
});

const CodeForm = () => {
  const {
    register,
    handleSubmit,
    // clearErrors,
    // setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(codeSchema),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    await getToken(data.code);
    Router.push("/perfil");
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <VerticalBox gap={"15px"}>
          <Subtitle>Codigo</Subtitle>
          <Input type="text" id="code" {...register("code")} />
          {errors.code && (
            <TinyMdText>{errors.code.message as string}</TinyMdText>
          )}
          <TertiaryButton>Enviar</TertiaryButton>
          <MdText>Te enviaremos un codigo a tu mail</MdText>
        </VerticalBox>
      </StyledForm>
    </>
  );
};
