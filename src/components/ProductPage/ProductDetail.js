import React from "react";
import "./ProductDetail.css";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  return (
    <div>
      <div className="productDetailPage">
        <div className="container">
          <div className="branding">
            <h1 className="mt-5">{props.nameProduct}</h1>
            <h5 className="mt-2 mb-5">{props.nameBrand}</h5>
          </div>
          <div className="product-detail">
            <div className="row">
              <div className="col-lg-7 col-12 imgProduct">
                <img src={props.img} alt="" className=" img-fluid " />
              </div>

              <div className="col-lg-5 col-12 discription ">
                <div className="para">
                  <p>{props.productDetails}</p>
                </div>

                <div className="price-time ">
                  <h5 className="">{props.productPrice}</h5>
                  <h5 className="mt-4">{props.productTimeViewed}</h5>
                </div>

                <div>
                  <Link
                    to=""
                    data-bs-toggle="modal"
                    data-bs-target="#productConfirmation"
                    class="buyProduct"
                  >
                    BUY PRODUCT
                  </Link>
                </div>
              </div>

              <div className="sub-category">
                <div className="col-lg-7 ">
                  <div className="row">
                    <div className="col-lg-4 col-md-5 col-12 sub-cat">
                      <Link to="/subCategory">{props.subCategory}</Link>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="mt-5 mb-5"> More Products</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade "
        id="productConfirmation"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content ">
            <div class="modal-header ">
              <div className="text-center">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Confirmation
                </h5>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <div className="deatil d-flex ">
                <div className="row">
                  <div className="col-2">
                    <img src="\Images\confirmation.svg" alt="" />
                  </div>

                  <div className="col-10">
                    <h6>Detail:</h6>
                    <p>Iste natus error sit voluptatem...</p>
                    <h6>Detail:</h6>
                    <p>xxxxx</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <a href="" className="btn-dark w-100">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
