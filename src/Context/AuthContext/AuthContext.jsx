import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../../Reducer";

const AuthContext = createContext();

const userInitialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  },
  isSaveUser: false,
  isLoading: false
};

export const AuthProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(authReducer, userInitialState);

  return (
    <AuthContext.Provider value={{ userState, dispatchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
