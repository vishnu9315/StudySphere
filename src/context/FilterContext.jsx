import { createContext, useContext, useReducer } from "react"
import { filterReducers } from "../reducers";

const filterInitialState = {
    productList: [], //initial empty
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducers, filterInitialState);


    //fetching the products and add them to productList
    function initialProductLists(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        });
    }

     //getting the values dispatch from the filterbar and then updating the state that is bestSeller in the filterReducer to true so the bestSellerOnly in 
     //filterinitialList will  become true and then the function bestSeller get excuted and filter out the products//
    function bestSeller(products){
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products; //if true return filtered products else products
    }

    function inStock(products){
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }
    
    function sort(products){
        if(state.sortBy === "lowtohigh"){
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function rating(products){
        if(state.ratings === "4STARSABOVE"){
            return products.filter(product => product.rating >= 4);
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter(product => product.rating >= 3);
        }
        if(state.ratings === "2STARSABOVE"){
            return products.filter(product => product.rating >= 2);
        }
        if(state.ratings === "1STARSABOVE"){
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));

    const value = {
        state, 
        dispatch,
        products: filteredProductList,
        initialProductLists
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}