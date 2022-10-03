import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h2>مهارت های من </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>توسعه فرانت اند</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        {/* Backend */}
        <div className="backend">
          <h3>توسعه بک اند</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>PHP</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Laravel</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>NodeJs</h4>
              <small className="text-light"> Experienced </small>{" "}
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Graphql</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>SQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Mysql</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
