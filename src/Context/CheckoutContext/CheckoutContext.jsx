import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { checkoutReducer } from "../../Reducer";
import {
  addAddress,
  getAddress,
  removeAddress,
  updateAddress
} from "../../Services";

import { useCart } from "../CartContext/CartContext";

const CheckoutContext = createContext();
const initialState = {
  addresses: [],
  defaultAddress: {},
  discountCoupon: [],
  orders: []
};
export const CheckoutProvider = ({ children }) => {
  const [checkoutState, dispatchCheckout] = useReducer(
    checkoutReducer,
    initialState
  );
  const {
    cartState: { products }
  } = useCart();

  const [addressFormData, setAddressFormData] = useState({
    name: "",
    phoneNumber: "",
    zipCode: "",
    street: "",
    city: "",
    district: "",
    state: "",
    country: ""
  });

  const isAddressExist = (id) => {
    return checkoutState.addresses?.find((item) => item._id === id);
  };
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const dummyAddress = {
    name: "Gautam Shekhar",
    phoneNumber: "7488760391",
    zipCode: "823032",
    street: "vill+p.o-Nagwan, p.s- Fatehpur ",
    city: "Gaya",
    district: "Gaya",
    state: "Bihar",
    country: "India"
  };

  const handleDummyAddressBtn = () => {
    setAddressFormData(dummyAddress);
  };

  useEffect(() => {
    getAddress(token, dispatchCheckout);
  }, []);

  const handleAddAddress = (address) => {
    addAddress(address, token, dispatchCheckout);
  };

  const handleRemoveAddress = (addressId) => {
    removeAddress(addressId, token, dispatchCheckout);
  };
  const totalPriceOfCartItems = products.reduce(
    (acc, curr) => acc + parseInt(curr.price.replace(",", "") * curr.qty),
    0
  );
  const totalProductQty = products.reduce((acc, curr) => acc + curr.qty, 0);
  const deliveryCharges = totalPriceOfCartItems > 1000 ? "Free" : "₹40";
  const totalAmount =
    totalPriceOfCartItems + (totalPriceOfCartItems < 1000 && 40);

  const discountPrice = checkoutState.discountCoupon?.reduce(
    (acc, curr) =>
      curr === "OFF100"
        ? acc + 100
        : curr === "10%NEWUSER"
        ? acc + Number((totalAmount * 0.1).toFixed(0))
        : acc,
    0
  );

  const handleEditAddress = (addressId) => {
    const address = checkoutState.addresses.find(
      (item) => item._id === addressId
    );

    setAddressFormData(address);
  };

  const handleUpdateAddress = (address) => {
    updateAddress(address, token, dispatchCheckout);
  };

  return (
    <CheckoutContext.Provider
      value={{
        dispatchCheckout,
        checkoutState,
        handleAddAddress,
        totalPriceOfCartItems,
        deliveryCharges,
        totalProductQty,
        discountPrice,
        handleRemoveAddress,
        totalAmount,
        addressFormData,
        setAddressFormData,
        handleEditAddress,
        isAddressExist,
        handleUpdateAddress,
        handleDummyAddressBtn
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
