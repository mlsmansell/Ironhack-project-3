import React, { Component } from 'react'
import ArtistsService from './../../../service/artists.service'
import AuthService from './../../../service/auth.service'
import './Artist-details.css'
import DetailsForm from './Details-form'

import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ArtistDetails extends Component{

    constructor(props) {
        super(props)
        this.state = {
            artist: "",
            showModal: false
        }
        this.artistsService = new ArtistsService()
        this.authService = new AuthService()
    }

    componentDidMount = () => {

        const artist_id = this.props.match.params.artist_id
            
            this.artistsService
            .getArtist(artist_id)
            .then(res => this.setState({ artist: res.data }))
            .catch(err => console.log('err'))
    }


    refreshArtists = () => {
  
        const artist_id = this.props.match.params.artist_id

            this.artistsService
            .editArtist(artist_id)
            .then(res => this.setState({ artist: res.data }))
            .catch(err => console.log('err'))
    }


//ADD FAVOURITE
    
    addFavourite = artist_id => {

        const favArtists = this.props.loggedUser.favourites

        this.artistsService
            .getArtist(artist_id)
            .then(res => favArtists.push(res.data))
            .then(() => this.authService.editUser(this.props.loggedUser._id, { favourites: favArtists }))
            .then(() => this.props.history.push('/profile'))
            .catch(err => console.log('err'))
    
    }
    

    handleModal = visible => {
        this.setState({ showModal: visible })
        this.refreshArtists()
    }

    render() {

        return (
            
            <>
                <Container className="artist-details">
              
                        <h1>{this.state.artist.name}</h1>
                        <Row>
                            <Col md={6}>
                                <img className="artist-img" src={this.state.artist.imageUrl} alt={this.state.artist.name} />
                            </Col>
                            <Col md={4}>
                                <h3>Description</h3>
                                <p>{this.state.artist.description}</p>
                                <hr/>
                                <p>Genre: {this.state.artist.genre}</p>
                                <p>Recommended Album: {this.state.artist.recommendedAlbum}</p>
                            <Link to="/artists" className="btn btn-outline-secondary" size="sm">Go Back</Link>
                            <Button variant="outline-secondary" size="sm" onClick={() => this.handleModal(true)}>Edit Artist</Button>
                            <Button variant="outline-secondary" size="sm" onClick={() => this.addFavourite(this.state.artist._id)}>Fav</Button>
                            </Col>
                        </Row>
                </Container>
                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <DetailsForm closeModal={() => this.handleModal(false)}{...this.props} updateList={this.refreshArtists} />
                    </Modal.Body>
                </Modal>
                
            </>
        )

    }
}

export default ArtistDetails