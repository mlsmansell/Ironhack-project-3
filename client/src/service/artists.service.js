import axios from 'axios'

export default class ArtistService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/artists',
            withCredentials: true
        })
    }

    getArtists = () => this.apiHandler.get('/getAllArtists')
    getArtistsByText = artistId => this.apiHandler.get(`/getArtistsByText/${artistId}`)
    getArtist = artistId => this.apiHandler.get(`/getOneArtist/${artistId}`)
    saveArtist = artistInfo => this.apiHandler.post(`/newArtist/`, artistInfo)
    deleteArtist = artistId => this.apiHandler.post(`/deleteArtist/${artistId}`)
    deleteArtistFromAUser = artistId => this.apiHandler.post(`/deleteArtistFromAUser/${artistId}`)
    editArtist = (artistId, editedArtist) => this.apiHandler.put(`/editArtist/${artistId}`, editedArtist)
}