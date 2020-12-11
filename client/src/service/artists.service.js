import axios from 'axios'

export default class ArtistService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/artists',
            withCredentials: true
        })
    }

    getArtists = () => this.apiHandler.get('/getAllArtists')
    getArtist = artistId => this.apiHandler.get(`/getOneArtist/${artistId}`)
    saveArtist = artistInfo => this.apiHandler.post(`/newArtist/`, artistInfo)
    deleteArtist = artistId => this.apiHandler.post(`/deleteArtist/${artistId}`)
    editArtist = (artistId, editedArtist) => this.apiHandler.put(`/editArtist/${artistId}`, editedArtist)
}