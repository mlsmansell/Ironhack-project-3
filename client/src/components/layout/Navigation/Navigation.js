import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Navigation.css'

import AuthService from './../../../service/auth.service'

class Navigation extends Component {

    constructor() {
        super()
        this.authService = new AuthService
    }

    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {
        return (
            
                <Navbar bg="light" expand="md">
                    <Link to="/">
                        <Navbar.Brand className="titulo-navbar">Your Favourite Artists</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/">
                                <Nav.Link as="div">Home</Nav.Link>
                            </Link>
                            <Link to="/artists">
                                <Nav.Link as="div">Artists</Nav.Link>
                        </Link>
                        {
                            this.props.loggedUser
                                ?
                                <Nav.Link as="div" onClick={this.logOut}>Logout</Nav.Link>
                                :
                                <>
                                    <Link to="/signup">
                                        <Nav.Link as="div">Sign up</Nav.Link>
                                    </Link>
                                    <Link to="/login">
                                        <Nav.Link as="div">Login</Nav.Link>
                                    </Link>
                                </>
                        }
                        <Link to="/profile">
                            <Nav.Link as="div">Hello, {this.props.loggedUser ? this.props.loggedUser.username : 'new guest'}</Nav.Link>
                        </Link>
                        </Nav>
                        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            
        )
    }
}

export default Navigation