
//task of the reducer is to return the updated state

export const filterReducers = (state, action) => {
    const {type, payload} = action;

    switch(type){

        case 'PRODUCT_LIST':
            return { ...state, productList: payload.products };
        
        case 'SORT_BY':
            return

        case 'RATINGS':
            return

        case 'BEST_SELLER_ONLY':
            return { ...state, bestSellerOnly: payload.bestSellerOnly };

        case 'ONLY_IN_STOCK':
            return
    
        case 'CLEAR-FILTER':
            return

        default:
            throw new Error("No case found")    
    }
}