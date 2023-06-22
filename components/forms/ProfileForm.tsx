import { yupResolver } from "@hookform/resolvers/yup";
import { isUserLogged, saveUserDataOnLS } from "lib";
import { updateAddress, updateUser } from "lib/api";
import { useMe } from "lib/hooks";
import Router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TertiaryButton } from "ui/buttons";
import { StyledForm, FormItems } from "ui/forms";
import { Input } from "ui/inputs";
import { Label, Subtitle, TinyMdText } from "ui/texts";
import { number, object, string } from "yup";
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormItems gap={"15px"}>
        <Subtitle>Perfil</Subtitle>
        <Label>Usuario</Label>
        <Input
          type="text"
          id="username"
          defaultValue={userData?.username || ""}
          {...register("username")}
        />
        {errors.name && (
          <TinyMdText>{errors.name.message as string}</TinyMdText>
        )}
        <Label>Direccion</Label>
        <Input
          type="text"
          id={"address"}
          defaultValue={userData?.address || ""}
          {...register("address")}
        />
        {errors.address && (
          <TinyMdText>{errors.address.message as string}</TinyMdText>
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
          <TinyMdText>{errors.telephone.message as string}</TinyMdText>
        )}
        <TertiaryButton>Guardar</TertiaryButton>
      </FormItems>
    </StyledForm>
  );
};
