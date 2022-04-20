import React from "react";
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        class="product-image"
      />
      <div class="product-info">
        <p>$ 30.00</p>
        <p>Shoes</p>
        <p>
          Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was
          the first ever basketball shoe to feature Nike Air technology,
          revolutionizing the game and sneaker culture forever.
        </p>

        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="" class="cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export { ProductInfo };
