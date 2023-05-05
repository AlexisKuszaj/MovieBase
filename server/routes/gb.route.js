const MovieSchemaController = require('../controller/gb.controller');

module.exports = app => {
    app.get('/api/allMovieSchema', MovieSchemaController.findAllMovieSchema);
    app.post('/api/newMovieSchema', MovieSchemaController.createMovieSchema);
    app.get('/api/oneMovieSchema/:id', MovieSchemaController.findOneMovieSchema);
    app.put('/api/updateMovieSchema/:id', MovieSchemaController.updateMovieSchema);
    app.delete('/api/deleteMovieSchema/:id', MovieSchemaController.deleteMovieSchema)
}