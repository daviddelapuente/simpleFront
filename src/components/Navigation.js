import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation =() =>{
    return(
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Signup">Registrar</Nav.Link>
                        <Nav.Link href="/MyInvitations">Ver invitaciones </Nav.Link>
                        <Nav.Link href="/NewLink">Invitar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;