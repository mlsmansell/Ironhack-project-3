import React, { Component } from "react";

import ArtistCard from "./../../pages/Artists-list/Artist-card";
import ArtistsService from "./../../../service/auth.service";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            username: this.props.loggedUser,
        };
        this.artistsService = new ArtistsService();
    }

    componentDidMount = () => {
        const user_id = this.props.match.params.user_id;

        this.artistsService
            .getuser(user_id)
            .then((res) => this.setState({ user: res.data }))
            .catch((err) => console.log("err"));
    };
    render() {
        return (
            <>
                <Container>
                    <h1>You are visiting {this.state.user != undefined && this.state.user.username}'s profile </h1>
                    <Link to="/users" className="btn btn-outline-secondary" size="sm" style={{marginBottom: "20px"}}> Go Back </Link>
                    <Row>
                        {this.state.user != undefined && this.state.user.favourites.map((elm) => (
                            <ArtistCard
                                refreshUser={() => this.props.refreshUser()}
                                loggedUser={this.props.loggedUser}
                                key={elm._id}
                                {...elm}
                            />
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}
export default UserProfile;
