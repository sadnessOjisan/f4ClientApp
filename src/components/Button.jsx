import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";

const Button = (props: Props) => {
  const { className } = props;
  return <Wrapper className={className}>+ 社員を追加する</Wrapper>;
};

const Wrapper = styled.button`
  width: 144px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLOR.peachPink};
  color: ${COLOR.peachPink};
  border-image-slice: 1;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: ${COLOR.peachPink};
    color: ${COLOR.white};
  }
`;

export default Button;
