import React from "react";

import "./AsideBar.css";
function AsideBar() {
  return (
    <div className="AsideBar ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="categories">
              <ul>
                <li>
                  <a href="">Category 1</a>
                </li>
                <li>
                  <a href="">Category 2</a>
                </li>
                <li>
                  <a href="">Category 3</a>
                </li>
                <li>
                  <a href="">Category 4</a>
                </li>
                <li>
                  <a href="">Collections</a>
                </li>
                <li>
                  <a href="">Filmakers</a>
                </li>
                <li className="start-free-btn">
                  <a href="">Start free now</a>
                </li>

                <li className=" pricing">
                  <a href="">pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideBar;
