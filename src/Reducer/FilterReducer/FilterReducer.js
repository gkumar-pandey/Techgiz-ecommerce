import { SET_SORT_BY } from "../../Constant/FilterConstant/FilterConstant";

export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SORT_BY:
      return { ...state, sortBy: payload };

    default:
      break;
  }
};
