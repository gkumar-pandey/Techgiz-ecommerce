import React, { useState } from "react";
import { useProducts } from "../../../Context";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Pagination } from "../../../Components/index";

const MainComp = () => {
  const [currPage, setCurrPage] = useState(1);
  const { products } = useProducts();

  //! Pagination logic implemented
  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / 9); i++) {
    pages.push(i);
  }
  let lastIndex = currPage * 9;
  let firstIndex = lastIndex - 9;
  const Products = products.slice(firstIndex, lastIndex);

  return (
    <>
      <div className="products_container">
        {Products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
      <div className="d-flex justify-center">
        <Pagination
          currPage={currPage}
          setCurrPage={setCurrPage}
          pages={pages}
        />
      </div>
    </>
  );
};

export default MainComp;
