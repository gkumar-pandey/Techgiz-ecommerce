import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { authReducer } from "../../Reducer";

import { LOADING, SET_LOGIN_ERROR, SET_SIGNUP_ERROR } from "../../Constant";
import { loginService, signupService } from "../../Services";
import { loginFromValidation, signUpFormValidation } from "../../Utils";
import { useLocation, useNavigate } from "react-router-dom";

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
  const [user, setUser] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userDetails = JSON.parse(localStorage.getItem("user"));
      setUser(userDetails);
    }
  }, []);

  const signupHandler = async (e) => {
    e.preventDefault();
    dispatchUser({ type: LOADING, payload: true });

    const isValid = signUpFormValidation(userState, dispatchUser);

    if (isValid) {
      dispatchUser({ type: SET_SIGNUP_ERROR, payload: "" });
      await signupService(userState.user, dispatchUser);
      dispatchUser({ type: LOADING, payload: false });
      navigate(location?.state?.from?.pathname);
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
      navigate(location?.state?.from?.pathname);
    } else {
      dispatchUser({ type: LOADING, payload: false });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userState,
        dispatchUser,
        signupHandler,
        loginHandler,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
