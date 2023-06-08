import axios from "axios";

export const getAddressService = async () => {
  try {
    const res = await axios.get("/user/api/address");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
