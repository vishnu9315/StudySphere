import { createContext, useContext, useReducer } from "react"
import { cartReducers } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

//creating the context with initial state 
const cartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducers, cartInitialState);
  
    //u call the addToCart function in your component.
    function addToCart(product){
        //The addToCart function updates the cartList by adding the new produc
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price //updating total when product is add to the cart
        //and triggers a dispatch with the action type "ADD_TO_CART". and go to reducer to update the state
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }
    function removeFromCart(product){
        const updatedList = state.cartList.filter((item) => item.id !== product.id)
        const updatedTotal = state.total - product.price
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:{
                products: updatedList,
                total: updatedTotal
            }
        })
    }
    function clearCart(product){
        dispatch({
            type: "CLEAR_CART",
            payload:{
                products: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }

    // function total(product){
    //     const total = 0;
    //     product.forEach((item) => total += item.price);
    //     dispatch({
    //         type: "UPDATED_PRICE",
    //         payload:{
    //             total: total
    //         }
    //     })
    // }


    return (
        <cartContext.Provider value = {value}>
        {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext);