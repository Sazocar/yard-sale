import React, { useState, useContext } from "react";
import { Menu } from "./Menu";
import { AppContext } from "../context/AppContext";
import { MyOrder } from '../containers/MyOrder';
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import flechita from '@icons/flechita.svg';
import shoppingCart from '@icons/icon_shopping_cart_notification.svg';

const Header = () => {
	const [ toggleMenu, setToggleMenu ] = useState(false);
  const [ toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu);
	};

  return (
    <nav>
      <img src={menu} alt="" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="" className="nav-logo" />

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
        <ul onClick={handleToggleMenu}>
          <li className="navbar-right-email" onClick={handleToggleMenu}>
            camilayooko@gmail.com
          </li>
          <img
            src={flechita}
            alt=""
            className="flechita"
            onClick={handleToggleMenu}
          />
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} className="navbar-shopping-cart-img" />
            {state.cart.length > 0 ? (
              <p className="cartItems">{state.cart.length}</p>
            ) : null}
          </li>
        </ul>
      </div>
      {toggleMenu ? <Menu /> : null}
      {toggleOrders ? <MyOrder /> : null}
    </nav>
  );
};

export { Header };
