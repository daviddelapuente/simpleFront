import React, { Component } from 'react';
import Invitation
 from './Invitation';
export default class Invitations extends Component {
  render() {
    return (
        <>
            <Invitation name="Juanito" total="3" balance="15000"/>
            <Invitation name="Camilo" total="1" balance="5000"/>
            <Invitation name="María" total="2" balance="10000"/>
        </>
    );
  }
}