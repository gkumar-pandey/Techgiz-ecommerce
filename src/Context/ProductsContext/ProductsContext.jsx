import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { fetchAllProducts } from "../../Services";
import { FilterReducer } from "../../Reducer";
import { sortByPrice } from "../../Utils/filters/filter";

const ProductsContext = createContext();

const filterInitialState = {
  sortBy: ""
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterState, dispatchFilter] = useReducer(
    FilterReducer,
    filterInitialState
  );

  useEffect(() => {
    fetchAllProducts(setProducts);
  }, []);

  console.log(filterState);

  const filterProducts = () => {
    let productsAfterFilter = [...products];

    if (filterState.sortBy) {
      productsAfterFilter = sortByPrice(
        productsAfterFilter,
        filterState.sortBy
      );
    }

    return productsAfterFilter;
  };

  const productsList = filterProducts();

  return (
    <ProductsContext.Provider value={{ productsList, dispatchFilter }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
