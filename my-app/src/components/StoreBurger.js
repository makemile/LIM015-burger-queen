export const  BurgerReducer = (state = [], action) =>  {
    if (action.type === "ADD_TO_CART"){
        return state.concat(action.payload)
        
    }
    return state
}