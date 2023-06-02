import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { getAllProducts } from "../../Services";
import { FilterReducer } from "../../Reducer";

import {
  filterByInStock,
  filterByOutOfStock,
  getFilterDataByCategory,
  getFilterDataByPriceRange,
  getFilterDataByRating,
  getFilterDataBySearch,
  getSortedData
} from "../../Utils";

const ProductsContext = createContext();

const filterInitialState = {
  sortBy: "",
  filterByType: [],
  filterByBrand: [],
  inStock: false,
  outOfStock: false,
  rating: 0,
  searchQuery: "",
  maxRange: 5000
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterState, dispatchFilter] = useReducer(
    FilterReducer,
    filterInitialState
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllProducts(setProducts, setIsLoading);
  }, []);

  const filterProducts = () => {
    let productsAfterFilter = [...products];
    const {
      sortBy,
      filterByType,
      filterByBrand,
      inStock,
      outOfStock,
      rating,
      searchQuery,
      maxRange
    } = filterState;

    if (sortBy) {
      productsAfterFilter = getSortedData(productsAfterFilter, sortBy);
    }

    if (filterByType.length > 0) {
      productsAfterFilter = getFilterDataByCategory(
        productsAfterFilter,
        "type",
        filterByType
      );
    }

    if (filterByBrand.length > 0) {
      productsAfterFilter = getFilterDataByCategory(
        productsAfterFilter,
        "brand",
        filterByBrand
      );
    }

    if (inStock) {
      productsAfterFilter = filterByInStock(productsAfterFilter);
    }

    if (outOfStock) {
      productsAfterFilter = filterByOutOfStock(productsAfterFilter);
    }

    if (searchQuery) {
      productsAfterFilter = getFilterDataBySearch(
        productsAfterFilter,
        searchQuery
      );
    }

    if (maxRange) {
      productsAfterFilter = getFilterDataByPriceRange(
        productsAfterFilter,
        maxRange
      );
    }
    if (rating) {
      productsAfterFilter = getFilterDataByRating(productsAfterFilter, rating);
    }
    return productsAfterFilter;
  };

  const productsList = filterProducts();

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        dispatchFilter,
        filterState,
        isLoading,
        setIsLoading,
        products
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
