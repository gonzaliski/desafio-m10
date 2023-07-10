import Router from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineSelector } from "react-icons/hi";
import styled from "styled-components";
import { HorizontalBox, VerticalBox } from "ui/boxes";
import { MdText } from "ui/texts";

type option = { name: string; value: string };

export const SortFilter = () => {
  const optionList = [
    { name: "Más relevante", value: "most-relevant" },
    { name: "Menor precio", value: "lower-price" },
    { name: "Mayor precio", value: "higher-price" },
  ];
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState(optionList[0]);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const handleSelect = (op: option) => {
    setOption(op);
    setIsActive(false);
  };

  const handleOnBlur = () => {
    setIsActive(false);
  };
  return (
    <div>
      <Preview align="center" onClick={handleClick} onBlur={handleOnBlur}>
        <MdText>{option.name}</MdText>
        <HiOutlineSelector />
      </Preview>
      {isActive && <Options options={optionList} onSelect={handleSelect} />}
    </div>
  );
};

const Preview = styled(HorizontalBox)`
  background-color: white;
  width: 150px;
  border: 1px solid lightgray;
  padding: 5px;
`;

const Options = ({
  options,
  onSelect,
}: {
  options: option[];
  onSelect: (o: option) => void;
}) => {
  const [selected, setSelected] = useState(false);

  const handleSelection = (op: option) => {
    setSelected(true);
    onSelect(op);
    const currentQueries = { ...Router.query };
    const updatedQueries = { ...currentQueries, rule: op.value };

    Router.push({
      pathname: "/search",
      query: updatedQueries,
    });
  };
  return (
    <OptionsContainer align="flex-start">
      <ul>
        {options.map((op, idx) => (
          <li
            key={idx}
            onClick={() => handleSelection(op)}
            className={selected ? "selected" : ""}
          >
            <MdText>{op.name}</MdText>
          </li>
        ))}
      </ul>
    </OptionsContainer>
  );
};

const OptionsContainer = styled(VerticalBox)`
  background-color: white;
  border: 1px solid lightgray;
  width: 150px;

  ul {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  li {
    .selected {
      background-color: dodgerblue;
      color: white;
    }
    cursor: pointer;
    &:hover {
      background-color: dodgerblue;
      color: white;
    }
    padding: 5px;
    list-style: none;
  }
`;
