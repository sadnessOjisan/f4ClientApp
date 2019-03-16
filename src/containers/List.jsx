import * as React from "react";
import { type Dispatch } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions } from "../redux/modules/employee";
import Item from "../components/EmployeeItem";
import ItemHeader from "../components/EmployeeHeader";
import SideBar from "../components/SideBar";
import COLOR from "../constatns/color";

type MapStateToProps = {|
  +employeeIsLoading: boolean,
  +employeeIsLoaded: boolean,
  +data: TCards | null,
  +error: TError | null
|};

type MapDispatchToProps = {|
  +startFetchData: typeof actions.startFetchData,
  +startPostValue: typeof messageActions.startPostValue
|};

type Props = {|
  ...MapStateToProps,
  ...MapDispatchToProps
|};

class List extends React.Component {
  componentDidMount() {
    const { startFetchData } = this.props;
    startFetchData();
  }

  render() {
    const { isLoading, data, selectedRoute } = this.props;
    return (
      <Wrapper>
        <SideBar />
        <Container>
          <Title>{selectedRoute}</Title>
          {isLoading || !data ? (
            <p>loading</p>
          ) : (
            <React.Fragment>
              <ItemHeader />
              <Row>
                {data.map(d => (
                  <SItem item={d} />
                ))}
              </Row>
            </React.Fragment>
          )}
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  padding: 48px;
  width: calc(100% - 244px);
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SItem = styled(Item)`
  margin-top: 16px;
  box-shadow: 0 2px 5px 0 rgba(159, 159, 159, 0.5);
`;

const Title = styled.h2`
  color: ${COLOR.warmBlack};
`;

const mapStateToProps = (state: Store): MapStateToProps => ({
  isLoading: state.employee.isLoading,
  isLoaded: state.employee.isLoaded,
  data: state.employee.data,
  error: state.employee.error,
  selectedRoute: state.sideBar.selectedRoute
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  startFetchData: () => dispatch(actions.startFetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
