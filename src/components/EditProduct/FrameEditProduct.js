import React from "react";
import AsideBar from "../LandingPage/AsideBar/AsideBar";
import EditProduct from "./EditProduct";
import "./FrameEditProduct.css";

function FrameEditProduct() {
  return (
    <div className="frameEditProduct container-fluid">
      <div className="row">
        <div className="col-md-3 aside">
          <AsideBar />
        </div>
        <div className="col-md-9 product-response">
          <EditProduct />
        </div>
      </div>
    </div>
  );
}

export default FrameEditProduct;
