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
  VictoryBrushContainer,
  VictoryPie,
  VictoryAnimation,
  VictoryLabel
} from "victory";

class Sales extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 25,
      data: this.getData(0)
    };
  }

  componentDidMount() {
    const { max } = this.props;
    let percent = 25;
    this.setStateInterval = window.setInterval(() => {
      percent += 1 * 25;
      percent = percent > max ? max : percent;
      this.setState({
        percent,
        data: this.getData(percent)
      });
    }, 500);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    const { type } = this.props;
    return (
      <div>
        {type}
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: d => {
                  const color = d.y > 30 ? "green" : "red";
                  return d.x === 1 ? color : "transparent";
                }
              }
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {newProps => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default Sales;
