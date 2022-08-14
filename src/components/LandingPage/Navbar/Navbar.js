import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  const [show, setShow] = useState("password");
  const passwordShow = () => {
    if (show === "password") {
      setShow("text");
    } else {
      setShow("password");
    }
  };
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-md">
        <div class="container tops">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="\Images\Header\Group 1.png" alt="" />
            </Link>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class=" rightbar collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div className="search mt-md-0  ">
              <a href="#" class="btn">
                <i class="fas fa-search "></i>
              </a>
              <input
                type="text"
                name="search"
                placeholder="Collection, item or user"
                class="input"
              />
            </div>

            <div className="usericon mt-md-0 ">
              <a href="">
                {" "}
                <img src="\Images\Header\usericon.png" alt="" />
              </a>
              <a
                href=""
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* ---------------------- Modal Login------------------------ */}

      <div
        class="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content ">
            {/* ---------------------- Modal Header------------------------ */}

            <div class="modal-header ">
              <h5 class="modal-title" id="staticBackdropLabel">
                Login
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* ---------------------- Modal Body------------------------ */}

            <div class="modal-body">
              <div className="user-login">
                <label for="fname" className="label">
                  Username
                </label>

                <div className="input-icons search mt-md-0  ">
                  <a href="#" class="btn">
                    <img src="\Images\Modals\user-icon.svg" alt="" />
                  </a>
                  <input type="text" placeholder="Username" class="input" />
                </div>
              </div>

              <div className="user-password mt-4">
                <label for="fname" className="label">
                  Password
                </label>

                <div className="input-icons search mt-md-0  ">
                  <a href="#" class="btn">
                    <img src="\Images\Modals\password.svg" alt="" />
                  </a>
                  <input
                    type={show}
                    placeholder="enter your password"
                    class="input"
                    id="mypass"
                  />
                  <a href="#" class="btn view-password" onClick={passwordShow}>
                    <img
                      src="\Images\Modals\eye.svg"
                      alt=""
                      className="btn view-password"
                    />
                  </a>
                </div>
              </div>

              <div className="keep-login mt-4">
                <input type="checkbox" id="keeplogin" name="keeplogin" />
                <label for="keeplogin">Keep me logged in</label>
              </div>
            </div>

            {/* ---------------------- Modal Footer------------------------ */}
            <div class="modal-footer mb-4">
              <a href="/" className="btn-dark w-100">
                LOGIN
              </a>
            </div>
            {/* ---------------------- Modal Footer  End------------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
