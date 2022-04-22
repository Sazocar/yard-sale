import React from "react";
import '@styles/NotFound.scss';

import notFoundImage from '@logos/404-Error-amico.png';

const NotFound = () => {

  return (
    <div className="NotFound-container">
      <img
        src={notFoundImage}
        alt="Not Found Ilustration"
        className="NotFoundImage"
      />
      <button>Home</button>
      <a href="https://storyset.com/web" target="_blank">
        Web illustrations by Storyset
      </a>
    </div>
  );
};

export { NotFound };
