import React, { useEffect, useState } from "react";
import "./CartPage.css";
import PriceDetails from "./Components/PriceDetails";
import { useCart } from "../../Context/CartContext/CartContext";
import { Loader, EmptyMsgComp, HorizontalProductCard } from "../../Components";
import { getCartProducts } from "../../Services";
import Modal from "../../Components/Modal/Modal";
import DiscountComp from "./Components/DiscountComp";
import { useCheckout } from "../../Context";
import { REMOVE_DISCOUNT, SET_DISCOUNT } from "../../Constant";
import useDocumentTitle from "../../hook/useDocumentTitle";

const CartPage = () => {
  const [isApplyDiscount, setIsApplyDiscount] = useState(false);
  useDocumentTitle("Cart");

  const {
    checkoutState,
    dispatchCheckout,
    totalPriceOfCartItems,
    deliveryCharges,
    totalProductQty,
    discountPrice,
    totalAmount
  } = useCheckout();
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

  const handleModal = () => {
    setIsApplyDiscount(!isApplyDiscount);
  };

  const handleDiscountCoupon = (e) => {
    if (e.target.checked) {
      dispatchCheckout({ type: SET_DISCOUNT, payload: e.target.value });
    } else {
      dispatchCheckout({ type: REMOVE_DISCOUNT, payload: e.target.value });
    }
  };

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
                    <PriceDetails
                      totalPrice={totalPriceOfCartItems}
                      totalAmount={totalAmount}
                      totalProductQty={totalProductQty}
                      deliveryCharges={deliveryCharges}
                      discountPrice={discountPrice}
                      handleModal={handleModal}
                    />
                  </div>
                </div>
              </div>
              {isApplyDiscount && (
                <Modal>
                  <DiscountComp
                    handleDiscountCoupon={handleDiscountCoupon}
                    handleModal={handleModal}
                    discountCoupon={checkoutState.discountCoupon}
                  />
                </Modal>
              )}
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
