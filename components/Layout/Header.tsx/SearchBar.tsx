import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "ui/buttons";
import { Input } from "ui/inputs";

export const SearchBar = () => {
  const router = useRouter();
  const [queryValue, setQueryValue] = useState("");
  const handleSubmit = (e: any) => {
    console.log(e.target.query.value);
    e.preventDefault();
    if (!(typeof window === undefined) && e.target.query.value) {
      router.push({
        pathname: "/search",
        query: { search: e.target.query.value },
      });
    }
  };
  useEffect(() => {
    const { search } = router.query;
    setQueryValue(search as string);
  }, [router.query]);
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input id="query" defaultValue={queryValue}></Input>
        <SecondaryButton className="search__button">Buscar</SecondaryButton>
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
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    .search__button {
      max-width: 120px;
    }
  }
`;
