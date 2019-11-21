/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    renderIndex: function(req, res) {
        return res.view('user/register', { user: req.user });
    }

};