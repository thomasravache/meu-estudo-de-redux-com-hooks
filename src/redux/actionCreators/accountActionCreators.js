import { DEPOSITAR, SACAR } from "../actionTypes/accountActionTypes";

export const depositarDinheiro = (valor) => ({
  type: DEPOSITAR,
  payload: valor,
});

export const sacarDinheiro = (valor) => ({
  type: SACAR,
  payload: valor,
});
