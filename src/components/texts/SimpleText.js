import React, { Component } from 'react';

export default class SimpleText extends Component {
  render() {
    return (
        <div style={{width:"800px"}}>
            <div style={{justifyContent:"flex-start",display:"flex"}}>
                <p style={{textAlign:"start"}}>
                    {this.props.text}
                </p>
            </div>
        </div>

    );
  }
}