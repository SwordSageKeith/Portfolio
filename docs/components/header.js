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
    this.props.history.push('/notable')
  }

  otherClick = () =>{
    this.props.history.push('/other')
  }


  render(){
    return (
      <header>
        <button onClick={this.homeClick}>Home</button> | 
        <button onClick={this.aboutClick}>About Me</button> | 
        
      </header>
    )
  }
}

export default withRouter(Header)

//<button onClick={this.otherClick}>Other Work</button>