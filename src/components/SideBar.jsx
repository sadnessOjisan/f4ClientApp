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
`;

const Logo = styled.div`
  width: 100%;
  height: 100px;
  padding: 24px;
  text-align: center;
`;

const SLogo = styled(LOGOSVG)`
  width: 80%;
`;

const Line = styled.div`
  border-bottom: solid 1px ${COLOR.warmBlack};
  width: 80%;
  height: 2px;
`;

const ItemText = styled.span`
  color: ${props => (props.isSlected ? COLOR.peachPink : COLOR.warmBlack)};
  margin-top: 36px;
`;

const SmallItemText = styled.span`
  color: ${props => (props.isSlected ? COLOR.peachPink : COLOR.warmBlack)};
  margin-top: 36px;
  font-family: HiraginoSans-W3;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
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
