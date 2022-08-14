import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div className="container-fluid Hero">
      <div className="container">
        <h1 className="mt-5 text-center">Get Unlimited Stock Footage</h1>

        <div className="search-hero  mt-5">
          <input
            type="text"
            name="search"
            placeholder="Collection, item or user"
            class="input"
          />
          <a href="#" class="btn">
            <i class="fas fa-search"></i>
          </a>
        </div>
        <p className="mt-5 text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
        </p>

        <div className="top-btn d-flex mt-5">
          <Link to="/viewProduct" className="btn-dark">
            Button
          </Link>
          <a href="" className="btn-light">
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
