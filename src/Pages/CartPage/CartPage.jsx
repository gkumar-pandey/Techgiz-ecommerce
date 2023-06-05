import React, { useEffect, useState } from "react";
import "./CartPage.css";
import PriceDetails from "./Components/PriceDetails";
import { useCart } from "../../Context/CartContext/CartContext";
import { Loader, EmptyMsgComp, HorizontalProductCard } from "../../Components";
import { getCartProducts } from "../../Services";
import Modal from "../../Components/Modal/Modal";
import DiscountComp from "./Components/DiscountComp";
import { totalPriceOfCartProducts } from "../../Utils/cart-details/totalPriceOfCartProducts";

const CartPage = () => {
  const [isApplyDiscount, setIsApplyDiscount] = useState(false);
  const [discountCoupon, setDiscountCoupon] = useState([]);
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
      setDiscountCoupon((pre) => [...pre, e.target.value]);
    } else {
      setDiscountCoupon((pre) => pre.filter((item) => item !== e.target.value));
    }
  };

  const totalPrice = totalPriceOfCartProducts(products);
  const totalProductQty = products.reduce((acc, curr) => acc + curr.qty, 0);
  const deliveryCharges = totalPrice > 1000 ? "Free" : "₹40";
  const totalAmount = totalPrice + (totalPrice < 1000 && 40);
  const discountPrice = discountCoupon.reduce(
    (acc, curr) =>
      curr === "OFF100"
        ? acc + 100
        : curr === "10%NEWUSER"
        ? acc + totalAmount * 0.1
        : acc,
    0
  );

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
                      totalPrice={totalPrice}
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
                    discountCoupon={discountCoupon}
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
