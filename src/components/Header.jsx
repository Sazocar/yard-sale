import React from "react";
import '../styles/Header.scss';

const Header = () => {
  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="" className="menu" />

      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Fornitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li>camilayooko@gmail.com</li>{" "}
          <img src="./icons/flechita.svg" alt="" className="flechita" />
          <li>
            <img
              src="./icons/icon_shopping_cart_notification.svg"
              alt=""
              className="navbar-shopping-cart"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
