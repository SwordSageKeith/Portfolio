import React from "react";
import Home from "./pages/home/home";
import Header from "./components/header";
import About from "./pages/about/about";
import other from "./pages/other/other";
import otherTab from "./components/otherTab";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'

function App() {
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
        <Route path= {'/'} component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
