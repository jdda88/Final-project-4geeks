export const initialState = {
  bag: [], // [{shoes},{shirt},{tv}]
  isLogged: !!sessionStorage.getItem('token'),
};

export const actionTypes = {
  ADD_TO_BAG: "ADD_TO_BAG",
  REMOVE_ITEM: "REMOVE_ITEM",
  ADD_TOKEN: "ADD_TOKEN",
  LOG_OUT: "LOG_OUT",
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_BAG":
      return {
        ...state,
        bag: [...state.bag, action.product],
      };

    case "REMOVE_ITEM":
        //console.log(state.bag, 'state')
        const index = state.bag.findIndex( (bagItem) => bagItem.id === action.id)
        let newBag = [...state.bag]
        if (index >= 0) newBag.splice(index,1) 
        else console.log('You cant remove this product')
        return {
          state,
          bag: newBag,
        }

    case "ADD_TOKEN":
      console.log('add token')
      return {
        ...state,
        isLogged: true
      }
    case "LOG_OUT":
      console.log('log out')
      return {
        ...state,
        isLogged: false
      }
    default: return state;
  }
};

export default reducer;
