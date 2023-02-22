export const initialState = {
  bag: [], // [{shoes},{shirt},{tv}]
  token: ''
};

export const actionTypes = {
  ADD_TO_BAG: "ADD_TO_BAG",
  REMOVE_ITEM: "REMOVE_ITEM",
  ADD_TOKEN: "ADD_TOKEN",
};

const reducer = (state, action) => {
  //console.log(action);
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
      return {
        ...state,
        token: action.token
      }
    default: return state;
  }
};

export default reducer;
