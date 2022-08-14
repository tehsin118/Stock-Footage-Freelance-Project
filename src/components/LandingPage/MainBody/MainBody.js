import React from "react";
import AsideBar from "../AsideBar/AsideBar";
import "./MainBody.css";
import Frame from "../../ProductFrame/Frame";
function MainBody() {
  return (
    <div>
      <div className="main-body container-fluid ">
        <div className="row">
          <div className="col-md-3 aside">
            <AsideBar></AsideBar>
          </div>
          <div className="col-md-9 ">
            <div className="row  ">
              <div class="col-md-4 col-12">
                <Frame
                  img="\Images\MainBody\Frame.png"
                  nameProduct="Name Product"
                  nameBrand="Name Brand"
                />
              </div>
              <div class="col-md-4 col-12">
                <Frame
                  img="\Images\MainBody\Frame.png"
                  nameProduct="Name Product"
                  nameBrand="Name Brand"
                />
              </div>
              <div class="col-md-4 col-12">
                <Frame
                  img="\Images\MainBody\Frame.png"
                  nameProduct="Name Product"
                  nameBrand="Name Brand"
                />
              </div>
              <div class="col-md-4 col-12">
                <Frame
                  img="\Images\MainBody\Frame.png"
                  nameProduct="Name Product"
                  nameBrand="Name Brand"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
