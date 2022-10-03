import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/img/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>زهرا ناصری</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          اسکرول به پایین
        </a>
      </div>
    </header>
  );
};

export default Header;
