export const filterByInStock = (products) => {
  return products.filter((product) => product.inStock);
};

export const filterByOutOfStock = (products) => {
  return products.filter((product) => !product.inStock);
};
