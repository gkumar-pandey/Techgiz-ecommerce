import axios from "axios";

export const fetchAllProducts = async (setProducts) => {
  try {
    const { data, status } = await axios.get("/api/products");
    if (status === 200) {
      setProducts(data.products);
    }
  } catch (error) {
    console.log(error);
  }
};
