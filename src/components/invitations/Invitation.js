import React, { Component } from 'react';
import {
    Row,
  } from "react-bootstrap";
import InvitationDiv from './InvitationDiv';
export default class Invitation extends Component {
    constructor(props) {
        super(props);
        this.name=props.name;
        this.total=props.total;
        this.balance=props.balance;
    }

  render() {
    return (
        <Row>
          <InvitationDiv text={this.name}/>
          <InvitationDiv text={this.total}/>
          <InvitationDiv text={this.balance}/>
        </Row>
    );
  }
}