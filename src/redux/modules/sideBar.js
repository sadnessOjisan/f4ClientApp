// @flow

const SELECT_ITEM = "SIDEBAR/SELECT_ITEM";

export const types = {
  SELECT_ITEM
};

export const actions = {
  selectItem: item => ({
    type: types.SELECT_ITEM,
    payload: item
  })
};

const initialState = {
  selectedRoute: "社員一覧"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_ITEM:
      return { ...state, selectedRoute: action.payload };
    default:
      return state;
  }
};

export default reducer;
