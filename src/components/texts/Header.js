import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
        <div style={{width:"800px"}}>
            <div style={{xjustifyContent:"flex-start",display:"flex"}}>
              <p style={{fontSize:"25px",color:"black"}}>{this.props.text}</p>
            </div>
        </div>
    );
  }
}