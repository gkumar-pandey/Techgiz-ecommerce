export const getFilterDataByCategory = (data, key, categoryArr) => {
  return data.filter((item) => {
    return categoryArr.find(
      (str) => item[key].toLowerCase() === str.toLowerCase()
    );
  });
};
