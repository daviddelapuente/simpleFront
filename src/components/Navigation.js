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
                        {false ? (
                            <>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/Login">Iniciar sesión</Nav.Link>
                                <Nav.Link href="/Signup">Registrarme</Nav.Link>
                                <Nav.Link href="/MyInvitations">Mis invitaciones</Nav.Link>
                                <Nav.Link href="/NewLink">Nuevo link</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;