export const getFilterDataByRating = (products, rating) => {
  return products.filter((product) => product.rating < rating);
};
