import React, { Component } from 'react'
import ArtistsService from './../../../service/artists.service'
import ArtistCard from './Artist-card'
import ArtistForm from './../Artist-form/Artist-form'

import { Container, Row, Button, Modal } from 'react-bootstrap'


import './Artist-list.css'

class ArtistList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            artists: [],
            showModal: false

        }
        this.artistsService = new ArtistsService()
    }

    componentDidMount = () => this.refreshArtists()


    refreshArtists = () => {
            
            this.artistsService
            .getArtists()
            .then(res => this.setState({ artists: res.data }))
            .catch(err => console.log(err))
    }

    handleModal = visible => {
        this.setState({ showModal: visible })
        this.refreshArtists()
    }
    render() {

        return (
            <>
            <Container>
                <h1>All Artists</h1>
                <Button className = "create-button" variant="outline-secondary" size="sm" onClick={() => this.handleModal(true)}>Create New Artist</Button>
                <Row>
                    {this.state.artists.map(elm => <ArtistCard key={elm._id} {...this.props}{...elm}/>)}
                </Row>
                </Container>

                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <ArtistForm closeModal={() => this.handleModal(false)} updateList={this.refreshArtists} />
                    </Modal.Body>
                </Modal>

            </>
        )

    }
}

export default ArtistList