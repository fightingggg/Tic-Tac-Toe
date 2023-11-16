import React, { Component } from 'react'

export default class test extends Component {
  render() {
    console.log('this.props:' , this.props);
    
      return(
        <div>
        <div>{this.props.aprops}</div>

        <div>test</div>
        <div>Hello</div>
        </div>
      )
    
  }
}
