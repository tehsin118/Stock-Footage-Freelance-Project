import React from "react";
import { Link } from "react-router-dom";
import Frame from "../ProductFrame/Frame";

function MoreProducts() {
  return (
    <div>
      <div className="moreProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <Frame
                img="\Images\MainBody\Frame.png"
                nameProduct="Name Product"
                nameBrand="Name Brand"
              />
            </div>

            <div className="col-md-4 col-12">
              <Frame
                img="\Images\MainBody\Frame.png"
                nameProduct="Name Product"
                nameBrand="Name Brand"
              />
            </div>

            <div className="col-md-4 col-12">
              <Frame
                img="\Images\MainBody\Frame.png"
                nameProduct="Name Product"
                nameBrand="Name Brand"
              />
            </div>

            <div className="col-md-4 col-12">
              <Frame
                img="\Images\MainBody\Frame.png"
                nameProduct="Name Product"
                nameBrand="Name Brand"
              />
            </div>

            <div className="col-md-4 col-12">
              <Frame
                img="\Images\MainBody\Frame.png"
                nameProduct="Name Product"
                nameBrand="Name Brand"
              />
            </div>

            <div className="col-md-4 col-12">
              <Frame
                img="\Images\MainBody\Frame.png"
                nameProduct="Name Product"
                nameBrand="Name Brand"
              />
            </div>

            <div className="col-md-4 col-12">
              <Frame
                img="\Images\MainBody\Frame.png"
                nameProduct="Name Product"
                nameBrand="Name Brand"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Link to="/moreProducts" className="btn-dark  ">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreProducts;
