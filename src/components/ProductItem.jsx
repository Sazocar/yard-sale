import React, { useState, useContext } from "react";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import { AppContext } from "../context/AppContext";
import "@styles/ProductItem.scss";

const ProductItem = ({product}) => {
  const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};

  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        className="Item-image"
        alt={product.title}
      />
      <div className="ProductItem-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="" className="addToCart-image" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
