import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="" className="footer__logo">
        رضا بختیاری
      </a>

      <ul className="peramlinks">
        <li>
          <a href="#">خانه</a>
        </li>
        <li>
          <a href="#About">درباره من</a>
        </li>
        <li>
          <a href="#Experience">مهارت های من</a>
        </li>
        <li>
          <a href="#services">خدمات</a>
        </li>
        <li>
          <a href="#Portfolio">نمونه کار ها</a>
        </li>
        <li>
          <a href="#Testimonials">نظرات مشتریان</a>
        </li>
        <li>
          <a href="#Contact">تماس با من</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>تمام حقوق مطعلق به زهرا ناصری</small>
      </div>
    </footer>
  );
};

export default Footer;
