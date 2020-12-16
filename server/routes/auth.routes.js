const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")

const { checkId } = require('./middlewares')

const User = require("../models/user.model")



//SIGNUP

router.post('/signup', (req, res) => {

    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Fill in all fields' })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Unsafe password' })
        return
    }

    User
        .findOne({ username })
        .then(foundUser => {
            if (foundUser) {
                res.status(400).json({ message: 'This username is already taken' })
                return
            }

            const salt = bcrypt.genSaltSync(10)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Login error' }) : res.status(200).json(newUser)))
                .catch(error => {
                    console.log(error)
                    res.status(500).json({ message: 'Error saving user to DB' })
                })
        })
})



//LOGIN

router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error authenticating user' });
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails);
            return;
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Session error' }) : res.status(200).json(theUser))

    })(req, res, next)
})


//LOGOUT

router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Log out success!' });
})


router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({ message: 'Unauthorized' }))



//EDIT USER

router.put('/editUser/:user_id', (req, res) => {

    User
        .findByIdAndUpdate(req.params.user_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/all', (req, res) => {
    User
        .find({ 'role': 'user' })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneUser/:artist_id', checkId, (req, res) => {

    User
        .findById(req.params.artist_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



router.get('/getUserByText/:name', (req, res) => {
    User
        .find({ 'username': req.params.name })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router