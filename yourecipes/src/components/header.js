import React from 'react'
import { Container, Navbar, Nav, NavbarBrand, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import SignUp from '../pages/SignUp';

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
                        You<span style={{ color: 'white' }}>R</span>ecipes
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="responsove-navbar-nav" />
                    <Navbar.Collapse id="responsove-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/News">News</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="text-nowrap">About</Nav.Link>
                        </Nav>
                        <Nav.Link as={Link} to="/signUp">
                            <Button variant="light">Sign Up</Button>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/News" element={<News />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </>
    )
}
