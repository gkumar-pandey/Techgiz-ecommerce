import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../../Reducer";

import { LOADING, SET_LOGIN_ERROR, SET_SIGNUP_ERROR } from "../../Constant";
import { loginService, signupService } from "../../Services";
import { loginFromValidation, signUpFormValidation } from "../../Utils";

const AuthContext = createContext();

const userInitialState = {
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
  },
  isSaveUser: false,
  isLoading: false,
  signUpError: "",
  loginError: ""
};

export const AuthProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(authReducer, userInitialState);

  const signupHandler = async (e) => {
    e.preventDefault();
    dispatchUser({ type: LOADING, payload: true });

    const isValid = signUpFormValidation(userState, dispatchUser);

    if (isValid) {
      dispatchUser({ type: SET_SIGNUP_ERROR, payload: "" });
      await signupService(userState.user, dispatchUser);
      dispatchUser({ type: LOADING, payload: false });
    } else {
      dispatchUser({ type: LOADING, payload: false });
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatchUser({ type: LOADING, payload: true });

    const isValid = loginFromValidation(userState.loginUser, dispatchUser);

    if (isValid) {
      dispatchUser({ type: SET_LOGIN_ERROR, payload: "" });
      await loginService(userState.loginUser, dispatchUser);
      dispatchUser({ type: LOADING, payload: false });
    } else {
      dispatchUser({ type: LOADING, payload: false });
    }
  };

  return (
    <AuthContext.Provider
      value={{ userState, dispatchUser, signupHandler, loginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
