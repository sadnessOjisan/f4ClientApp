import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import COLOR from "../constatns/color";
import Button from "../components/Button";
import Bell from "../assets/Bell.png";
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryAxis,
  VictoryBrushContainer
} from "victory";

class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] }
    };
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }
  render() {
    const { className, children, selectedRoute } = this.props;
    return (
      <Container>
        <TitleRow>
          <Title>{selectedRoute}</Title>
          <SideMenu>
            <Button>+ 社員を追加する</Button>
            <NotifyBox>
              <SImg src={Bell} />
              <NoticeText>通知</NoticeText>
            </NotifyBox>
          </SideMenu>
        </TitleRow>
        <Wrapper className={className}>
          <div>
            <VictoryChart
              width={600}
              height={470}
              scale={{ x: "time" }}
              containerComponent={
                <VictoryZoomContainer
                  zoomDimension="x"
                  zoomDomain={this.state.zoomDomain}
                  onZoomDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={[
                  { a: new Date(1982, 1, 1), b: 125 },
                  { a: new Date(1987, 1, 1), b: 257 },
                  { a: new Date(1993, 1, 1), b: 345 },
                  { a: new Date(1997, 1, 1), b: 515 },
                  { a: new Date(2001, 1, 1), b: 132 },
                  { a: new Date(2005, 1, 1), b: 305 },
                  { a: new Date(2011, 1, 1), b: 270 },
                  { a: new Date(2015, 1, 1), b: 470 }
                ]}
                x="a"
                y="b"
              />
            </VictoryChart>
            <VictoryChart
              padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
              width={600}
              height={100}
              scale={{ x: "time" }}
              containerComponent={
                <VictoryBrushContainer
                  brushDimension="x"
                  brushDomain={this.state.zoomDomain}
                  onBrushDomainChange={this.handleZoom.bind(this)}
                />
              }
            >
              <VictoryAxis tickFormat={x => new Date(x).getFullYear()} />
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={[
                  { key: new Date(1982, 1, 1), b: 125 },
                  { key: new Date(1987, 1, 1), b: 257 },
                  { key: new Date(1993, 1, 1), b: 345 },
                  { key: new Date(1997, 1, 1), b: 515 },
                  { key: new Date(2001, 1, 1), b: 132 },
                  { key: new Date(2005, 1, 1), b: 305 },
                  { key: new Date(2011, 1, 1), b: 270 },
                  { key: new Date(2015, 1, 1), b: 470 }
                ]}
                x="key"
                y="b"
              />
            </VictoryChart>
          </div>
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 48px;
  width: calc(100% - 244px);
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotifyBox = styled.div`
  width: 100px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

const Title = styled.h2`
  color: ${COLOR.warmBlack};
  font-family: HiraginoSans-W6;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  width: 200px;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 200px);
`;

const SImg = styled.img`
  height: 15px;
  width: 15px;
`;

const TitleRow = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 82px;
  align-items: center;
`;

const NoticeText = styled.p`
  width: 28px;
  height: 14px;
  font-family: HiraginoSans-W3;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${COLOR.warmBlack};
  margin-left: 8px;
  justify-content: flex-end;
`;

const mapStateToProps = state => ({
  selectedRoute: state.sideBar.selectedRoute
});

export default connect(
  mapStateToProps,
  null
)(DashBoard);
