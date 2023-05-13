import React from "react";
import logoImg from "../Img/logo.png";

export default function Navbar() {
  return (
    <nav className="w-100">
      <div className="container d-flex align-items-center">
        <div className="nav-logo w-50 ">
          <img src={logoImg} alt="" />
        </div>
        <div className="nav-content w-50">
          <ul className="vh-100 d-flex justify-content-evenly text-white text-capitalize">
            <li><a href="/">home</a></li>
            <li><a href="/about">about us</a></li>
            <li><a href="/services">services</a></li>
            <li>product</li>
            <li>content</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
