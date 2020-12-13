import React, { Component } from "react";
import ArtistsService from "./../../../service/artists.service";
import ArtistCard from "./Artist-card";
import ArtistForm from "./../Artist-form/Artist-form";

import { Container, Row, Button, Modal } from "react-bootstrap";

import "./Artist-list.css";

class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            value: '',
            showModal: false,
        };
        this.artistsService = new ArtistsService();
    }

    componentDidMount = () => this.refreshArtists();

    refreshArtists = () => {
        this.artistsService
            .getArtists()
            .then((res) => this.setState({ artists: res.data }))
            .catch((err) => console.log(err));
    };

    handleModal = (visible) => {
        this.setState({ showModal: visible });
        this.refreshArtists();
    };
    handleChange(e) {
        this.setState({ value: e.target.value })
        if (e.target.value == '') {
            this.refreshArtists();
        } else {
            this.artistsService
                .getArtistsByText(e.target.value)
                .then((res) => this.setState({ artists: res.data }))
                .catch((err) => console.log(err));
        }

    }
    render() {
        return (
            <>
                <Container>
                    <h1>All Artists</h1>
                    {this.props.loggedUser != undefined &&
                        this.props.loggedUser.role == "admin" &&
                        <Button
                            className="create-button"
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => this.handleModal(true)}
                        >
                            Create New Artist
          </Button>
                    }

                    <input placeholder={'Busca por genero'} type="text" value={this.state.value} onChange={text => this.handleChange(text)} />
                    <Row>
                        {this.state.artists.length == 0 ? (
                            <div>no hay resultados</div>
                        )
                            :
                            this.state.artists.map((elm) => (
                                <ArtistCard
                                    loggedUser={this.props.loggedUser}
                                    refreshArtists={() => this.refreshArtists()}
                                    key={elm._id}
                                    {...this.props}
                                    {...elm}
                                />
                            ))}
                    </Row>
                </Container>

                <Modal
                    show={this.state.showModal}
                    onHide={() => this.handleModal(false)}
                >
                    <Modal.Body>
                        <ArtistForm
                            closeModal={() => this.handleModal(false)}
                            updateList={this.refreshArtists}
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default ArtistList;
