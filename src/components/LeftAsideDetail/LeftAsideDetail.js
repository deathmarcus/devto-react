import React from "react";
import heart from "../assets/images/SVG/heart.png"
import unicorn from "../assets/icons/SVG/unicorn.png"

const LeftAsideDetail = ({posts}) => {
  return (
    <div class="d-flex flex-row col-8 flex-lg-column left-aside-icon-container  col-lg-auto justify-content-evenly py-2" id="icongroup-container">

      <div class=" d-flex flex-lg-column col-2  col-lg-1 justify-content-between" id="icon-counter-container">
          <div class="icon-container" id="like-heart">
              <input type="checkbox" id="aside-icon-checkboxheart" class="checkboxhider" />
              <label for="aside-icon-checkboxheart" class="checkedlabel" id="checkboxheaartlabel" />
                <img src={heart} alt="" class="aside-icon-default" />
                <img src="./assets/images/SVG/hearthover.png" alt="" class="aside-icon-hover" />
                <img src="./assets/images/SVG/heartcheked.png" alt="" class="aside-icon-cheked" id="heart" />
          </div>
          <div class="counter-container d-flex align-items-center justify-content-center">
                  <span>${posts?.postLikesCount}</span>
          </div>
      </div>
      <div class=" d-flex flex-lg-column col-2  col-lg-1 justify-content-between" id="icon-counter-container">
          <div class="icon-container" id="unicorn-click">
              <input type="checkbox" id="aside-icon-checkboxunicorn" class="checkboxhider" />
              <label for="aside-icon-checkboxunicorn" class="checkedlabel" id="checkboxheaartlabel" />
                <img src={unicorn} alt="" class="aside-icon-default" />
                <img src="./assets/images/SVG/unicornhover.png" alt="" class="aside-icon-hover" />
                <img src="./assets/images/SVG/unicorncheked.png" alt="" class="aside-icon-cheked" id="unicorn" />
          </div>
          <div class="counter-container d-flex align-items-center justify-content-center">
              <span>${posts?.postUnicornCount}</span>
          </div>
      </div>
      <div class=" d-flex flex-lg-column col-2 justify-content-between col-lg-1" id="icon-counter-container">
          <div class="icon-container" id="save-flag">
              <input type="checkbox" id="aside-icon-checkboxsave" class="checkboxhider" />
              <label for="aside-icon-checkboxsave" class="checkedlabel" id="checkboxheaartlabel" />
                <img src="./assets/images/SVG/save.png" alt="" class="aside-icon-default" />
                <img src="./assets/images/SVG/savehover.png" alt="" class="aside-icon-hover" />
                <img src="./assets/images/SVG/savercheked.png" alt="" class="aside-icon-cheked" id="save" />
          </div>
          <div class="counter-container d-flex align-items-center justify-content-center">
              <span>${posts?.postSavedCount}</span>
          </div>
  
      </div>
      <div class=" d-flex flex-lg-column col-2 justify-content-between col-lg-1" id="icon-counter-container">
          <div class="icon-container">
              <input type="checkbox" id="aside-icon-checkboxdots" class="checkboxhider" />
              <label for="aside-icon-checkboxdots" class="checkedlabel" />
              <img src="./assets/images/SVG/dots.png" alt="" class="aside-icon-default" />
              <img src="./assets/images/SVG/dotshover2.png" alt="" class="aside-icon-hover" />
              <img src="./assets/images/SVG/dotshover2.png" alt="" class="aside-icon-cheked" id="dots" />
              <div class="pop-menu-container">
                  <ul class="menu-list p-1 m-0 d-flex flex-column" >
                      <li id="list-header"><a class="dropdown-item" href="#"><b>Copylink</b></a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Twitter</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to LinkedIn</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Reddit</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Hacker News</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share to Facebook</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#">Share Post via...</a></li>
                      <li id="list-item"><a class="dropdown-item" href="#" >Report Abuse</a></li>
                  </ul>
                  <div class="list-menu-icon-container">
  
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default LeftAsideDetail;