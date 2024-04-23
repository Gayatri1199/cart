export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      data: state.data.filter((elem) => {
        return elem.id !== action.payload;
      }),
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      data: [],
    };
  }
  return state;
};
