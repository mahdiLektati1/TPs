import { CONNECTION, DECONNECTION } from "../actions/Types";

export const connection = (token) => ({
  type: CONNECTION,
  token:token
});

export const deconnection = () => ({
  type: DECONNECTION,
});

