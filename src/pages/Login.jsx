import React, { useRef } from "react";
import { YardSaleLogo } from "../components/YardSaleLogo";
import "@styles/Login.scss";

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
		event.preventDefault();
	};

  return (
    <div className="Login">
      <div className="Login-container">
        <YardSaleLogo />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Login
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export { Login };
