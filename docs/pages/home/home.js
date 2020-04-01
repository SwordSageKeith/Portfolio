import React from "react";
import "./home.css";
import Keith from "../../images/Keith.png";
import goodmeal from "../../images/goodmeal.PNG";
import dnd from '../../images/dnd.PNG'
import Game from '../../images/Game.PNG'
import pkmn from '../../images/PokemonApp.PNG'

import linked from '../../images/linked.png'
import discord from '../../images/discord.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'
import git from '../../images/Octocat.png'

class Home extends React.Component {
  render() {
    return (
      <section className="body">
        <div className="top">
          <img src={Keith} id="me" />
          <div id="name">
            <h1>Keith Prince</h1>
            <h3>Fullstack Developer and Interactive Media Programmer</h3>
          </div>
        </div>

        <div className="goodmeal card">
          <div>
            <h2>Good Meal</h2>
            <h3>Save all your recipes and see what other people are cooking</h3>
            <p>
              Good meal is an application that lets users store and edit their
              own recipes, as well as view other users recipes. Additionally,
              you can track what foods and ingredients you have, and what you
              need to buy.
            </p>
            <ul>
              <li>Database design and management</li>
              <li>CSS sctlying on multiple pages</li>
              <li>
                Collaborated to create API endpoints and database i/o services
              </li>
              <li>Creation of input validation</li>
              <li>User testing and bug fixing</li>
            </ul>
          </div>

          <div>
            <img
              src={goodmeal}
              alt="screenshot of Good Meal page"
              className="good "
            />
            <div className="buttons">
              <a href="https://good-meal-client.herokuapp.com/">
                <button className="link">View Page</button>
              </a>
              <a href="https://github.com/thinkful-ei-firefly/recipe-client">
                <button className="link">View Github</button>
              </a>
            </div>
          </div>
        </div>

        <div className="dnd card">
          <div>
            <img
              src={dnd}
              alt="screenshot of Character Library page"
              className="good "
            />
            <div className="buttons">
              <a href="https://character-manager.herokuapp.com/login">
                <button className="link">View Page</button>
              </a>
              <a href="https://github.com/SwordSageKeith/Capstone-1">
                <button className="link">View Github</button>
              </a>
            </div>
          </div>

          <div>
            <h2>Character Library</h2>
            <h3>An easy way to save characters for 5th edition Dungeons and Dragons</h3>
            <p>
              Forget your character sheet again? Good thing you saved your character in your
              library. Keep important information like stats and skills so you dont have to 
              fret about not having your character sheet.
            </p>
            <ul>
              <li>Database design and management</li>
              <li>CSS sctlying</li>
              <li>
                API endpoints and database i/o functions
              </li>
              <li>Client site with React</li>
              <li>User testing and bug fixing</li>
            </ul>
          </div>
        </div>

        <div className="TBS card">
          <div>
            <h2>Untitled Project</h2>
            <h3>A personal project where I am creating a turn based war strategy game</h3>
            <p>
              I am working with my friends to create a game! This project is something we are all working on
               in our free time. I have been using the project to learn more about Game Maker Studio 
               and learn its unique language GML. Updates coming soon.
            </p>
            
          </div>

          <div>
            <img
              src={Game}
              alt="screenshot of Gameplay page"
              className="good "
            />
          </div>
        </div>

        <div className="pkmn card">
          <div>
            <img
              src={pkmn}
              alt="screenshot of Pokemon Quiz page"
              className="good "
            />
            <div className="buttons">
              <a href="https://thinkful-ei-firefly.github.io/Keith-Julian-quiz/">
                <button className="link">View Page</button>
              </a>
              <a href="https://github.com/thinkful-ei-firefly/Keith-Julian-quiz">
                <button className="link">View Github</button>
              </a>
            </div>
          </div>

          <div>
            <h2>Test your Pokemon knowledge!</h2>
            <h3>Can you name Pokemon based on just their silhouette</h3>
            <p>
            This is a short quiz of 10 questions that tests your knowledge of Pokemon.
            How well do you know generation 1 through 3 Pokemon?
            </p>
          </div>
        </div>


        <div className="goodmeal card"></div>

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

export default Home;

/*
<p className="cont">
            <img src={discord} className="item" alt="discord"/><br/>
            Keith#5025
          </p>

*/
