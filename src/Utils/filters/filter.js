export const sortByPrice = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH") {
    return products.sort(
      (a, b) =>
        parseInt(a.price.replace(",", "")) - parseInt(b.price.replace(",", ""))
    );
  } else if (sortBy === "HIGH_TO_LOW") {
    return products.sort(
      (a, b) =>
        parseInt(b.price.replace(",", "")) - parseInt(a.price.replace(",", ""))
    );
  } else if (sortBy === "LATEST") {
    return products.sort((a, b) => a.addedInYear - b.addedInYear);
  }
};
