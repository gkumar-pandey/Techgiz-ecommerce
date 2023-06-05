export const totalPriceOfCartProducts = (products) => {
  return products.reduce(
    (acc, curr) => acc + curr.qty * parseInt(curr.price.replace(",", "")),
    0
  );
};
