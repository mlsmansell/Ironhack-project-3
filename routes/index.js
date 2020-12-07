module.exports = app => {

    // Base URLS
    app.use('/api/artists', require('./artist.routes.js'))
}