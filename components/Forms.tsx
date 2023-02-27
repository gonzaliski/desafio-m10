import { yupResolver } from "@hookform/resolvers/yup";
import { isUserLogged, saveUserDataOnLS } from "lib";
import { getToken, updateAddress, updateUser, validateEmail } from "lib/api";
import { useMe } from "lib/hooks";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { VerticalBox } from "ui/boxes";
import { TertiaryButton } from "ui/buttons";
import { Input } from "ui/inputs";
import { BodyText, Label, Subtitle, TinyText } from "ui/texts";
import { number, object, string } from "yup";

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
  code: number().required("Ingrese el codigo para continuar"),
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
          <Input type="number" id="code" {...register("code")} />
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
  username: string().required("Se necesita el nombre"),
  address: string().required("Se necesita una direccion"),
  telephone: number()
    .typeError("Ingrese un numero telefonico")
    .required("Se necesita un numero telefonico"),
});

export const ProfileForm = () => {
  const userData = useMe();
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
    if (data.username || data.telephone) {
      await updateUser({ username: data.username, telephone: data.telephone });
    }
    saveUserDataOnLS({
      username: data.username,
      telephone: data.telephone,
      address: data.address,
    });
    alert("perfil actualizado");
  };
  useEffect(() => {
    if (!isUserLogged()) Router.push("/ingresar");
    console.log("userData:", userData);
    if (userData) {
      console.log("guardar en la wea");

      const { username, telephone, address } = userData;
      saveUserDataOnLS({ username, telephone, address });
    }
  }, [userData]);
  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <VerticalBox gap={"15px"}>
          <Subtitle>Perfil</Subtitle>
          <Label>Usuario</Label>
          <Input
            type="text"
            id="username"
            defaultValue={userData?.username || ""}
            {...register("username")}
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
          <TertiaryButton>Guardar</TertiaryButton>
        </VerticalBox>
      </StyledForm>
    </>
  );
};
