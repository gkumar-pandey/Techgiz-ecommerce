export const getFilterDataByPriceRange = (data, price) =>
  data.filter((product) => parseInt(product.price.replace(",", "")) < price);
