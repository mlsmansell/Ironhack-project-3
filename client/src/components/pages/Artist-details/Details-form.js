import React, { Component } from 'react'
import ArtistsService from '../../../service/artists.service'


import { Form, Button } from 'react-bootstrap'

class DetailsForm extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
    
            artist: undefined
            // {
            // name: this.props.name,
            // genre: this.props.genre,
            // imageUrl: this.props.imageUrl,
            // description: this.props.description,
            // recommendedAlbum: this.props.recommendedAlbum
            // }

        }
        this.artistsService = new ArtistsService()     
    }

    componentDidMount() {
        this.artistsService
        .getArtist(this.props.match.params.artist_id)
        .then(res => {
            this.setState({ artist: res.data })
            console.log(res)
            })
        .catch(err => console.log('err'))
     }
    
    handleInputChange = e => this.setState({
        artist: {
            ...this.state.artist,
            [e.target.name]: e.target.value  
    } })

    handleSubmit = e => {
        e.preventDefault()
        //console.log(this.props.match.params.artist_id)
        this.artistsService
            .editArtist(this.props.match.params.artist_id, this.state.artist)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {

        return (

            <>
                {this.state.artist ?
                <>
                <h1>Edit Artist</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.artist.name}onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="genre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" name="genre" value={this.state.artist.genre} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="imageUrl">
                        <Form.Label>Image (URL)</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.artist.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.artist.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="recommendedAlbum">
                        <Form.Label>Recommended Album</Form.Label>
                        <Form.Control type="text" name="recommendedAlbum" value={this.state.artist.recommendedAlbum} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="outline-secondary" size="sm" type="submit">Edit Artist</Button>
                    </Form>
                    </> :
                    null
                    }
            </>
        
        )

    }
}

export default DetailsForm