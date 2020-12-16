import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'


import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            error: false
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/artists')
            })
            .catch(err => this.setState({ error: true }))
    }


    render() {

        return (

            <>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>Login</h1>
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
                                {this.state.error && <div>Error</div>}
                                <Button variant="outline-secondary" size="sm" style={{marginTop: "10px"}} type="submit">Log in</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>

        )

    }
}

export default Login