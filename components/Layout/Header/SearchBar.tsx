import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SearchButton } from "ui/buttons";
import { SearchInput } from "ui/inputs";
import { MdSearch } from "react-icons/md";

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
    console.log(search);

    setQueryValue(search as string);
  }, [router.query]);
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput id="query" defaultValue={queryValue}></SearchInput>
        <SearchButton>
          <MdSearch />
        </SearchButton>
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  @media (min-width: 768px) {
    padding-top: 0px;
    flex-direction: row;
    justify-content: center;
    .search__button {
      max-width: 120px;
    }
  }
`;
