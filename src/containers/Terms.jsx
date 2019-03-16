import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";

const Button = (props: Props) => {
  const { className, children } = props;
  return <Wrapper className={className}>工事中</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
