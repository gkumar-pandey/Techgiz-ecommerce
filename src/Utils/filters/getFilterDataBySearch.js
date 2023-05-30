export const getFilterDataBySearch = (products, searchQuery) => {
  return products.filter((product) =>
    product.productName
      .toLowerCase()
      .includes(
        searchQuery.toLowerCase() ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );
};
