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
  if (action.type === "INCREMENT") {
    let updatedCart = state.data.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, data: updatedCart };
  }
  if (action.type === "DECREMENT") {
    let updatedCart = state.data.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity - 1 };
      }
      return curElem;
    });
    return { ...state, data: updatedCart };
  }

  if (action.type === "GET_TOTAL ") {
    let { totalItem } = state.data.reduce(
      (accum, curVal) => {
        let { quantity } = curVal;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
      }
    );
    return { ...state, totalItem };
  }

  return state;
};
