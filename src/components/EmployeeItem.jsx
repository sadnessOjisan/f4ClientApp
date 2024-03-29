import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";
import QRI from "../assets/QR.png";

const Item = props => {
  const { item, className, onClick } = props;
  return (
    <Wrapper className={className} onClick={onClick}>
      <ImageLayout>
        <SImage
          src={
            item.faceImage
              ? item.faceImage
              : "https://www.pakutaso.com/shared/img/thumb/kawamura1029IMGL4517_TP_V.jpg"
          }
        />
      </ImageLayout>

      <Name>{item.name}</Name>
      <PresentName>{item.nick_name}</PresentName>
      <SetLayout>
        <QR src={QRI} />
        <Edit>編集</Edit>
      </SetLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  &:hover {
    border-width: 1.5px;
    border-image-source: ${`linear-gradient(
      to right,
      ${COLOR.peachYellow},
      ${COLOR.peachPink}
    )`};
    border-image-slice: 1;
    border-style: solid;
  }
`;

const ImageLayout = styled.div`
  width: 30%;
`;

const SImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 20px;
`;

const Name = styled.p`
  width: 20%;
  margin-left: 12px;
  color: ${COLOR.warmBlack};
`;

const PresentName = styled.p`
  width: 20%;
  margin-left: 12px;
  color: ${COLOR.warmBlack};
`;

const QR = styled.img`
  width: 48px;
  height: 48px;
`;

const Edit = styled.p`
  color: ${COLOR.peachPink};
  display: flex;
  align-items: center;
`;

const SetLayout = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  > * {
    margin-right: 60px;
  }
`;
export default Item;
