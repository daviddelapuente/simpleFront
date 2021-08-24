import React, { Component } from 'react';
import {
    Row,
  } from "react-bootstrap";
import HeaderDiv from './HeaderDiv';

export default class InvitationsHeader extends Component {
  render() {
    return (
        <Row>
          <HeaderDiv text="Nombre completo"/>
          <HeaderDiv text="Invitaciones"/>
          <HeaderDiv text="Total recibido $"/>
        </Row>
    );
  }
}