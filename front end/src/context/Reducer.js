export const initialState = {
  bag: []
};

export const actionTypes = {
  ADD_TO_BAG: "ADD_TO_BAG",
  REMOVE_ITEM: "REMOVE_ITEM",
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
        const index = state.bag.findIndex( bagItem => bagItem.id == action.id)
        let newBag = [...state.bag]
        if (index >= 0) newBag.splice(index,1)
        else console.log('You cant remove this product')
        return {
          state,
          bag: newBag,
        }
    default: return state;
  }
};

export default reducer;
