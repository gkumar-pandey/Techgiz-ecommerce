import axios from "axios";

export const fetchAllProducts = async (setProducts, setIsLoading) => {
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
