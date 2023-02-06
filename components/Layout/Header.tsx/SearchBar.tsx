import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "ui/buttons";
import { Input } from "ui/inputs";

export const SearchBar = () => {
  const router = useRouter();
  const [queryValue, setQueryValue] = useState("");
  useEffect(() => {
    const { q } = router.query;
    setQueryValue(q as string);
  }, [router.query]);
  const handleSubmit = (e: any) => {
    console.log(e.target.query.value);

    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { search: e.target.query.value },
    });
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input id="query" defaultValue={queryValue}></Input>
        <SecondaryButton>Buscar</SecondaryButton>
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 15px;
`;
