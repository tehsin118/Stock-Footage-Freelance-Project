import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="follow">
              <div className="logo">
                <Link to="/">
                  <img src="\Images\Header\Group 1.png" alt="" />
                </Link>
              </div>

              <div className="followUs mt-5">
                <h6>Follow us on:</h6>
              </div>

              <div className="social-media-links mt-5 mb-4 d-flex">
                <a href="">
                  {" "}
                  <img src="\Images\Socialicons\1.svg" alt="" srcset="" />{" "}
                </a>

                <a href="">
                  <img src="\Images\Socialicons\2.svg" alt="" srcset="" />
                </a>
                <a href="">
                  <img src="\Images\Socialicons\3.svg" alt="" srcset="" />
                </a>
                <a href="">
                  <img src="\Images\Socialicons\4.svg" alt="" srcset="" />
                </a>
                <a href="">
                  {" "}
                  <img src="\Images\Socialicons\5.svg" alt="" srcset="" />
                </a>
                <a href="">
                  <img src="\Images\Socialicons\6.svg" alt="" srcset="" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-0"></div>

          <div className="col-md-4">
            <div className="contactus">
              <h2>Contact us</h2>
              <p className="mt-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur .
              </p>
              <Link to="/" className="btn-dark w-50 mt-3">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="row">
            <div className="col-md-6">
              <h6>© 2022 , All Rights Reserved</h6>
            </div>
            <div className="col-md-6">
              <div className="right">
                <a href="">License terms</a>
                <a href="">Privacy Policy</a>
                <a href="">Cookie Policy</a>
                <a href="">Return Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
