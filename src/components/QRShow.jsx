import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";
import LOGOSVG from "../assets/logo.svg";
import QR from "../assets/QR.png";
import Button from "../components/Button";
const QRShow = (props: Props) => {
  const { className, name } = props;
  return (
    <Wrapper className={className}>
      <Header>{name}さんのQRコード</Header>
      <Body>
        <Card>
          <SLogo />
          <TextBox>
            tippyは気軽に店員にチップを渡せるサービスです。お金はかかりません。QRコードを読み、メッセージを送信することで、あやみんさんにチップが送られる仕組みになっています。
            今日あなたがサービスを受けたあやみんさんにぜひ感謝のメッセージをお願いします。
          </TextBox>
          <QRImage src={QR} />
          <NickNameBox>{name}</NickNameBox>
          <MsgNameBox>
            本日はありがとうございました！ メッセージは毎日の励みになるので
            もしよろしければお願いします😘
          </MsgNameBox>
        </Card>
        <Button>QRコードを印刷する</Button>
      </Body>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.white};
  border-radius: 16px;
  padding: 32px;
  overflow-y: scroll;
`;
const Header = styled.div`
  font-family: HiraginoSans-W6;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${COLOR.warmBlack};
  margin-bottom: 54px;
`;
const Body = styled.div`
  display: flex;
  flex-direction:column
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Card = styled.div`
  width: 33%;
  height: 100%;
  border-style: solid;
  border-width: 6px;
  border-image-slice: 1;
  border-image-source: ${`linear-gradient(148deg, #ffc2ae, #fe9aa4)`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin-bottom: 44px;
`;
const SLogo = styled(LOGOSVG)`
  width: 50%;
`;
const TextBox = styled.div`
  font-family: HiraginoSans-W3;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const QRImage = styled.img`
  width: 64px;
  height: 64px;
`;
const NickNameBox = styled.div`
  margin-top: 20px;
  font-family: HiraginoSans-W6;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${COLOR.warmBlack};
`;
const MsgNameBox = styled.div`
  width: 232px;
  height: 116px;
  border-radius: 20px;
  border: solid 1px #ececec;
  margin-top: 12px;
  padding: 16px;
  font-family: HiraginoSans-W6;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #f98980;
`;
export default QRShow;
