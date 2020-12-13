import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'


import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        //console.log(this.state)
        this.authService
            .signup(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/artists')
            })
            .catch(err => console.log(err))
    }
    componentDidUpdate() {
        if (this.props.loggedUser != undefined) {
            this.props.history.push("/profile");
        }
    }


    render() {

        return (

            <>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>Signup</h1>
                            <hr />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Button variant="outline-secondary" size="sm" type="submit">Signup</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>


            </>

        )

    }
}

export default Signup