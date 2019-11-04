/**
 * PeliculasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: function(req, res) {
        Peliculas.find({}).exec((err, peliculas) => {
            if (err) {

                res.send(500, { error: 'Error en Base de Datos' });
            }

            res.view('pages/list', { peliculas: peliculas });
        });
    },
    add: function(req, res) {
        res.view('pages/add');
    },

    create: function(req, res) {
        var nombre = req.body.nombre;
        var url = req.body.url;

        Peliculas.create({ nombre: nombre, url: url }).exec((err) => {
            if (err) {
                res.send(500, { error: 'Error en Base de Datos' });
            } else {
                res.redirect('/peliculas/list');
            }

        });
    },

    delete: function(req, res) {
        Peliculas.destroy({ id: req.params.id }).exec((err) => {
            if (err) {
                res.send(500, { error: 'Error en Base de Datos' });
            } else {
                res.redirect('/peliculas/list');
            }
        });

        return false;
    },
    edit: function(req, res) {
        Peliculas.findOne({ id: req.params.id }).exec((err, pelicula) => {
            if (err) {
                res.send(500, { error: 'Error en Base de Datos' });
            } else {
                res.view('pages/edit', { pelicula: pelicula });
            }
        });
    },

    update: function(req, res) {
        var nombre = req.body.nombre;
        var url = req.body.url;

        Peliculas.update({ id: req.params.id }, { nombre: nombre, url: url }).exec((err) => {
            if (err) {
                res.send(500, { error: 'Error en Base de Datos' });
            } else {
                res.redirect('/peliculas/list');
            }

        });

        return false;
    }

};