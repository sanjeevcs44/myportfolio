import React from "react";
import "./scrollup.css";
const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const ScrollUp = this.document.querySelector(".scrollup");
    if (this.scrollY >= 560) ScrollUp.classList.add("show-scroll");
    else ScrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i class="uil uil-arrow-circle-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
