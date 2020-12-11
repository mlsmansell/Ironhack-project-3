module.exports = app => {

    // Base URLS
    app.use('/api/artists', require('./artist.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}