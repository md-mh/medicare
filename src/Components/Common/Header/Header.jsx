import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><h2>Medicare</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/profile">Doctors</Link>
                            <Link className="nav-link" to="/review">Review</Link>

                            {user.email && <span className="nav-link loginUser" >{user.displayName}</span>}
                            {user.email ? <button onClick={logOut} className="nav-link login" >Logout</button>
                                : <Link className="nav-link login" to="/login">Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;