import React from "react";
import "./about.css";
import Family from "../../images/Family.jpg";

import cplus from "../../images/c++.png";
import csharp from "../../images/cSharp.png";
import unity from "../../images/unity.png";
import zbrush from "../../images/zbrush-logo.jpeg";
import web from "../../images/html-css-js-logos.png";

import linked from '../../images/linked.png'
import discord from '../../images/discord.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'
import git from '../../images/Octocat.png'

class About extends React.Component {
  render() {
    return (
      <section className="body">
        <div className="main">
          <div className="left">
            <h1>Keith Prince</h1>
            <img src={Family} className="fam" alt="Keith and his friends" />
          </div>
          <div className="right">
            <h2>
              Full Stack Web Developer, Game Programmer, and Creator
            </h2>
            <p>
              My name is Keith, and I have spent the last 10 years of my life learing to program. Starting from a summer camp
              in middle school that taught me Game Maker when i was 12. I have loved using computers to create since then.
              I have learned everything from mobile development, to full stack engineering, and game design and creation.
              And I am always striving to learn something new!
            </p>
            <p>
              In my free time you might find me playing tabletop games with my
              firends, in a woodshop, or snowboarding.
            </p>
          </div>
        </div>

        <section className="skills">
          <h2>Skills</h2>
          <img src={web} className="items" alt="HTML 5, CSS, and Javascript"/>
          <div className="flex">
            <img src={csharp} className="item" alt="C Sharp"/>
            <img src={cplus} className="item" alt="C Plus Plus"/>
            <img src={unity} className="item" alt="Unity"/>
            <img src={zbrush} className="item" alt="Z Brush"/>
          </div>
        </section>

        <section className="contact">
          <h2>Contact Me</h2>
          <div className="flex">
          
          <p className="cont">
            <img src={mail} className="item" alt="email"/><br/>
            <a href = "mailto:keithcprince@gmail.com">keithcprince@gmail.com</a>
          </p>
          <p className="cont">
            <img src={linked} className="item" alt="Linked In"/><br/>
            <a href = "https://www.linkedin.com/in/keith-prince-429697a8/">
               Keith Prince</a>
          </p>
          <p className="cont">
            <img src={git} className="item" alt="Github"/><br/>
            <a href = "https://github.com/SwordSageKeith">Sword Sage Keith</a>
          </p>
          <p className="cont">
            <img src={phone} className="item" alt="Phone number"/><br/>
            978-502-7843
          </p>
          </div>
        </section>
      </section>
    );
  }
}

export default About;


/**
 * <p className="cont">
            <img src={discord} className="item" alt="discord"/><br/>
            Keith#5025
          </p>
 */