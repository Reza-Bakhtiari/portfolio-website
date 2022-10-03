import React from "react";
import "./about.css";
import ME from "../../assets/img/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>درباره من </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> مشتری </h5>
              <small> 200+ مشتری راضی</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> پروژه </h5>
              <small> 80+ پروژه انجام شده</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> تجربه </h5>
              <small>3+ تجربه کار</small>
            </article>
          </div>

          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            تماس با من{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
