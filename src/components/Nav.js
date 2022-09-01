import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
  const { keycloak } = useKeycloak();
  console.log(!!keycloak.authenticated, "yretyireuytiuerytuy");

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              {!keycloak.authenticated && (
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => keycloak.login()}
                >
                  Login
                </button>
              )}

              {!!keycloak.authenticated && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => keycloak.logout()}
                >
                  Logout ({keycloak.tokenParsed.preferred_username})
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
