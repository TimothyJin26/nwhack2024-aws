import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginGraphic from "../assets/login.svg";
import logo from "../assets/logo.svg";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClicked = () => {
    tryLogin();
  };

  const tryLogin = () => {
   navigate("/quiz");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <img alt="login" className="login" src={loginGraphic} />
      <h1 className="loginText">
        Long Thyme <br></br>No See
      </h1>
      <div style={{ width: "45vw", backgroundColor: "#0A3C57" }}></div>
      <div
        style={{
          display: "flex",
          width: "50vw",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <img alt="logo" src={logo} />
            <span
              style={{
                fontSize: "20px",
                paddingLeft: "40px",
                fontWeight: "bold",
              }}
            >
              BestBuds
            </span>
          </div>
          <div
            className="loginField"
            style={{
              paddingTop: "20vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Welcome Back</h2>
            <form onSubmit={handleSubmit}>
              <input
                style={{ width: "100%", marginBottom: "20px" }}
                type="text"
                placeholder="Username"
                value={login}
                onChange={handleLoginChange}
              />
              <br />
              <input
                style={{ width: "100%", marginBottom: "20px" }}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <button
                onClick={handleClicked}
                style={{ width: "100%" }}
                className="submit"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
