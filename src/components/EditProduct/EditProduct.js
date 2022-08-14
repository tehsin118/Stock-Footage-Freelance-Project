import React from "react";
import "./EditProduct.css";
function EditProduct() {
  return (
    <div>
      <div className="editProduct  mt-5 ">
        <div className="row ">
          <div className="col-md-4 col-12">
            <img
              src="\Images\MainBody\Frame.png"
              alt=""
              className="img-fluid"
            />
          </div>

          <div className="col-md-8 col-12 ">
            <div className="row">
              <div className="col-md-8 pricing">
                <h6 className="">Name Product</h6>
                <h6 className="mt-3">Name Brand</h6>
                <h6 className="mt-3">Price: 40$</h6>
              </div>
              <div className="col-md-4 btns">
                <a href="" className="btn-dark">
                  EDIT PRODUCT
                </a>
                <a href="" className="btn-dark">
                  VIEW PRODUCT
                </a>
              </div>

              <div className="col-md-12 mt-4 sub-cats">
                <h6 className="">Sub Categorys 4</h6>
                <p>
                  <sub>Sub Categorys 4</sub>
                </p>
                <p>
                  <sub>Sub Categorys 4</sub>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
