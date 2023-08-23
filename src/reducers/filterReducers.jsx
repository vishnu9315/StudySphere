
//task of the reducer is to return the updated state

export const filterReducers = (state, action) => {
    const {type, payload} = action;

    switch(type){

        case 'PRODUCT_LIST':
            return { ...state, productList: payload.products };
        
        case 'SORT_BY':
            return {...state, sortBy: payload.sortBy}

        case 'RATINGS':
            return {...state, ratings: payload.ratings}

        //getting the values dispatch from the filterbar and then updating the state that is bestSeller to true and then the function bestSeller get excuted and filter out the products
        case 'BEST_SELLER_ONLY':
            return { ...state, bestSellerOnly: payload.bestSellerOnly }; //accessing payload from within the filterbar

        case 'ONLY_IN_STOCK':
            return {...state, onlyInStock: payload.onlyInStock}
    
        case 'CLEAR-FILTER':
            return {
                ...state, 
                onlyInStock: false,
                bestSellerOnly: false,
                sortBy: null,
                ratings: null
            }

        default:
            throw new Error("No case found")    
    }
}