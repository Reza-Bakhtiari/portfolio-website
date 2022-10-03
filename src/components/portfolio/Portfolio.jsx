import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img/portfolio1.jpg";
import IMG2 from "../../assets/img/portfolio2.jpg";
import IMG3 from "../../assets/img/portfolio3.jpg";
import IMG4 from "../../assets/img/portfolio4.jpg";
import IMG5 from "../../assets/img/portfolio5.png";
import IMG6 from "../../assets/img/portfolio6.jpg";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "صفحه داشبورد سایت رمزارز",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19300950-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 1,
    img: IMG2,
    title: "تمپلیت جدول و اینفوگرافی در فیگما",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19300950-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 1,
    img: IMG3,
    title: "رابط کاربری و دیتا دیزاین در وب اپ ",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19300950-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 1,
    img: IMG4,
    title: "تودو لیست با قابلیت دنبال کردن اهداف",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19300950-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 1,
    img: IMG5,
    title: "تمپلیت جدول و اینفوگرافی در فیگما",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19300950-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 1,
    img: IMG6,
    title: "تمپلیت جدول و اینفوگرافی در فیگما",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19300950-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>نمونه کار ها</h2>
      <div className="container portfolio__container">
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn ">
                گیت هاب
              </a>
              <a href={demo} className="btn btn-primary">
                دمو ها
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
