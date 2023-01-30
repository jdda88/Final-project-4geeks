export const initialState = {
  bag: []
};

export const actionTypes = {
  ADD_TO_BAG: "ADD_TO_BAG"
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BAG":
      return {
        ...state,
        bag: [...state.bag, action.product],
      };
    default: return state;
  }
};

export default reducer;
