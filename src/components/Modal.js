import React from "react";
import "./Modal.css";
function Modal() {
  return (
    <div>
      {/* <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        BUY PRODUCT
      </button>
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
              <div className="text-center">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Login
                </h5>
              </div>
              <button
                type="button"
                // class="btn-close "
                data-bs-dismiss="modal"
                // aria-label="Close"
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
                    type="password"
                    placeholder="enter your password"
                    class="input"
                    id="mypass"
                  />
                  <a href="#" class="btn view-password" onclick="myFunction()">
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
            <div class="modal-footer">
              <a href="" className="btn-dark w-100">
                "LOGIN
              </a>
            </div>
            {/* ---------------------- Modal Footer  End------------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
