import React from "react";
import "../Styles/home.css";

const home = () => {
  const logoutHandle = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  const deletehandle = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    alert("User Deleted Successfully!!");
    window.location.href = "/";
  };
  return (
    <div className="navbar-div">
      <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            MAGNUS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employee
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Create
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Search
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Multiple Tabs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Autocomplete
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Collapsible Content
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Images
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Slider
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Popups
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Links
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      CSS Properties
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      iFrames
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Settings
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <div className="navbar-div-btn">             
                  <button class="btn btn-primary" type="button"  onClick={deletehandle}>
                  <i class="fa-solid fa-trash"></i>
                  </button>            
                  <button class="btn btn-primary" type="button" onClick={logoutHandle}>
                  <i class="fa-solid fa-right-from-bracket"></i>
                  </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <h1>Welcome to JALA Acedemy</h1>
      </div>
      <div className="home-info">
        <h3>
          Do you want to learn Selenium Automation
          <br /> completely with practical Scenarios in 7days ?
        </h3>
        <div>
          <p>
            you can learn Everything by doing projects if you are very serious
            to get a software job in 60 days contact us-
          </p>
        </div>
        <div>
          {" "}
          <h4>For working people can double the salary in 60 days</h4>
        </div>
      </div>
      <section className="footer">
        <p>Copywrite &copy; by JALA Technologies. All rights reserved.</p>
      </section>
    </div>
  );
};

export default home;
