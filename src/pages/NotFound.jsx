import React from "react";
import '../styles/NotFound.scss';

const NotFound = () => {

	const notFoundImage = '../../public/404 Error-amico.png';

  return (
    <div className="container">
      <img src={notFoundImage} alt="Not Found Ilustration" />
			<button>Home</button>
      <a href="https://storyset.com/web" target="_blank" >Web illustrations by Storyset</a>
    </div>
  );
};

export { NotFound };
