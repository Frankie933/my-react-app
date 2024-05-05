import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function NavMenu() {

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Franks React application <i class="bi bi-house-fill"></i>   </Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/12a-search-in-page">
                        <Nav.Link>
                                  Search <i className="bi bi-search"></i> 
                        </Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/albums-webapi">
                        <Nav.Link >
                     Music from webapi with pagination <i class="bi bi-music-note-beamed"></i> 
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
