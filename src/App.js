import React from "react";
import Home from "./pages/home/home";
import Header from "./components/header";
import About from "./pages/about/about";
import other from "./pages/other/other";
import NewHome from './pages/NewHome';
import otherTab from "./components/otherTab";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'

function App() {

  let arr = [
    {
      title: "Good Meal",
      sum: "Save your favorite recipes and see what other people are cooking!",
      desc: `Good Meal is a recipe book and pantry cataloging service. Users can save and view
       their recipes as well as recipes that other users have shared, as well as keep track of
        what ingredients they have and what they need to buy.`,
      role: "",
      img: "",
      git: "",
      cli: ""
    },
    {
      title: "Pokemon Quiz",
      sum: "Test your knowledge of Pokemon!",
      desc: ``,
      role: "",
      img: "",
      git: "",
      cli: ""
    },
    {
      title: "",
      sum: "",
      desc: ``,
      role: "",
      img: "",
      git: "",
      cli: ""
    },
    {
      title: "",
      sum: "",
      desc: ``,
      role: "",
      img: "",
      git: "",
      cli: ""
    }
  ]



  return (
    <BrowserRouter>
      <link
        href="https://fonts.googleapis.com/css?family=Atomic+Age|Josefin+Sans:400,600i|Russo+One&display=swap"
        rel="stylesheet"
      ></link>
        <Route path= {'/'} component={Header}/>
      <Switch>
        <Route path= {'/about'} component={About}/>
        <Route path = {'/other'} component = {other}/>
        <Route path= {'/'} component={NewHome}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
