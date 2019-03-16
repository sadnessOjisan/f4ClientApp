import * as React from "react";
import styled from "styled-components";
import COLOR from "../constatns/color";
import { connect } from "react-redux";
import { actions } from "../redux/modules/sideBar";

const SideBar = props => {
  console.log(props);
  const { selectedRoute, selectItem } = props;
  return (
    <Wrapper>
      <Logo>F4 tip</Logo>
      <Line />
      <ItemText
        onClick={() => selectItem("社員一覧")}
        isSlected={selectedRoute === "社員一覧"}
      >
        社員一覧
      </ItemText>
      <ItemText
        onClick={() => selectItem("ダッシュボード")}
        isSlected={selectedRoute === "ダッシュボード"}
      >
        ダッシュボード
      </ItemText>
      <ItemText
        onClick={() => selectItem("設定")}
        isSlected={selectedRoute === "設定"}
      >
        設定
      </ItemText>
      <ItemText
        onClick={() => selectItem("ログアウト")}
        isSlected={selectedRoute === "ログアウト"}
      >
        ログアウト
      </ItemText>
      <GroupB>
        <ItemText>F4 Tip とは？</ItemText>
        <ItemText>利用規約</ItemText>
        <ItemText>プライバシーポリシー</ItemText>
      </GroupB>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 100%;
  height: 100px;
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

const GroupB = styled.div`
  display: flex;
  flex-direction: column;
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
)(SideBar);
