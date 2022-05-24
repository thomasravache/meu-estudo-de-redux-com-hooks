import { DEPOSITAR, SACAR } from "../actionTypes/accountTypes";

const INITIAL_STATE = {
  saldo: 0
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DEPOSITAR:
      return {
        ...state,
        saldo: state.saldo + action.payload,
      };
    case SACAR:
      return {
        ...state,
        saldo: state.saldo - action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
