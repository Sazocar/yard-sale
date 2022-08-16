import React, { useContext, useState } from "react";
import {OrderItem} from "@components/OrderItem";
import {AppContext} from "../context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);

 const getTotal = () => {
   const initialValue = 0;
   const sumTotal = state.cart.reduce(
     (previousValue,
     currentValue) => previousValue + currentValue.price, initialValue
   );
   return sumTotal
 }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {getTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export {MyOrder};
