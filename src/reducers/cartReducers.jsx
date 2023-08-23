
export const cartReducers = (state, action) => {
    const {type, payload} = action;

    switch(type){

        //The reducer (cartReducers) listens for the "ADD_TO_CART" action type and updates the state by replacing the cartList with the new list of products.
        case 'ADD_TO_CART':
            return {...state, cartList: payload.products, total: payload.total}
        case 'REMOVE_FROM_CART':
            return {...state, cartList: payload.products, total: payload.total}
        case 'CLEAR_CART':
            return {...state, cartList: payload.products, total: payload.total}
        default:
            throw new Error("No Case Found!") 
    }
}