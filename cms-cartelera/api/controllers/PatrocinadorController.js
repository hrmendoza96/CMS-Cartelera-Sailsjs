/**
 * PatrocinadorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    edit: function(req, res) {
        Patrocinador.find({}).exec((err, patrocinador) => {
            if (err) {
                res.send(500, { error: 'Error en Base de Datos' });
            }

            res.view('pages/patrocinador', { patrocinador: patrocinador[0] }); //Siempre es el primer elemento ya que la colección es de un elemento único
        });
    },
    // create: function(req, res) {
    //     var nombre = req.body.nombre;
    //     var logo = req.body.logo;
    //     var color = req.body.color;
    //     var url = req.body.url;

    //     Patrocinador.create({ nombre: nombre, logo: logo, color: color, url: url }).exec((err) => {
    //         if (err) {
    //             res.send(500, { error: 'Error en Base de Datos' });
    //         } else {
    //             res.redirect('/');
    //         }

    //     });

    //     return false;
    // },

    update: function(req, res) {
        var nombre = req.body.nombre;
        var logo = req.body.logo;
        var color = req.body.color;
        var url = req.body.url;

        Patrocinador.update({ id: req.params.id }, { nombre: nombre, logo: logo, color: color, url: url }).exec((err) => {
            if (err) {
                res.send(500, { error: 'Error en Base de Datos [update]' });
            } else {
                res.redirect('/');
            }

        });

        return false;
    }





};