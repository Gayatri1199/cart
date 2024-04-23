import React, { createContext, useEffect, useReducer, useState } from "react";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import { products } from "./products";

export const CartContent = createContext();

const Cart = () => {
  // const [data, setData] = useState([products]);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((jsonData) => {
  //       return jsonData;
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };

  // const CartData = data;
  // console.log("CartData ==> ", CartData);

  const initialState = {
    data: products,
    totalAmount: 0,
    totalItem: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDeleteItem = (id) => {
    // alert(id);
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const ClearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  console.log(state);

  return (
    <div>
      Cart
      <CartContent.Provider value={{ ...state, handleDeleteItem, ClearCart }}>
        <ContextCart />
      </CartContent.Provider>
    </div>
  );
};

export default Cart;
