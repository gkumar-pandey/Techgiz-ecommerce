import {
  LOADING,
  RESET,
  SAVE_USER,
  SET_CONFIRM_PASSWORD,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_LOGIN_EMAIL,
  SET_LOGIN_ERROR,
  SET_LOGIN_PASSWORD,
  SET_PASSWORD,
  SET_SIGNUP_ERROR
} from "../../Constant";

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_EMAIL:
      return { ...state, user: { ...state.user, email: payload.trim() } };
    case SET_LOGIN_EMAIL:
      return {
        ...state,
        loginUser: { ...state.loginUser, email: payload.trim() }
      };
    case SET_PASSWORD:
      return { ...state, user: { ...state.user, password: payload.trim() } };
    case SET_LOGIN_PASSWORD:
      return {
        ...state,
        loginUser: { ...state.loginUser, password: payload.trim() }
      };
    case SET_CONFIRM_PASSWORD:
      return {
        ...state,
        user: { ...state.user, confirmPassword: payload.trim() }
      };
    case SAVE_USER:
      return { ...state, isSaveUser: payload };
    case SET_FIRST_NAME:
      return { ...state, user: { ...state.user, firstName: payload.trim() } };
    case SET_LAST_NAME:
      return { ...state, user: { ...state.user, lastName: payload.trim() } };
    case SET_SIGNUP_ERROR:
      return { ...state, signUpError: payload.trim() };
    case SET_LOGIN_ERROR:
      return { ...state, loginError: payload.trim() };
    case LOADING:
      return { ...state, isLoading: payload };
    case RESET:
      return {
        ...state,
        user: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        },
        loginUser: {
          email: "",
          password: ""
        }
      };
    default:
      return { ...state };
  }
};
