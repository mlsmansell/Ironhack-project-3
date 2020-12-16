import axios from 'axios'


export default class ArtistService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
    }
    getUserByText = text => this.apiHandler.get(`/getUserByText/${text}`)
    getuser = userId => this.apiHandler.get(`/getOneUser/${userId}`)
    getAll = () => this.apiHandler.get('/all')
    signup = credentials => this.apiHandler.post('/signup', credentials)
    login = credentials => this.apiHandler.post('/login', credentials)
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
    editUser = (usertId, editedUser) => this.apiHandler.put(`/editUser/${usertId}`, editedUser)
}