import React, { Component } from 'react';
import {
    Container,
  } from "react-bootstrap";
import InvitationsHeader from '../components/invitations/InvitationsHeader';
import Invitations from '../components/invitations/Invitations';


export default class MyInvitations extends Component {

  render() {
    return (
        <div className="perfilLayout">
            <Container fluid style={{"width":"70%"}}>
                <InvitationsHeader/>
                <Invitations/>
            </Container>
        </div>
    );
  }
}