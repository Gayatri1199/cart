import React, { useContext, useEffect, useState } from "react";
import { CartContent } from "./Cart";
import styled from "styled-components";
const CartStyle = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const ContextCart = () => {
  //   const [data, setData] = useState([]);

  const { data, handleDeleteItem, ClearCart } = useContext(CartContent);
  // console.log(data);
  return (
    <CartStyle>
      <p
        onClick={() => {
          ClearCart();
        }}
      >
        Clear Cart
      </p>
      <span>
        {data.length}
        {data.length === 1 ? "Product" : "Products"} are there{" "}
      </span>
      {data.map((item, index) => {
        return (
          <>
            <img
              src={item.url}
              key={index}
              alt={item.title}
              onClick={() => {
                handleDeleteItem(item.id);
              }}
            />
            <span
            // onClick={() => {
            //   handleDeleteItem(item.id);
            // }}
            >
              Delete
            </span>
          </>
        );
      })}
    </CartStyle>
  );
};

export default ContextCart;
