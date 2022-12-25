import React from 'react'
import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';

export default function Header() {
    return (
        <>
            <Navbar sticky="top" collapseOneSelect expand="md" bg="danger" variant="danger">
                <Container>
                    <NavbarBrand className="nav-brand">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3565/3565418.png"
                            href="/"
                            height="45"
                            width="45"
                            className="s-inline-block align-top"
                            alt="logo"
                        />
                        You<span style={{color: 'white'}}>R</span>ecipes
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="responsove-navbar-nav" />
                    <Navbar.Collapse id="responsove-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="text-nowrap">About</Nav.Link>
                            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    )
}
