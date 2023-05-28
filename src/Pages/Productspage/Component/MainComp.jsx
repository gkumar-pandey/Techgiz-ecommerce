import React, { useState } from "react";
import { useProducts } from "../../../Context";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Pagination } from "../../../Components/index";

const MainComp = () => {
  const [currPage, setCurrPage] = useState(1);
  const { productsList } = useProducts();

  //! Pagination logic implemented
  const pages = [];
  for (let i = 1; i <= Math.ceil(productsList.length / 9); i++) {
    pages.push(i);
  }
  let lastIndex = currPage * 9;
  let firstIndex = lastIndex - 9;
  const Products = productsList.slice(firstIndex, lastIndex);
  const pageHandler = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber < pages.length + 1 &&
      pageNumber !== currPage
    ) {
      setCurrPage(pageNumber);
    }
  };

  return (
    <>
      <div className="products_container">
        {Products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <div className="d-flex justify-center">
        <Pagination
          currPage={currPage}
          pageHandler={pageHandler}
          pages={pages}
        />
      </div>
    </>
  );
};

export default MainComp;
