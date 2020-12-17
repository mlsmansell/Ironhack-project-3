import React, { Component } from "react";
import AuthService from "./../../../service/auth.service";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            value: ""
        };
        this.AuthService = new AuthService();
    }

    componentDidMount = () => this.refreshArtists();

    refreshArtists = () => {
        this.AuthService
            .getAll()
            .then((res) => this.setState({ users: res.data }))
            .catch((err) => console.log(err));
    };

    handleChange(e) {
        this.setState({ value: e.target.value })
        if (e.target.value == '') {
            this.refreshArtists();
        } else {
            this.AuthService
                .getUserByText(e.target.value)
                .then((res) => this.setState({ users: res.data }))
                .catch((err) => console.log(err));
        }

    }
    render() {
        return (
            <>
                <Container>
                    <h1>All Users</h1>
                    <input placeholder={'Filter by Name'} type="text" value={this.state.value} onChange={text => this.handleChange(text)} />

                    <Row>
                        {this.state.users.length == 0 ? (
                            <div>No results found</div>
                        )
                            :
                            this.state.users.map((user) => (
                                <Card style={{ width: '18rem', marginRight:"20px", marginBottom:"20px" }}>
                                    <Card.Body>
                                        <Card.Title style={{marginTop: "5px"}}>{user.username}</Card.Title>
                                        <Link className="btn btn-outline-secondary" size="sm" style={{marginBottom: "10px", marginTop: "10px"}} to={`/users/${user._id}`}> See profile </Link>
                                    </Card.Body>
                                </Card>
                            ))}
                    </Row>
                </Container>

            </>
        );
    }
}

export default User;
