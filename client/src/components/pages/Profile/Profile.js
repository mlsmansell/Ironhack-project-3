import React, { Component } from 'react'

import ArtistCard from './../../pages/Artists-list/Artist-card'
import ArtistsService from './../../../service/artists.service'

import { Container, Row } from 'react-bootstrap'

import './Profile.css'


class Profile extends Component {


    constructor(props) {
        super(props)
        this.state = {
            username: this.props.loggedUser
        }
        this.artistsService = new ArtistsService()
    }


    render() {

        return (
            <>

                <Container>
                    <h1>Hi {this.props.loggedUser.username} welcome to your profile!</h1>
                    <Row>

                        {this.props.loggedUser.favourites.map(elm => <ArtistCard refreshUser={() => this.props.refreshUser()} loggedUser={this.props.loggedUser} isFromUser key={elm._id}{...elm} />)}

                    </Row>
                </Container>
            </>
        )
    }
}
export default Profile