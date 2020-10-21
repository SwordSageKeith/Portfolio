import React from 'react';
import storage from '../storage';
import Keith from '../images/Keith.png';

class NewHome extends React.Component {
    arr = storage;



    render() {
        return <div>
            <section role="banner" className="banner">
                <img className="portrait" src={Keith} />
                <div>
                    <h1>Keith Prince</h1>
                    <h3>Fullstack Java Development and Website Design</h3>
                </div>
            </section>

            <main className="home">
                <button className="pkmnquiz link">
                    <h2>Pokemon Quiz</h2>
                    <p>Test your Pokemon knowledge! Can you identify any of 386 Pokemon by their silhouette?</p>
                </button>

                <button className="goodmeal link">
                    <h2 className="whiteText">Good Meal</h2>
                    <p className="whiteText">Save your favorite recipes and see what other people are cooking!</p>
                </button>

                <button className="aboutme link">
                    <h2 className="whiteText">About Me</h2>
                    <p className="whiteText">My favorite color is Purple! Find out more about me</p>
                </button>

                <button className="modeling link">
                    <h2 className="whiteText">3D Modeling</h2>
                    <p className="whiteText">Yup! I have done some 3D modeling for games as well as for printing!</p>
                </button>

                <footer >
                    <button className="link">
                        <h2 className="whiteText">Contact Me</h2>
                        <p className="whiteText">Find out how you can reach me</p>
                    </button>
                </footer>
            </main>
        </div>
    }

}

export default NewHome;