const Movie = require('../model/gb.model');

module.exports.findAllMovieSchema = (req, res) => {
    Movie.find()
        .then((allMovieSchema) => {
            res.json({ Movie: allMovieSchema })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}

module.exports.createMovieSchema = (req, res) => {
    Movie.create(req.body)
        .then((newMovieSchema) => {
            res.json({ Movie: newMovieSchema })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}

module.exports.findOneMovieSchema = (req, res) => {
    Movie.findOne({ _id: req.params.id })
        .then((oneMovieSchema) => {
            res.json({ Movie: oneMovieSchema })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}

module.exports.updateMovieSchema = (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { runValidators: true }
    )
        .then((updatedMovieSchema) => {
            res.json({ Movie: updatedMovieSchema })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}

module.exports.deleteMovieSchema = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}