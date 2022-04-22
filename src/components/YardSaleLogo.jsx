import React from 'react';
import "@styles/YardSaleLogo.scss";

import logo from "@logos/logo_yard_sale.svg";

const YardSaleLogo = () => {
	return <img src={logo} alt="logo" className="YardSaleLogo" />;
};

export { YardSaleLogo };