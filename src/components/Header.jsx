import React, { useState } from "react";
import { Menu } from "./Menu";
import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import flechita from '@icons/flechita.svg';
import shoppingCart from '@icons/icon_shopping_cart_notification.svg';

const Header = () => {
	const [ toggle, setToggle ] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
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
        <ul>
          <li className="navbar-right-email" onClick={handleToggle}>camilayooko@gmail.com</li>
          <img src={flechita} alt="" className="flechita" />
          <li>
            <img src={shoppingCart} className="navbar-shopping-cart" />
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
    </nav>
  );
};

export { Header };
