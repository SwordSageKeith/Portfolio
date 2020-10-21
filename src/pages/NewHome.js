import React from 'react';

class NewHome extends React.Component {


    render() {
        return <div>
            <header role="banner">
                <img className="portrait" src="images/Keith.png" />
                <div>
                    <h1>Keith Prince</h1>
                    <h3>Fullstack Developer and Game Programmer</h3>
                </div>
            </header>

            <section className="pkmnquiz link">
                <h2>Pokemon Quiz</h2>
                <p>Test your Pokemon knowledge! Can you identify any of 386 Pokemon by their silhouette?</p>
                <button className="smallOnly">See More</button>
            </section>

            <section className="goodmeal link">
                <h2 className="whiteText">Good Meal</h2>
                <p className="whiteText">Save your favorite recipes and see what other people are cooking!</p>
                <button className="smallOnly">See More</button>
            </section>

            <section className="aboutme link">
                <h2 className="whiteText">About Me</h2>
                <p className="whiteText">My favorite color is Purple! Find out more about me</p>
                <button className="smallOnly">See More</button>
            </section>

            <section className="modeling link">
                <h2 className="whiteText">3D Modeling</h2>
                <p className="whiteText">Yup! I have done some 3D modeling for games as well as for printing!</p>
                <button className="smallOnly">See More</button>
            </section>

            <section className="contactme link">
                <h2 className="whiteText">Contact Me</h2>
                <p className= "whiteText">Find out how you can reach me</p>
                <button className="smallOnly">See More</button>
            </section>
        </div>
    }

}

export default NewHome;