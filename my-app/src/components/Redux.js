export const initialState = {count: 0}; 

export const counterReducer = (state, action) => {
  switch(action.type){
      case 'incremented':
          return {count : state.count + 1}  

      case 'decremented':
          return {count : state.count - 1}
          
      default:
          return state
  } 
}