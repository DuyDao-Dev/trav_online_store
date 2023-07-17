const cartListReducer = (state = [], action) => {
    if (action.type === 'ADD_TO_CART') {
        console.log('cartListReducer', state);
         return [...state, action.payload];
    }
    if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
};

export default cartListReducer;
