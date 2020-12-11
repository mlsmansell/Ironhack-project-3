import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ArtistService from '../../../service/artists.service'


class ArtistCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            artists: "",
        }
        this.artistsService = new ArtistService()
    }
    
    deleteArtist = () => {

        const artist_id = this.props._id

            this.artistsService
            .deleteArtist(artist_id)
            .then(() => this.props.history.push('/artists'))
            .catch(err => console.log('err'))
    }


    render() {
        
    return (
        <>
        <Col lg={4}>
            <Card className="artist-card">
                <Card.Img variant="top" src={this.props.imageUrl} />
                <Card.Body>
                        <Card.Title className="cardTitle">{this.props.name}</Card.Title>
                        <Link className="btn btn-outline-secondary" size="sm" to={`/artists/${this.props._id}`}>Show Details</Link>
                        <Button variant="outline-secondary" size="sm" onClick={this.deleteArtist}>Delete Artist</Button>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
        }
}

export default ArtistCard