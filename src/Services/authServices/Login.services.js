import axios from "axios";

export const loginService = async (user) => {
  return await axios.post("/api/auth/login", user);
};
