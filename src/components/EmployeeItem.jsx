import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";

type Props = {
  item: Object
};

const Item = (props: Props) => {
  const { item, className } = props;
  return (
    <Wrapper className={className}>
      <SImage
        src={
          item.image
            ? item.image
            : "https://www.pakutaso.com/shared/img/thumb/kawamura1029IMGL4517_TP_V.jpg"
        }
      />
      <Name>{item.name}</Name>
      <PresentName>{item.presentName}</PresentName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px;
`;

const SImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 20px;
`;

const Name = styled.p`
  width: 40%;
  margin-left: 12px;
  color: ${COLOR.warmBlack};
`;

const PresentName = styled.p`
  width: 40%;
  margin-left: 12px;
  color: ${COLOR.warmBlack};
`;

export default Item;
