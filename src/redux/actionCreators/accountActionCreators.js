import { DEPOSITAR, SACAR } from "../actionTypes/accountActionTypes";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const depositarDinheiro = (valor) => ({
  type: DEPOSITAR,
  payload: valor,
});

export const sacarDinheiro = (valor) => ({
  type: SACAR,
  payload: valor,
});

export const testeAsync = () => {
  return async (dispatch) => {
    await sleep(3000);
    dispatch({
      type: DEPOSITAR,
      payload: 1,
    });
  }
};
