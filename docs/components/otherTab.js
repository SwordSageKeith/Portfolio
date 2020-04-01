import React from 'react'
import {withRouter} from 'react-router-dom'

class otherTab extends React.Component{
  constructor(props){
    super(props)
  }
  
  homeClick = () =>{
    this.props.history.push('/')
  }

  aboutClick = () =>{
    this.props.history.push('/modeling')
  }

  noteClick = () =>{
    this.props.history.push('/notable')
  }

  otherClick = () =>{
    this.props.history.push('/untitled')
  }


  render(){
    return (
      <header>
        <button onClick={this.homeClick}>Home</button> | 
        <button onClick={this.aboutClick}>Modeling</button> | 
        <button onClick={this.otherClick}>Untitled Project</button>
      </header>
    )
  }
}

export default withRouter(otherTab)