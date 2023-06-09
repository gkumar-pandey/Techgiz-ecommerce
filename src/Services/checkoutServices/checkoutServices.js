import axios from "axios";
import { SET_ADDRESS, SET_DEFAULT_ADDRESS } from "../../Constant";
import { toast } from "react-hot-toast";

export const getAddress = async (token, dispatchCheckout) => {
  try {
    const { status, data } = await axios.get("/api/user/address", {
      headers: {
        authorization: token
      }
    });

    if (status === 200) {
      dispatchCheckout({ type: SET_ADDRESS, payload: data.address });
      dispatchCheckout({
        type: SET_DEFAULT_ADDRESS,
        payload: data.address[0]
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addAddress = async (address, token, dispatchCheckout) => {
  try {
    const { status, data } = await axios.post(
      "/api/user/address",
      { address },
      {
        headers: {
          authorization: token
        }
      }
    );

    if (status === 201) {
      dispatchCheckout({ type: SET_ADDRESS, payload: data.address });
      toast.success("New Address added successfully");
    } else {
      toast.error("Error! Something went wrong");
    }
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};

// Remove Address
export const removeAddress = async (addressId, token, dispatchCheckout) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/address/${addressId}`,

      {
        headers: {
          authorization: token
        }
      }
    );
    if (status === 200) {
      dispatchCheckout({ type: SET_ADDRESS, payload: data.address });
      toast.success("Address deleted successfully");
    } else {
      toast.error("Error, Something went wrong!");
    }
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};

// Edit address
export const updateAddress = async (address, token, dispatchCheckout) => {
  try {
    const { data, status } = await axios.post(
      `/api/user/address/${address._id}`,
      {
        address
      },
      {
        headers: {
          authorization: token
        }
      }
    );

    if (status === 200) {
      dispatchCheckout({ type: SET_ADDRESS, payload: data.address });
      toast.success("Address updated successfully");
    }
  } catch (error) {
    console.log(error);
    console.error(error.message);
    toast.error(error.message);
  }
};
