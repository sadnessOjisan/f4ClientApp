import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";

const Item = (props: Props) => {
  const { className } = props;
  return (
    <Wrapper className={className}>
      <ImageLayout>写真</ImageLayout>
      <Name>名前</Name>
      <PresentName>表示名</PresentName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ImageLayout = styled.p`
  width: calc(30% - 36px);
  color: ${COLOR.warmGrey};
`;

const Name = styled.p`
  width: calc(20% - 24px);
  margin-left: 12px;
  color: ${COLOR.warmGrey};
`;

const PresentName = styled.p`
  width: 20%;
  margin-left: 12px;
  color: ${COLOR.warmGrey};
`;

export default Item;
