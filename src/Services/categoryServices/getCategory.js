import axios from "axios";

export const getCategory = async (setCategory) => {
  try {
    const { data, status } = await axios.get("/api/categories");
    if (status === 200) {
      setCategory(data.categories);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};
