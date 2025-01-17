/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': 'HomepageController.renderIndex',
    '/homepage': { view: 'pages/homepage' },
    'GET /login': { view: 'user/login' },
    // 'GET /register': 'RegisterController.renderIndex',
    'POST /login': { controller: 'AuthController', action: 'login' },
    // 'POST /register': { controller: 'AuthController', action: 'register' },
    '/logout': { controller: 'AuthController', action: 'logout' },
    '/peliculas/list': { controller: 'PeliculasController', action: 'list' },
    '/peliculas/add': { controller: 'PeliculasController', action: 'add' },
    '/peliculas/create': { controller: 'PeliculasController', action: 'create' },
    '/peliculas/delete/:id': { controller: 'PeliculasController', action: 'delete' },
    '/peliculas/edit/:id': { controller: 'PeliculasController', action: 'edit' },
    '/peliculas/update/:id': { controller: 'PeliculasController', action: 'update' },
    '/patrocinador': { controller: 'PatrocinadorController', action: 'edit' },
    '/patrocinador/create': { controller: 'PatrocinadorController', action: 'create' },
    '/patrocinador/update/:id': { controller: 'PatrocinadorController', action: 'update' },

    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the routes in this file, it   *
     * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
     * not match any of those, it is matched against static assets.             *
     *                                                                          *
     ***************************************************************************/


};