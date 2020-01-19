import { CREATE_MESSAGES } from "../actions/types";

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGES,
    payload: msg
  };
}
