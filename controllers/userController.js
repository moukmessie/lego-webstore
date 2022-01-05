const insert_user= require('../models/userManager');

exports.sign_up = function (req, res) {
    res.render('layout_page.ejs', {title: "sign up", page:'partials/inscription.ejs'});
}

exports.register= function (req, res) {

    res.render('layout_page.ejs', {title: "sign in"})
}