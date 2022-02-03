import React, { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="login-container">
      <h3 className="login-header">Login Form</h3>
      <div className="form">
        <form>
          <label>
            <p>Username</p>
            <input
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              required
            />
          </label>
          <br />
          <br />
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <div className="login-btn">
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
