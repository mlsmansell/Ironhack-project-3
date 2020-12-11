// import React, { Component } from 'react'
import ArtistCard from './../../pages/Artists-list/Artist-card'
//import ArtistService from './../../../service/artists.service'
import { Container, Col } from 'react-bootstrap'

import './Profile.css'

const Profile = ({ loggedUser }) => {
    return (
        <Container>
            <h1>Hi {loggedUser.username} welcome to your profile!</h1>
            {/* <Col>
                {this.artists.map(elm => <ArtistCard key={elm._id} {...this.props}{...elm}/>)}
            </Col> */}

        </Container>
    )
}
// class Profile extends Component {

//     constructor() {
//         super(
//             this.state = {

//             }
//         )
//     }
//     render() {

//         return (
//             <>
//                 </>
//         )
//     }
// }
export default Profile