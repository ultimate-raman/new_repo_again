import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setallEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { email: email, password: password };
    setallEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", color: "orange" }}>Login Form</h2>
      <div className="container1_login">
      <div className=".form_login">
        <form action="" onSubmit={submitForm}>
          <div className="imgcontainer">
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-2-512.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="container_login">
            <div>
              <label style={{ color: "orange" }} htmlFor="email">
                Email
              </label>
              <input
                type="text" placeholder="Enter your email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label style={{ color: "orange" }} htmlFor="password">
                Password
              </label>
              <input
                type="password" placeholder="Enter your password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <button type="submit">Login</button>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default Login;