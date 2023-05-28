import axios from "axios";
import { RESET, SET_LOGIN_ERROR } from "../../Constant";
import { toast } from "react-hot-toast";

export const loginService = async (user, dispatchUser) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", user);
    if (status === 200) {
      dispatchUser({ type: RESET });
      const userDetails = {
        token: data.encodedToken,
        firstName: data.foundUser.firstName,
        email: data.foundUser.email
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      toast.success("Login Successfully");
    } else {
      toast.error("Something went wrong!");
    }
  } catch (error) {
    const errMsg = error.response.data.errors[0];
    dispatchUser({ type: SET_LOGIN_ERROR, payload: errMsg });
  }
};
