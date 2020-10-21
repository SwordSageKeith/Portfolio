import React from "react";
import storage from '../../storage';
import './work.css'


class Work extends React.Component {
    draw = () => {
        let temp = storage.map(item => {
            return <div>
                <section className="flex">
                    <section className="noflex">
                        <h1>{item.title}</h1>
                        <h3>{item.sum}</h3>
                        <p>{item.role}</p>
                        <hr />
                        <p className="desc">{item.desc}</p>
                    </section>
                    <img src={item.img} />
                </section>
                <a>Go to Github</a>
                <hr />
            </div>
        })
        return temp;
    }

    render() {
        return (
            <main className="work">
                {this.draw()}
            </main>
        );
    }
};

export default Work;