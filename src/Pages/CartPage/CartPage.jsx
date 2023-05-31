import React, { useEffect } from "react";
import "./CartPage.css";
import PriceDetails from "./Components/PriceDetails";
import { useCart } from "../../Context/CartContext/CartContext";
import { Loader, EmptyMsgComp, HorizontalProductCard } from "../../Components";
import { getCartProducts } from "../../Services";

const CartPage = () => {
  const {
    dispatchCart,
    cartState: { products, isLoading },
    isUserLoggedIn
  } = useCart();
  useEffect(() => {
    if (isUserLoggedIn) {
      getCartProducts(dispatchCart);
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {products.length > 0 ? (
            <>
              <div className=" cart_container">
                <div className="cart_heading">
                  <h2>Shopping Cart ({products.length}) </h2>
                </div>
                <div className="cart w-full ">
                  <div className="cart_products mx-1 ">
                    {products.map((product, idx) => (
                      <HorizontalProductCard {...product} key={product._id} />
                    ))}
                  </div>
                  <div className=" cart_details  ">
                    <PriceDetails />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <EmptyMsgComp msg={"Your cart is empty."} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default CartPage;
