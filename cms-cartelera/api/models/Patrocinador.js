/**
 * Patrocinador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        nombre: {
            type: 'string'
        },
        logo: {
            type: 'string'
        },
        color: {
            type: 'string'
        },
        url: {
            type: 'string'
        },


    },
    datastore: 'mongodb'

};