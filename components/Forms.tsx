import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { VerticalBox } from "ui/boxes";
import { TertiaryButton } from "ui/buttons";
import { Input } from "ui/inputs";
import { BodyText, Label, Subtitle, TinyText } from "ui/texts";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { getToken, updateAddress, updateUser, validateEmail } from "lib/api";
import { useMe } from "lib/hooks";
import { retrieveToken } from "lib";

export const SignInForm = () => {
  const router = useRouter();
  if (retrieveToken()) router.push("/");
  const [showCodeForm, setShowCodeForm] = useState(false);
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
        <VerticalBox gap={"15px"}>
          <Subtitle>Ingresar</Subtitle>
          <Label>Email</Label>
          <Input type="email" id="email" {...register("email")} />
          {errors.email && (
            <TinyText>{errors.email.message as string}</TinyText>
          )}
          <TertiaryButton>Continuar</TertiaryButton>
        </VerticalBox>
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
  const router = useRouter();
  const onSubmit = async (data: any) => {
    console.log(data);
    await getToken(data.code);
    router.push("/perfil");
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <VerticalBox gap={"15px"}>
          <Subtitle>Codigo</Subtitle>
          <Input type="text" id="code" {...register("code")} />
          {errors.code && <TinyText>{errors.code.message as string}</TinyText>}
          <TertiaryButton>Enviar</TertiaryButton>
          <BodyText>Te enviaremos un codigo a tu mail</BodyText>
        </VerticalBox>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

const profileSchema = object({
  name: string().required("Se necesita el nombre"),
  address: string().required("Se necesita una direccion"),
  telephone: number()
    .typeError("Ingrese un numero telefonico")
    .required("Se necesita un numero telefonico"),
});

export const ProfileForm = () => {
  const userData = useMe();
  const router = useRouter();
  if (!retrieveToken()) router.push("/ingresar");

  const {
    register,
    handleSubmit,
    // clearErrors,
    // setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(profileSchema),
  });
  const onSubmit = async (data: any) => {
    console.log(data);

    if (data.address) await updateAddress(data.address);
    if (data.name || data.telephone)
      await updateUser({ username: data.name, telephone: data.telephone });
    alert("perfil actualizado");
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <VerticalBox gap={"15px"}>
          <Subtitle>Perfil</Subtitle>
          <Label>Nombre completo</Label>
          <Input
            type="text"
            id="name"
            defaultValue={userData?.username || ""}
            {...register("name")}
          />
          {errors.name && <TinyText>{errors.name.message as string}</TinyText>}
          <Label>Direccion</Label>
          <Input
            type="text"
            id={"address"}
            defaultValue={userData?.address || ""}
            {...register("address")}
          />
          {errors.address && (
            <TinyText>{errors.address.message as string}</TinyText>
          )}
          <Label>Telefono</Label>
          <Input
            type="tel"
            id="telephone"
            pattern="[0-9]{4,15}"
            defaultValue={userData?.telephone || ""}
            {...register("telephone")}
          />
          {errors.telephone && (
            <TinyText>{errors.telephone.message as string}</TinyText>
          )}
          <TertiaryButton>Continuar</TertiaryButton>
        </VerticalBox>
      </StyledForm>
    </>
  );
};
