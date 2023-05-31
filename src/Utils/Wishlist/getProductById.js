export const getProductById = (data, id) => {
  return data.find((product) => product._id === id);
};
