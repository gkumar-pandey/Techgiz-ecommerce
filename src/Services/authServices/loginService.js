import axios from "axios";
import { RESET, SET_LOGIN_ERROR } from "../../Constant";
import { toast } from "react-hot-toast";

export const loginService = async (user, dispatchUser, setUser) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", user);
    if (status === 200) {
      dispatchUser({ type: RESET });

      const userDetails = {
        token: data.encodedToken,
        user: data.foundUser
      };
      localStorage.setItem("user", JSON.stringify(userDetails));
      setUser(userDetails);
      toast.success("Login Successfully");
    } else {
      toast.error("Something went wrong!");
    }
  } catch (error) {
    console.error(error.message);
    dispatchUser({ type: SET_LOGIN_ERROR, payload: error.message });
  }
};
