import React from "react";
import GridContainer from "../../../Components/GridContainer/GridContainer";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const SimilarProductsComp = ({ type, brand }) => {
  const { products } = useProducts();

  const similarProducts = () => {
    let prod = [...products];

    return prod.filter((prod) => prod.type === type);
  };
  return (
    <div>
      <h2 className="brand_heading d-flex justify-center items-center my-1 ">
        Similar Products
      </h2>

      <GridContainer>
        {similarProducts().map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </GridContainer>
    </div>
  );
};

export default SimilarProductsComp;
