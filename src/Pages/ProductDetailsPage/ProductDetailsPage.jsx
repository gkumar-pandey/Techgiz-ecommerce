import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { getSingleProduct } from "../../Services";
import { Loader, ProductDetails } from "../../Components";
import SimilarProdComp from "./Components/SimilarProdComp";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  window.scrollTo(0, 0);

  useEffect(() => {
    getSingleProduct(id, setProduct, setIsLoading);
  }, [id]);

  return (
    <div className="d-flex justify-center items-center   product_details ">
      <div className="product_container">
        {!isLoading ? <ProductDetails product={product} /> : <Loader />}
        <SimilarProdComp type={product?.type} brand={product?.brand} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
