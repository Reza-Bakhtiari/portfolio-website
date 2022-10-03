import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h2>تماس با من</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>ایمیل</h4>
            <h5>zahranaseri7852@gmail.com</h5>
            <a href="mailto:zahranaseri7852@gmail.com">فرستادن پیام</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>واتساپ</h4>
            <h5>+989985687852</h5>
            <a href="mailto:zahranaseri7852@gmail.com">فرستادن پیام</a>
          </article>

          {/* end of contact form */}
        </div>
        <form action="">
          <input type="text" name="name" placeholder="نام شما" required />
          <input type="email" name="email" placeholder="ایمیل شما" required />
          <textarea
            name="message"
            rows="7"
            placeholder="پیام شما"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            ارسال پیام
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
