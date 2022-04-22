import React from "react";
import "@styles/Order.scss";

import flechita from '@icons/flechita.svg';

const Order = () => {
  return (
    <div className="Order">
      <p className="article-info">
        <span>04.25.21</span>
        <span>6 articles</span>
      </p>
      <p className="article-price">$ 560.00</p>
      <img src={flechita} alt="arrow" />
    </div>
  );
};

export { Order };
