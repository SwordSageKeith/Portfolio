import React from "react";
//import Home from "./pages/home/home";
import Header from "./components/header";
//import About from "./pages/about/about";
//import other from "./pages/other/other";
import NewHome from './pages/NewHome';
//import otherTab from "./components/otherTab";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'
import storage from './storage';
import Work from './pages/work/work'

function App() {

  return (
    <BrowserRouter>
      <link
        href="https://fonts.googleapis.com/css?family=Atomic+Age|Josefin+Sans:400,600i|Russo+One&display=swap"
        rel="stylesheet"
      ></link>
        <Header />
      <Switch>
      <Route path= {'/work'} component={Work}/>
        <Route path= {'/'} component={NewHome}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/*
<Route path= {'/about'} component={About}/>
        <Route path = {'/other'} component = {other}/>
*/ 