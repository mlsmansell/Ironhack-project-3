import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArtistService from "../../../service/artists.service";
import AuthService from "./../../../service/auth.service";

class ArtistCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: "",
        };
        this.artistsService = new ArtistService();
        this.authService = new AuthService();
    }

    deleteArtist = () => {
        const artist_id = this.props._id;
        if (this.props.isFromUser) {
            let favArtists = this.props.loggedUser.favourites;
            favArtists = favArtists.filter((e) => e._id != artist_id);
            this.authService
                .editUser(this.props.loggedUser._id, {
                    favourites: favArtists,
                })
                .then(() => this.props.refreshUser());
        } else {
            this.artistsService
                .deleteArtist(artist_id)
                .then(() => {
                    this.props.refreshArtists();
                    this.props.history.push("/artists");
                })
                .catch((err) => console.log("err"));
        }
    };

    render() {
        return (
            <>
                <Col lg={4}>
                    <Card className="artist-card">
                        <Card.Img variant="top" src={this.props.imageUrl} />
                        <Card.Body>
                            <Card.Title className="cardTitle">{this.props.name}</Card.Title>
                            <Link
                                className="btn btn-outline-secondary"
                                size="sm"
                                to={`/artists/${this.props._id}`}
                            >
                                Show Details
              </Link>
                            {((this.props.loggedUser != undefined && this.props.loggedUser.role == "admin") || this.props.isFromUser) && (
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={this.deleteArtist}
                                >
                                    Delete Artist
                                </Button>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    }
}

export default ArtistCard;
