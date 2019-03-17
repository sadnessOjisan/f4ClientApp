import * as React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import COLOR from "../constatns/color";
import { connect } from "react-redux";
import { actions } from "../redux/modules/sideBar";
import LOGOSVG from "../assets/logo.svg";

const SideBar = props => {
  console.log(props);
  const { selectedRoute, selectItem } = props;
  return (
    <Wrapper>
      <Logo>
        <SLogo />
      </Logo>
      <Line />
      <ItemText
        onClick={() => {
          selectItem("社員一覧");
          props.history.push("/");
        }}
        isSlected={selectedRoute === "社員一覧"}
      >
        社員一覧
      </ItemText>
      <ItemText
        onClick={() => {
          selectItem("ダッシュボード");
          props.history.push("dashboard");
        }}
        isSlected={selectedRoute === "ダッシュボード"}
      >
        ダッシュボード
      </ItemText>
      <ItemText
        onClick={() => {
          selectItem("設定");
          props.history.push("setting");
        }}
        isSlected={selectedRoute === "設定"}
      >
        設定
      </ItemText>
      <ItemText
        onClick={() => {
          selectItem("ログアウト");
        }}
        isSlected={false}
      >
        ログアウト
      </ItemText>
      <GroupB>
        <ItemText>F4 Tip とは？</ItemText>
        <SmallItemText
          onClick={() => {
            selectItem("利用規約");
            props.history.push("terms");
          }}
          isSlected={selectedRoute === "利用規約"}
        >
          利用規約
        </SmallItemText>
        <SmallItemText
          onClick={() => {
            selectItem("プライバシーポリシー");
            props.history.push("policy");
          }}
          isSlected={selectedRoute === "プライバシーポリシー"}
        >
          プライバシーポリシー
        </SmallItemText>
      </GroupB>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 244px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-right: solid 1px #979797;
  height: 100vh;
`;

const Logo = styled.div`
  width: 60%;
  height: 56px;
  padding: 24px;
  margin-top: 56px;
  margin-bottom: 56px;
  text-align: center;
`;

const SLogo = styled(LOGOSVG)`
  width: 80%;
`;

const Line = styled.div`
  border-bottom: solid 0.5px #979797;
  width: 70%;
  // height: 0.1px;
  }
`;

const ItemText = styled.span`
  color: ${props => (props.isSlected ? COLOR.peachPink : COLOR.warmBlack)};
  margin-top: 36px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const SmallItemText = styled.span`
  color: ${props => (props.isSlected ? COLOR.peachPink : COLOR.warmBlack)};
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-top: 12px;
`;

const GroupB = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 54px;
`;

const mapStateToProps = state => ({
  selectedRoute: state.sideBar.selectedRoute
});

const mapDispatchToProps = dispatch => ({
  selectItem: route => dispatch(actions.selectItem(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBar));
