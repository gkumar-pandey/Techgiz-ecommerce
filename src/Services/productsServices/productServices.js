import axios from "axios";
import toast from "react-hot-toast";

export const getAllProducts = async (setProducts, setIsLoading) => {
  setIsLoading(true);
  try {
    const { data, status } = await axios.get("/api/products");
    if (status === 200) {
      setProducts(data.products);
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

export const getSingleProduct = async (productId, setProduct, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await axios.get(`/api/products/${productId}`);
    if (res.status === 200) {
      setProduct(res.data.product);
      setIsLoading(false);
    } else {
      toast.error("Something went wrong!!");
      setIsLoading(false);
    }
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};
