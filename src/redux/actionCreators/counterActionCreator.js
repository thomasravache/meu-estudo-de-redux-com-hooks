import { INCREMENTAR } from "../actionTypes/counterActionTypes";

export const incrementarContador = () => ({
  type: INCREMENTAR,
  payload: 1,
});
