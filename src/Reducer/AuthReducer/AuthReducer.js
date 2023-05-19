import {
  SAVE_USER,
  SET_CONFIRM_PASSWORD,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD
} from "../../Constant";

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_EMAIL:
      return { ...state, user: { ...state.user, email: payload } };
    case SET_PASSWORD:
      return { ...state, user: { ...state.user, password: payload } };
    case SET_CONFIRM_PASSWORD:
      return { ...state, user: { ...state.user, confirmPassword: payload } };
    case SAVE_USER:
      return { ...state, isSaveUser: payload };
    case SET_FIRST_NAME:
      return { ...state, user: { ...state.user, firstName: payload } };
    case SET_LAST_NAME:
      return { ...state, user: { ...state.user, lastName: payload } };
    default:
      return { ...state };
  }
};
