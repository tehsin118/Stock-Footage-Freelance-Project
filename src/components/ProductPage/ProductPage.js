import React from "react";
// import MainBody from "../LandingPage/MainBody/MainBody";
import MoreProducts from "./MoreProducts";
import ProductDetail from "./ProductDetail";

function ProductPage() {
  return (
    <div>
      <ProductDetail
        nameProduct="Name Product"
        nameBrand="Name Brand"
        img="\Images\MainBody\Frame.png"
        productDetails=" Sed ut perspiciatis unde omnis iste natus error sit
      voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ed ut perspiciatis unde omnis iste natus
      error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque Sed ut perspiciatis unde omnis iste
      natus error sit voluptatem accusantium doloremque
      laudantium, e"
        productPrice="[ PRICE ]"
        productTimeViewed="Times Viewed: [ X Times ]"
        subCategory="[ Sub category 1 ]"
      />

      <MoreProducts />
    </div>
  );
}

export default ProductPage;
