import React, { useContext, useEffect, useState } from "react";
import { CartContent } from "./Cart";
const ContextCart = () => {
  //   const [data, setData] = useState([]);

  const { data } = useContext(CartContent);
  console.log(data);
  return (
    <div>
      {data.map((item, index) => {
        return <img src={item.url} key={index} alt={item.title} />;
      })}
    </div>
  );
};

export default ContextCart;
