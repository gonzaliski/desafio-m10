import Link from "next/link";
import styled from "styled-components";
import { HorizontalBox } from "ui/boxes";
import { MdTextSuperBold } from "ui/texts";

export const ShortCuts = () => {
  return (
    <ShortCutsContainer>
      <Link href={"/search/hombre"} passHref legacyBehavior>
        <MdTextSuperBold className="link">Hombre</MdTextSuperBold>
      </Link>
      <Link href={"/search/mujer"} passHref legacyBehavior>
        <MdTextSuperBold className="link">Mujer</MdTextSuperBold>
      </Link>
      <Link href={"/search?search="} passHref legacyBehavior>
        <MdTextSuperBold className="link">Todos</MdTextSuperBold>
      </Link>
    </ShortCutsContainer>
  );
};

const ShortCutsContainer = styled(HorizontalBox)`
  background-color: white;
  color: black;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  border-bottom: 1px solid lightgray;
  border-spacing: 20px;
  .link {
    cursor: pointer;
  }
`;
