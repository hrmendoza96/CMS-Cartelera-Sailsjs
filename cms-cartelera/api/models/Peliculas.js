/**
 * Peliculas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        nombre: {
            type: 'string'
        },
        url: {
            type: 'string'
        },
        fecha_inicio: {
            type: 'string'
        },
        fecha_vencimiento: {
            type: 'string'
        },

    },
    datastore: 'mongodb'



};