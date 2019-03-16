// @flow

const OPEN_MODAL = "SIDEBAR/OPEN_MODAL";
const CLOSE_MODAL = "SIDEBAR/CLOSE_MODAL";

export const types = {
  OPEN_MODAL,
  CLOSE_MODAL
};

export const actions = {
  openModal: name => ({
    type: types.OPEN_MODAL,
    payload: name
  }),
  closeModal: () => ({
    type: types.CLOSE_MODAL
  })
};

const initialState = {
  selectedModalName: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, selectedModalName: action.payload };
    case types.CLOSE_MODAL:
      return { ...state, selectedModalName: null };
    default:
      return state;
  }
};

export default reducer;
