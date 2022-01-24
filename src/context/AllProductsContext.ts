import { createContext, SetStateAction, Dispatch } from "react";

import { Product } from "../interfaces/Product";

interface AllProductsState {
  allProducts: Product[];
  setAllProducts: Dispatch<SetStateAction<Product[]>>;
  showAllProducts: Product[];
  setShowAllProducts: Dispatch<SetStateAction<Product[]>>;
}

const AllProductsContext = createContext({} as AllProductsState);

export default AllProductsContext;
