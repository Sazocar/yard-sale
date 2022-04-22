import React from "react";
import "@styles/PasswordRecovery.scss";
import { YardSaleLogo } from "@components/YardSaleLogo";

const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <YardSaleLogo />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            className="input input-email"
            placeholder="camilayokoo@gmail.com    "
          />
          <button
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          >
						Submit
					</button>
				<a href="/" target="_blank">Back to log in </a>
        </form>
      </div>
    </div>
  );
};

export { PasswordRecovery };
