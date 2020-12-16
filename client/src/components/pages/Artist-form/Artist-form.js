import React, { Component } from 'react'
import ArtistsService from './../../../service/artists.service'


import { Form, Button } from 'react-bootstrap'

class ArtistForm extends Component{

    constructor() {
        super()
        this.state = {
            name: "",
            genre: "",
            imageUrl: "",
            description: "",
            recommendedAlbum: ""
        }
        this.artistsService = new ArtistsService()
    }

     handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.artistsService
            .saveArtist(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {

        return (

            <>
                <h1>New Artist</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="genre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" name="genre" value={this.state.genre} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="imageUrl">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="recommendedAlbum">
                        <Form.Label>Recommended Album</Form.Label>
                        <Form.Control type="text" name="recommendedAlbum" value={this.state.recommendedAlbum} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="outline-secondary" size="sm" style={{marginTop: "10px"}} type="submit">Create New Artist</Button>
                </Form>
            </>
        
        )

    }
}

export default ArtistForm