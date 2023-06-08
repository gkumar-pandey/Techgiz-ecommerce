import {
  RESET_FILTER,
  SET_FILTER_BY_BRAND,
  SET_FILTER_BY_IN_STOCK,
  SET_FILTER_BY_OUT_OF_STOCK,
  SET_FILTER_BY_SEARCH,
  SET_FILTER_BY_TYPE,
  SET_MAX_PRICE,
  SET_RATING,
  SET_SORT_BY
} from "../../Constant/FilterConstant/FilterConstant";

export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SORT_BY:
      return { ...state, sortBy: payload };
    case SET_FILTER_BY_TYPE:
      return payload.isChecked
        ? {
            ...state,
            filterByType: [...state.filterByType, payload.value]
          }
        : {
            ...state,
            filterByType: state.filterByType.filter(
              (item) => item !== payload.value
            )
          };

    case SET_FILTER_BY_BRAND:
      return payload.isChecked
        ? { ...state, filterByBrand: [...state.filterByBrand, payload.value] }
        : {
            ...state,
            filterByBrand: state.filterByBrand.filter(
              (brand) => brand !== payload.value
            )
          };
    case SET_FILTER_BY_IN_STOCK:
      return { ...state, inStock: payload };
    case SET_FILTER_BY_OUT_OF_STOCK:
      return { ...state, outOfStock: payload };
    case SET_FILTER_BY_SEARCH:
      return { ...state, searchQuery: payload };
    case SET_MAX_PRICE:
      return { ...state, maxRange: parseInt(payload) };
    case SET_RATING:
      return { ...state, rating: payload };
    case RESET_FILTER:
      return {
        sortBy: "",
        filterByType: [],
        filterByBrand: [],
        filterByInStock: false,
        filterByOutOfStock: false,
        rating: 0,
        searchQuery: "",
        maxRange: 20000
      };
    default:
      return { ...state };
  }
};
