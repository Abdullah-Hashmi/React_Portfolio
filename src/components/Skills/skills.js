import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
// import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web desiner with experience in creating
        visually appealing and user-friendly websites. I have strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as adobe
        photoshop and Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Demo text, I will write here some other thing latter</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>Demo text, I will write here some other thing latter</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Demo text, I will write here some other thing latter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
