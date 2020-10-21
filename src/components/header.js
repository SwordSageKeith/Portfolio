import React from 'react'
import './header.css'
import {withRouter} from 'react-router-dom'

class Header extends React.Component{
  constructor(props){
    super(props)
  }
  
  homeClick = () =>{
    this.props.history.push('/')
  }

  aboutClick = () =>{
    this.props.history.push('/about')
  }

  noteClick = () =>{
    this.props.history.push('/all')
  }

  otherClick = () =>{
    this.props.history.push('/other')
  }


  render(){
    return (
      <header>
        <button className=" navi" onClick={this.homeClick}>Home</button> | 
        <button className=" navi" onClick={this.aboutClick}>About Me</button> | 
        <button className=" navi" onClick={this.noteClick}>All Work</button> | 
        <button className=" navi" onClick={this.otherClick}>Other Work</button>  
      </header>
    )
  }
}

export default withRouter(Header)

//<button onClick={this.otherClick}>Other Work</button>