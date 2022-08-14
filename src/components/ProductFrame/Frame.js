import React from "react";
import "./Frame.css";
import { Link } from "react-router-dom";

function Frame(props) {
  return (
    <div>
      <div className="frame">
        <div className="video">
          <img src={props.img} className="img-fluid" alt="" />
        </div>
        <div className="products">
          <h3 className="mt-3">
            <a href="">{props.nameProduct}</a>
          </h3>

          <h4 className="mt-3 branding">
            <a href="">{props.nameBrand}</a>
          </h4>
          <Link
            to="/productDetail"
            className="selectProduct btn-dark w-100 mt-3"
          >
            Select Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Frame;
