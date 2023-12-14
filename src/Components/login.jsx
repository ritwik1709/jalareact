import React, { useState } from "react";
import "../Styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");

    if(email && password){
      if (storedUser) {
        const user = JSON.parse(storedUser);
  
        // Check if the entered credentials match the stored credentials
        if (email === user.email && password === user.password) {
          // Authentication successful
          window.location.href = "/home";
        } else {
          alert("Invalid credentials/ Unregistered User");
        }
      }
    } 
    else{
      alert("Incomplete Credentials !");
    }
  };
  return (
    <div>
      <h1>JALA ACEDEMY</h1>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="email"
                  className="login__input"
                  required="true"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  required="true"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>
              <div className="btn-div">
                <button className="button login__submit" onClick={loginHandler}>
                  <span className="button__text">LogIn</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                <button className="button login__submit">
                  <span className="button__text">
                    <Link to={"/register"}>Register</Link>
                  </span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
