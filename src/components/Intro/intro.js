import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import abdullah10 from "../../assets/abdullah10.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Syed Abdullah</span>
          <br /> Web & App Developer
        </span>
        <p className="introPara">
          I am a skilled web and app developer with a proven track record
          <br /> of creating visually appealing and user-friendly websites and
          mobile
          <br /> applications, delivering exceptional digital experiences.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btmImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={abdullah10} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
