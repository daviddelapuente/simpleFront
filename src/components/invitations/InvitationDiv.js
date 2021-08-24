import React, { Component } from 'react';
import {
    Col,
  } from "react-bootstrap";

export default class InvitationDiv extends Component {
    
constructor(props) {
    super(props);
    this.text=props.text;
}

  render() {
    return (
        <Col className="nopadding">
            <div className="invitation">
                {this.text}
            </div>
        </Col>
    );
  }
}