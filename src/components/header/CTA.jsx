import React from "react";
import CV from "../../assets/cv/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href="{CV} download" className="btn">
        دانلود رزومه
      </a>
      <a href="#contact" className="btn">
        تماس با من
      </a>
    </div>
  );
};

export default CTA;
